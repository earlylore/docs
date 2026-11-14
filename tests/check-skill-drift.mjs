#!/usr/bin/env node
/**
 * Compare the installable SKILL.md with the hosted EarlyLore skill.
 *
 * Two public GET requests, with no Authorization header and no request body.
 * The script does not write the website, the index, or this repository.
 * A byte difference is printed and exits 0, because the docs repository and
 * the website are updated separately. --fail-on-drift makes that difference
 * an error for a release that intends the copies to match.
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const hostedUrl = "https://earlylore.com/skill.md";
const indexUrl = "https://earlylore.com/.well-known/agent-skills/index.json";
const skillPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "skills",
  "earlylore-product-architect",
  "SKILL.md",
);
const failOnDrift = process.argv.includes("--fail-on-drift");

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function assertEarlylore(response) {
  const url = new URL(response.url);
  if (url.protocol !== "https:" || url.hostname !== "earlylore.com") {
    throw new Error(`unexpected response URL ${response.url}`);
  }
}

async function getPublic(url) {
  const response = await fetch(url, {
    method: "GET",
    redirect: "follow",
    headers: {
      accept: "text/markdown, application/json;q=0.9, */*;q=0.8",
      "user-agent": "EarlyLoreDocsSkillCheck/1.0 (+https://github.com/earlylore/docs)",
    },
    signal: AbortSignal.timeout(20000),
  });
  assertEarlylore(response);
  if (response.status !== 200) {
    throw new Error(`${url} returned ${response.status}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

try {
  const localBytes = readFileSync(skillPath);
  const localDigest = sha256(localBytes);
  const hostedBytes = await getPublic(hostedUrl);
  const hostedDigest = sha256(hostedBytes);
  const index = JSON.parse((await getPublic(indexUrl)).toString("utf8"));
  const entry = Array.isArray(index.skills)
    ? index.skills.find((item) => item && item.name === "earlylore-product-architect")
    : null;

  if (!entry) {
    console.error("FAIL index has no earlylore-product-architect entry");
    process.exit(1);
  }
  if (entry.url !== hostedUrl) {
    console.error(`FAIL index url is ${entry.url}`);
    process.exit(1);
  }
  const expectedDigest = `sha256:${hostedDigest}`;
  if (entry.digest !== expectedDigest) {
    console.error(`FAIL index digest ${entry.digest} does not match hosted bytes ${expectedDigest}`);
    process.exit(1);
  }

  console.log(`hosted_sha256=${hostedDigest}`);
  console.log(`index_digest=${entry.digest}`);
  console.log("index_matches_hosted=yes");
  console.log(`local_sha256=${localDigest}`);
  if (localDigest === hostedDigest) {
    console.log("local-vs-hosted: match");
  } else {
    console.log("local-vs-hosted: differ");
    console.log("The installable file in this repository and https://earlylore.com/skill.md are different copies.");
    if (failOnDrift) process.exit(1);
  }
} catch (error) {
  console.error(`FAIL ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
