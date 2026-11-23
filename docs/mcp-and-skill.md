# Hosted MCP server and Skill

Reviewed and synced on **2026-11-23** against <https://earlylore.com/mcp>, <https://earlylore.com/zh/mcp>, <https://earlylore.com/skill.md>, <https://earlylore.com/llms.txt>, and <https://earlylore.com/pricing>. For ready-to-copy client config files and the MCP Registry card (`server.json`), see the dedicated setup repository [earlylore/earlylore-mcp](https://github.com/earlylore/earlylore-mcp).

This repository also keeps a [CC BY 4.0](../LICENSE) installable lookup skill at [earlylore-product-architect](../skills/earlylore-product-architect/SKILL.md). How the website copy and docs copy compare is recorded in [skill-source.md](skill-source.md).

No authenticated call was made to the MCP endpoint while writing this page. Examples use the placeholder `el_live_YOUR_TOKEN` only.

## Endpoint and key

EarlyLore hosts a stateless Streamable HTTP MCP server (`com.earlylore/research`, `14` tools) for coding agents.

| Item | Value |
| --- | --- |
| Endpoint | `https://earlylore.com/api/mcp` |
| Auth | `Authorization: Bearer el_live_...` |
| Server card | <https://earlylore.com/api/mcp/server-card> |
| AI catalog & skills index | <https://earlylore.com/.well-known/ai-catalog.json> · <https://earlylore.com/.well-known/agent-skills/index.json> |
| Where the key is created | <https://earlylore.com/account> |
| Product guide | <https://earlylore.com/mcp> ([中文](https://earlylore.com/zh/mcp)) |
| Hosted setup repo | <https://github.com/earlylore/earlylore-mcp> |
| Skill spec | <https://earlylore.com/skill.md> |
| Skill name | `earlylore-product-architect` |

Personal tokens start with `el_live_`, are hashed at rest (SHA-256), and consume the same account quotas as web evaluation reports, Design DNA extractions, and full product profiles. Keep real tokens local—never commit one to Git or paste one into a pull request.

This server is account-scoped. Bulk feeds and higher MCP quotas are the commercial offer on <https://earlylore.com/pricing#custom-data-api> (`hello@earlylore.com`). Vaneform's separate API and MCP docs are linked from [data-sources-and-attribution.md](data-sources-and-attribution.md).

Supported clients include **Claude Code, Codex, Cursor, Antigravity, Windsurf, and Cline**, plus any MCP client supporting Streamable HTTP (`2025-11-25`, `2025-06-18`, `2025-03-26`) with a Bearer token.

## Connect Claude Code

```bash
claude mcp add --transport http earlylore https://earlylore.com/api/mcp \
  --header "Authorization: Bearer el_live_YOUR_TOKEN"
```

## Connect Cursor, Codex, Antigravity, Windsurf, or Cline

Add this JSON block to `.cursor/mcp.json` (Cursor), `mcp_config.json` (Antigravity), or your client's `mcpServers` config (templates in [earlylore/earlylore-mcp/configs](https://github.com/earlylore/earlylore-mcp/tree/main/configs)):

```json
{
  "mcpServers": {
    "earlylore": {
      "url": "https://earlylore.com/api/mcp",
      "headers": {
        "Authorization": "Bearer el_live_YOUR_TOKEN"
      }
    }
  }
}
```

## Install the Skill

