#!/usr/bin/env node
/**
 * Offline checks for the installable EarlyLore skill.
 *
 * Frontmatter rules follow the Agent Skills specification as published at
 * https://agentskills.io/specification on 2026-11-14:
 * name length and charset, no leading, trailing, or consecutive hyphens,
 * name matches the parent directory, description 1-1024, compatibility
 * 1-500 when present, metadata is a string-to-string map, and only the
 * documented frontmatter keys are used.
 *
 * This file does not install the skill, call MCP, or send telemetry.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillDir = join(root, "skills", "earlylore-product-architect");
const skillFile = join(skillDir, "SKILL.md");
const failures = [];

function fail(message) {
  failures.push(message);
}

function validName(name) {
  if (typeof name !== "string") return false;
  if (name.length < 1 || name.length > 64) return false;
  if (name.startsWith("-") || name.endsWith("-")) return false;
  if (name.includes("--")) return false;
  for (const char of name) {
    if (char === "-") continue;
    if (char >= "0" && char <= "9") continue;
    const lower = char.toLowerCase();
    const upper = char.toUpperCase();
    if (lower !== char || upper === lower) return false;
  }
  return true;
}

function assertSpecSamples() {
  const samples = [
    ["pdf-processing", true],
    ["data-analysis", true],
    ["code-review", true],
    ["earlylore-product-architect", true],
    ["a", true],
    ["PDF-Processing", false],
    ["-pdf", false],
    ["pdf-", false],
    ["pdf--processing", false],
    ["", false],
    ["a".repeat(65), false],
    ["has space", false],
    ["under_score", false],
  ];
  for (const [name, expected] of samples) {
    if (validName(name) !== expected) {
      fail(`name rule mismatch for ${JSON.stringify(name)}`);
    }
  }
  if (validDescription("x") !== null) fail("single-character description should pass");
  if (validDescription("") === null) fail("empty description should fail");
  if (validDescription("x".repeat(1024)) !== null) fail("1024-character description should pass");
  if (validDescription("x".repeat(1025)) === null) fail("1025-character description should fail");
}

function validDescription(description) {
  if (typeof description !== "string" || description.length < 1 || description.length > 1024) {
    return "description must be 1-1024 characters";
  }
  if (description.trim().length === 0) return "description must not be whitespace";
  return null;
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) throw new Error("SKILL.md must start with ---");
  const end = text.indexOf("\n---\n", 4);
  if (end < 0) throw new Error("SKILL.md is missing the closing ---");
  const yaml = text.slice(4, end);
  const body = text.slice(end + 5);
  const data = {};
  let currentMap = null;
  let currentKey = null;
  for (const line of yaml.split("\n")) {
    if (line.trim() === "") continue;
    if (line.includes("\t")) throw new Error("frontmatter uses a tab");
    const nested = line.match(/^  ([A-Za-z0-9-]+): *(.*)$/);
    if (nested) {
      if (!currentMap || currentKey === null) throw new Error(`nested key outside a map: ${line}`);
      const raw = nested[2];
      if (raw === "") throw new Error(`empty nested value: ${line}`);
      currentMap[nested[1]] = unquote(raw);
      continue;
    }
    if (line.startsWith(" ")) throw new Error(`unexpected indent: ${line}`);
    const top = line.match(/^([A-Za-z0-9-]+): *(.*)$/);
    if (!top) throw new Error(`cannot parse frontmatter line: ${line}`);
    currentKey = top[1];
    if (top[2] === "") {
      currentMap = {};
      data[currentKey] = currentMap;
    } else {
      currentMap = null;
      data[currentKey] = unquote(top[2]);
    }
  }
  return { data, body };
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === ".git" || name === "node_modules") continue;
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path, out);
    else out.push(path);
  }
  return out;
}

function checkSecrets(label, text) {
  const patterns = [
    [/-----BEGIN (?:OPENSSH |RSA |EC )?PRIVATE KEY-----/, "private key"],
    [/\bghp_[A-Za-z0-9]{20,}/, "GitHub token"],
    [/\bgithub_pat_[A-Za-z0-9_]{20,}/, "GitHub fine-grained token"],
    [/\bAKIA[0-9A-Z]{16}\b/, "AWS access key"],
    [/\bx-access-token:[^\s@]+@/i, "embedded git credential"],
  ];
  for (const [pattern, name] of patterns) {
    if (pattern.test(text)) fail(`${label} contains a ${name}`);
  }
  const liveKey = /el_live_([A-Za-z0-9_-]{8,})/g;
  for (const match of text.matchAll(liveKey)) {
    if (match[1] !== "YOUR_TOKEN") {
      fail(`${label} contains a non-placeholder el_live_ value`);
    }
  }
}

function checkSkillTree() {
  const allowed = new Set([
    "SKILL.md",
    "references/tools.md",
    "references/fast-search.synthetic.json",
  ]);
  for (const path of walk(skillDir)) {
    const rel = relative(skillDir, path);
    if (!allowed.has(rel)) fail(`unexpected skill file: ${rel}`);
    if (rel.startsWith("scripts/") || rel.endsWith(".sh")) {
      fail(`skill ships an executable script: ${rel}`);
    }
  }
  for (const rel of allowed) {
    try {
      statSync(join(skillDir, rel));
    } catch {
      fail(`missing skill file: ${rel}`);
    }
  }
}

function checkSynthetic(path) {
  const data = JSON.parse(readFileSync(path, "utf8"));
  const product = data.contentText?.products?.[0];
  if (data.synthetic !== true || data.notAnObservation !== true) {
    fail(`${path} is not marked synthetic`);
  }
  if (product?.slug !== "synthetic-northwind-ledger") fail(`${path} slug changed`);
  if (product?.traffic !== null || product?.revenue !== null) {
    fail(`${path} must keep traffic and revenue null`);
  }
  if (!String(product?.domain || "").endsWith(".invalid")) {
    fail(`${path} domain must use the .invalid reservation`);
  }
}

function checkBody(body, references) {
  const required = ["## When to use", "## Inputs", "## Outputs", "## Limitations", "## Untrusted content"];
  for (const heading of required) {
    if (!body.includes(heading)) fail(`SKILL.md is missing ${heading}`);
  }
  const requiredPhrases = [
    "analyzeIfMissing` set to false",
    "Do not set `analyzeIfMissing` to true",
    "Do not call `earlylore_save_note_or_evaluate`",
    "unknown",
    "undisclosed",
    "YYYY-MM",
    "earlylore-product-architect",
    "npx skills add earlylore/docs --skill earlylore-product-architect",
    "earlylore-research",
  ];
  for (const phrase of requiredPhrases) {
    if (!body.includes(phrase)) fail(`SKILL.md is missing ${JSON.stringify(phrase)}`);
  }
  const stalePlays = ["Workflow_pain", "how_built", "Before_after"];
  for (const play of stalePlays) {
    if (body.includes(play)) fail(`SKILL.md includes stale play id ${play}`);
    const mentions = references.split(play).length - 1;
    if (mentions !== 1 || !references.includes("Those strings are not in the `play` enum above. Do not send them.")) {
      fail(`stale play id ${play} must appear only in the do-not-send note`);
    }
  }
  const allowedTools = new Set([
    "earlylore_list_my_workspace",
    "earlylore_get_evaluation",
    "earlylore_get_design_dna",
    "earlylore_get_niche_benchmark",
    "earlylore_search_products",
    "earlylore_inspect_product",
    "earlylore_inspect_creator",
    "earlylore_get_market_pulse",
    "earlylore_compare_products",
    "earlylore_save_note_or_evaluate",
    "earlylore_get_marketing_playbook",
  ]);
  const combined = `${body}\n${references}`;
  for (const match of combined.matchAll(/\bearlylore_[a-z_]+\b/g)) {
    if (!allowedTools.has(match[0])) fail(`unlisted tool name ${match[0]}`);
  }
  if (!combined.includes("launch_post") || !combined.includes("build_in_public")) {
    fail("marketing play enum from the public schema is incomplete");
  }
}

assertSpecSamples();
checkSkillTree();

const skillText = readFileSync(skillFile, "utf8");
const toolsText = readFileSync(join(skillDir, "references", "tools.md"), "utf8");
let parsed;
try {
  parsed = parseFrontmatter(skillText);
} catch (error) {
  fail(error.message);
}

if (parsed) {
  const { data, body } = parsed;
  const allowedKeys = new Set([
    "name",
    "description",
    "license",
    "compatibility",
    "metadata",
    "allowed-tools",
  ]);
  for (const key of Object.keys(data)) {
    if (!allowedKeys.has(key)) fail(`unknown frontmatter key ${key}`);
  }
  if (!validName(data.name)) fail(`invalid skill name ${JSON.stringify(data.name)}`);
  if (data.name !== "earlylore-product-architect") fail("canonical name changed");
  if (data.name !== basename(skillDir)) fail("name does not match the parent directory");
  const descriptionError = validDescription(data.description);
  if (descriptionError) fail(descriptionError);
  if (!String(data.description).includes("Use when")) {
    fail("description must say when to use the skill");
  }
  if (data.license !== "CC-BY-4.0") fail("license must stay CC-BY-4.0 with the repository");
  if (typeof data.compatibility !== "string" || data.compatibility.length < 1 || data.compatibility.length > 500) {
    fail("compatibility must be 1-500 characters");
  }
  if (!data.metadata || typeof data.metadata !== "object" || Array.isArray(data.metadata)) {
    fail("metadata must be a map");
  } else {
    for (const [key, value] of Object.entries(data.metadata)) {
      if (typeof value !== "string") fail(`metadata.${key} must be a string`);
    }
    if (data.metadata.author !== "EarlyLore") fail("metadata.author changed");
    if (data.metadata["legacy-folders"] !== "earlylore,earlylore-research") {
      fail("legacy folder aliases changed");
    }
    if (data.metadata.internal === "true" || data.metadata.internal === "1") {
      fail("skill must stay discoverable");
    }
  }
  if (body.trim().length === 0) fail("SKILL.md body is empty");
  checkBody(body, toolsText);
}

const example = readFileSync(join(root, "examples", "fast-search.synthetic.json"));
const skillExample = readFileSync(join(skillDir, "references", "fast-search.synthetic.json"));
if (!example.equals(skillExample)) fail("synthetic example copies differ");
checkSynthetic(join(root, "examples", "fast-search.synthetic.json"));

const textExtensions = new Set([".md", ".json", ".mjs", ".txt"]);
for (const path of walk(root).filter((path) => !path.includes("/.git/"))) {
  const rel = relative(root, path);
  if (rel.startsWith(".git/") || rel === "package.json" || rel.endsWith("package-lock.json")) {
    if (rel === "package.json" || rel.endsWith("package-lock.json")) {
      fail(`unexpected package manifest: ${rel}`);
    }
  }
  if (![...textExtensions].some((ext) => rel.endsWith(ext))) continue;
  checkSecrets(rel, readFileSync(path, "utf8"));
}

if (failures.length > 0) {
  for (const message of failures) console.error(`FAIL ${message}`);
  process.exit(1);
}

console.log("PASS frontmatter and skill checks");
console.log(`name=${parsed.data.name}`);
console.log(`description_length=${parsed.data.description.length}`);
console.log(`compatibility_length=${parsed.data.compatibility.length}`);
console.log("secrets=none");
console.log("package_manifest=absent");
console.log("skill_scripts=absent");
