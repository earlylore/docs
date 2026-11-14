# Skill source of truth

Two public copies of the EarlyLore research skill exist. This page says which one an install uses, and how to see the difference without writing either copy.

Checked on 2026-11-14. That date is a documentation check, not a product release.

| Copy | Where | Role |
| --- | --- | --- |
| Installable skill | `skills/earlylore-product-architect/SKILL.md` in this repository | Source for `npx skills add earlylore/docs --skill earlylore-product-architect` after this file is on the default branch |
| Hosted skill | <https://earlylore.com/skill.md> | File named by <https://earlylore.com/.well-known/agent-skills/index.json> |

The index entry reviewed that day had `name` `earlylore-product-architect`, `type` `skill-md`, and `url` `https://earlylore.com/skill.md`. Its `digest` was `sha256:f825111ad0abde3dffa479a1adfe1cf33309e7e23694d6a92aa2ba7717934daa`, which matched the bytes of the hosted file. This repository does not serve that well-known URL. Publishing a second index here would not update the website.

The installable file and the hosted file are allowed to differ. The installable file is the one this repository can review. It keeps the canonical name, adds the research limits, and uses argument names from the public tool list. The hosted file remains the website copy until a later website change replaces it.

## Names

The Agent Skills `name` is `earlylore-product-architect`. The directory name is the same, which is what the specification requires.

Folders published on <https://earlylore.com/mcp> on 2026-11-14:

- Claude Code: `.claude/skills/earlylore/SKILL.md`
- Codex: `.agents/skills/earlylore/SKILL.md`

`earlylore` is a save-path alias, not a second skill. The 2026-11-10 docs in this repository also recorded `~/.claude/skills/earlylore-research/SKILL.md`. That folder was not on the 2026-11-14 page. Keep any existing file at those paths only as a pointer to the canonical skill, or replace it. Do not add another `SKILL.md` whose frontmatter name disagrees with its directory.

## Install smoke

On 2026-11-14, skills CLI 1.8.1 was run from a temporary directory, not from this repository. `npx skills add <this-repo> --list` found one skill, `earlylore-product-architect`. One install then used:

```bash
npx skills add <this-repo> --skill earlylore-product-architect -a cursor -y --copy
```

The CLI copied the skill to `.agents/skills/earlylore-product-architect` and wrote `skills-lock.json` in that temporary directory. The copy matched the source files. The skill directory contained no `scripts/` directory. Nothing from that temporary directory is committed here. That was one install, so the CLI's normal install telemetry was whatever the CLI sends for a single install. This repository does not record or invent an install count.

After the commit is on GitHub, `npx skills add earlylore/docs@<commit> --skill earlylore-product-architect --list` is the pre-merge pin. The unpinned command below reads the default branch, so it finds this skill after merge:

```bash
npx skills add earlylore/docs --skill earlylore-product-architect
```

## Check

From this repository:

```bash
node tests/validate-skill.mjs
node tests/check-skill-drift.mjs
```

`validate-skill.mjs` is offline. It checks the Agent Skills frontmatter rules, the canonical name, the synthetic example, and that the skill does not embed a live key.

`check-skill-drift.mjs` sends two public `GET` requests: the hosted skill and the well-known index. It checks that the index digest matches the hosted bytes, then prints the SHA-256 of the installable file. A difference is reported and is not a failure. The script does not upload, index, or edit either copy. Pass `--fail-on-drift` only when you intend the two files to be byte-identical.

When the connected MCP tool schema and either skill file disagree, the schema wins for argument names. Missing response fields stay unknown.

## What a website update would do

This repository cannot deploy earlylore.com. Making the hosted bytes match is a later change on the website: copy the merged `SKILL.md` to `/skill.md`, recompute the SHA-256, and update the digest in `/.well-known/agent-skills/index.json`. Re-run `node tests/check-skill-drift.mjs` afterward. The expected line is `local-vs-hosted: match`.