Install directly from [earlylore/earlylore-mcp](https://github.com/earlylore/earlylore-mcp) (exact mirror of <https://earlylore.com/skill.md>):

```bash
npx skills add earlylore/earlylore-mcp --skill earlylore-product-architect
```

Or install the CC BY 4.0 lookup skill from this repository:

```bash
npx skills add earlylore/docs --skill earlylore-product-architect
```

Save-folder aliases on `.claude/skills/earlylore/SKILL.md` and `.agents/skills/earlylore/SKILL.md` also work locally; see [skill-source.md](skill-source.md).

The default safe lookup flow reads only public catalog evidence ([competitor-lookup.md](competitor-lookup.md)); saving notes, running new evaluations, live capture, and paid Design DNA extraction should wait for explicit user intent.

## Access and usage on 2026-11-23

Synced with <https://earlylore.com/pricing> and <https://earlylore.com/mcp>:

| Plan | Price | MCP calls | Full product details | Key allowances |
| --- | --- | --- | --- | --- |
| **Free** | `$0` | `30 / day` | `5 / month` | 5 Design DNA tries · 3 lifetime Standard evals (15 lifetime chat turns) · Compare 2 |
| **7-day Pro Trial** | `$0` (auto on sign-up, no card) | `30 / day` | `6` full details | 1 Deep + 3 Standard evals · 10 Deep chat turns · all 249 niches · 10% annual upgrade discount |
| **Idea Polish Pack** | `$9.9` one-time | Follows plan | `25` full details | 3 Deep + 3 Standard evals · 30 Deep 1v1 turns · 3 role boosts · 6 site analyses |
| **Validation Sprint Pack** | `$19` one-time | Follows plan | `60` full details | 8 Deep + 8 Standard evals · 80 Deep 1v1 turns · 8 role boosts · 15 site analyses |
| **Pro** | `$19/month` or `$144/year` (`$12/mo`) | `200 / day` | `500 / month` | Unlimited Design DNA · 25 Deep + 50 Standard evals/mo (`12/day` cap) · Compare 4 · Export |
| **Max** | `$49/month` or `$384/year` (`$32/mo`) | `1,000 / day` | `5,000 / month` | Unlimited Design DNA · 80 Deep + 160 Standard evals/mo (`25/day` cap) · Compare 8 · Stealth slots |

Evaluation packs never expire, and 100% of pack spend within 14 days (up to `$19`) credits toward Pro or Max Annual at checkout. Optional **30-Day** and **1-Year USD One-Time Passes** are available on Pro and Max with zero auto-renewal. Always confirm <https://earlylore.com/pricing> before purchasing.

## Tools and quotas (14 tools)

Argument schemas are documented in [the skill tool reference](../skills/earlylore-product-architect/references/tools.md).

| Tool | Availability | Quota cost |
| --- | --- | --- |
| `earlylore_search_products` | Free top results; Pro / Max full filters across 540K+ products | Daily MCP call |
| `earlylore_inspect_product` | Free 5 / Trial 6 / Packs / Pro 500 / Max 5,000 per month | Monthly profile quota (with deduplication) |
| `earlylore_get_evaluation` | All plans, including packs | Daily MCP call (reads stored report) |
| `earlylore_get_design_dna` | Free 5 tries; Pro / Max unlimited across 130K+ analyzed sites | Design DNA allowance on Free / Packs; 0 on Pro / Max |
| `earlylore_get_niche_benchmark` | Pro / Max (plus 7-day Pro Trial) | Daily MCP call |
| `earlylore_compare_products` | Free 2 / Pro 4 / Max 8 products | Monthly profile quota for new inspections |
| `earlylore_get_market_pulse` | Free macro view; Pro / Max 249 niches | Daily MCP call |
| `earlylore_inspect_creator` | Free profiles; Pro / Max full filters | Daily MCP call |
| `earlylore_list_my_workspace` | All plans, including packs | Daily MCP call |
| `earlylore_save_note_or_evaluate` | Notes on all plans; new evaluations consume eval credits | Notes free; new evaluations consume an eval credit |
| `earlylore_get_marketing_playbook` | Free macro view & samples; Pro / Max 249 niches | Daily MCP call |
| `earlylore_get_incumbent_alternatives` | All plans (140+ commercial software incumbents) | Daily MCP call |
| `earlylore_get_demand_opportunities` | All plans (quote-backed community demand & MVP wedges) | Daily MCP call |
| `earlylore_get_product_comparison` | All plans (empirical 1v1 battlecards) | Daily MCP call |

The live `earlylore_get_evaluation` blueprint summarizes a 4-lane Argon architecture (5-pillar scores, Core Bet, consensus dealbreakers, two strategic paths, MVP prescription, and an 8-seat roundtable on Deep evaluations).

## Example: evaluation prescription to a hero and pricing page

This matches Workflow A in `/skill.md` and requires a completed evaluation stored in the workspace linked to your API key:

1. Connect MCP with your personal key (`el_live_YOUR_TOKEN`).
2. Run the prompt below so the agent calls `earlylore_get_evaluation` and `earlylore_get_design_dna` (plus `earlylore_get_niche_benchmark` on Pro or Max):

```text
Call earlylore_get_evaluation to read my latest completed idea evaluation report.
Extract the Core Bet and the MVP prescription (headline, subheadline, and tier structure),
and keep the consensus dealbreakers out of the MVP scope.
Then call earlylore_get_design_dna for the style or competitor named in that report,
and apply the returned :root CSS variables to this project's global styles.
Build the hero and pricing page for this project.
Keep the product name, copy, and assets original to this project.
```

The skill's additional published workflows on `/skill.md` are:

- **Workflow B**: Search the 540K+ catalog and inspect a competitor dossier, alternatives, 1v1 comparisons, demand signals, and optional Design DNA.
- **Workflow C**: Audit your local landing page and pricing against live competitors and optionally write workspace notes via `earlylore_save_note_or_evaluate`.
- **Workflow D**: Draft channel launch posts from your local repo using `earlylore_get_marketing_playbook`.

For a read-only walkthrough, see [competitor-lookup.md](competitor-lookup.md) and [Vibe Coding with Market Intelligence](https://earlylore.com/blog/vibe-coding-market-research-with-mcp-and-claude-code) ([中文](https://earlylore.com/zh/blog/vibe-coding-market-research-with-mcp-and-claude-code)).
