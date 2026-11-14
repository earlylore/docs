# Hosted MCP server and Skill

Connection snippets were checked again on 2026-11-14 against the live setup page, its Markdown representation, and the client docs linked below. The tool and price table remains the 2026-11-10 reading. Both dates are documentation checks, not product releases.

Reviewed against:

- <https://earlylore.com/mcp>
- <https://earlylore.com/zh/mcp>
- <https://earlylore.com/skill.md>
- <https://earlylore.com/llms.txt>
- <https://earlylore.com/pricing>
- <https://code.claude.com/docs/en/mcp>
- <https://developers.openai.com/codex/mcp/>
- <https://cursor.com/docs/mcp>

No authenticated call was made to the MCP endpoint while writing this page. Examples use the placeholder `el_live_YOUR_TOKEN` only.

## Endpoint and key

EarlyLore hosts an HTTP MCP server for coding agents.

| | |
|---|---|
| Endpoint | `https://earlylore.com/api/mcp` |
| Auth | `Authorization: Bearer el_live_...` |
| Where the key is created | <https://earlylore.com/account> |
| Product guide | <https://earlylore.com/mcp> |
| Skill spec | <https://earlylore.com/skill.md> |
| Skill name | `earlylore-product-architect` |

The `/mcp` page says keys start with `el_live_`, that only a SHA-256 hash is stored, and that the key uses the same account quotas as evaluation reports, design extraction, and product profiles. Create the key while signed in. Replace the placeholder locally. Do not commit a real key, and do not open a pull request with one.

This server is account-scoped. Bulk feeds and higher MCP quotas are the commercial offer on <https://earlylore.com/pricing#custom-data-api> (`hello@earlylore.com`). Vaneform's separate API and MCP docs are linked from [data-sources-and-attribution.md](data-sources-and-attribution.md).

On 2026-11-14 the setup page publishes four connection blocks: Claude Code, Codex, Cursor, and Other / JSON. The skill file still names Antigravity and Windsurf. No separate file path for those two clients was on the setup page that day. Use the HTTP endpoint and Bearer header in the remote-MCP form that client documents.

## Connect Claude Code

The command published on `/mcp` and `/skill.md`:

```bash
claude mcp add --transport http earlylore https://earlylore.com/api/mcp \
  --header "Authorization: Bearer el_live_YOUR_TOKEN"
```

## Connect Codex

The 2026-11-14 setup page puts this in `~/.codex/config.toml`. Codex's own docs use the same `url` and `http_headers` keys, and also read a project `.codex/config.toml`.

```toml
[mcp_servers.earlylore]
url = "https://earlylore.com/api/mcp"

[mcp_servers.earlylore.http_headers]
Authorization = "Bearer el_live_YOUR_TOKEN"
```

## Connect Cursor

The 2026-11-14 setup page puts this in `.cursor/mcp.json` in the project. Cursor's docs use the same remote shape, `url` plus `headers`, and also document `~/.cursor/mcp.json`. The setup page's Other / JSON block is this same document. It has no `type` field.

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

## Connect Claude Code with JSON

Claude Code's docs require `type` on a JSON entry that has a `url`. The EarlyLore page at `/mcp` with `Accept: text/markdown` publishes that shape. Its placeholder there is `<your-personal-key>`.

```json
{
  "mcpServers": {
    "earlylore": {
      "type": "http",
      "url": "https://earlylore.com/api/mcp",
      "headers": {
        "Authorization": "Bearer el_live_YOUR_TOKEN"
      }
    }
  }
}
```

## Install the Skill

The canonical spec is <https://earlylore.com/skill.md>. This repository does not vendor a copy, so the website copy stays the current one.

The public site currently names two save locations:

- The FAQ on `/mcp` says to save it as `~/.claude/skills/earlylore-research/SKILL.md`.
- The copy confirmation on `/mcp` says `.claude/skills/earlylore/SKILL.md` or `.cursorrules`.

Put the file where the client you use actually loads a skill. The spec's own setup block repeats the Claude Code command above and then defines four workflows.

Vendor docs checked on 2026-11-14 name these directories. The folder can match the skill `name`, `earlylore-product-architect`:

- Claude Code: `~/.claude/skills/<folder>/SKILL.md` or `.claude/skills/<folder>/SKILL.md` ([skills](https://code.claude.com/docs/en/skills))
- Codex: `$HOME/.agents/skills/<folder>/SKILL.md` or `$REPO_ROOT/.agents/skills/<folder>/SKILL.md` ([skills](https://developers.openai.com/codex/skills/))

## Tools and quotas

The table below is the tool list printed on <https://earlylore.com/mcp> on 2026-11-10. Plan checkout, pack contents, and the comparison matrix on [/pricing](https://earlylore.com/pricing) are the billing pages. Re-read both before quoting a limit. The two pages use different wording for some caps.

| Tool | Availability printed on `/mcp` | Quota cost printed on `/mcp` |
|---|---|---|
| `earlylore_search_products` | Free top 30; Pro / Max all lists and filters | Zero |
| `earlylore_inspect_product` | Free 30 / packs / Pro 300 / Max 3,000 per month | Monthly profile quota |
| `earlylore_get_evaluation` | All plans, including packs | Zero |
| `earlylore_get_design_dna` | Free 5 tries; Pro / Max unlimited | Zero on Pro / Max |
| `earlylore_get_niche_benchmark` | Pro / Max | Zero |
| `earlylore_compare_products` | Free 2 / Pro 4 / Max 8 | Monthly profile quota |
| `earlylore_get_market_pulse` | Free macro view; Pro / Max 249 niches | Zero |
| `earlylore_inspect_creator` | Free profiles and top 30; Pro / Max all filters | Zero |
| `earlylore_list_my_workspace` | All plans, including packs | Zero |
| `earlylore_save_note_or_evaluate` | Packs / Pro / Max | Notes are free; a new evaluation uses an evaluation credit |
| `earlylore_get_marketing_playbook` | Free macro view and samples; Pro / Max 249 niches | Zero |

The live `earlylore_get_evaluation` description calls the report a 4-lane Argon blueprint (5-pillar scores, core bet, consensus dealbreakers, two strategic paths, an MVP prescription, and an 8-seat roundtable). The 2026-11-06 changelog entry still describes a 6-lane pipeline. Treat those as dated public texts. See [CHANGELOG.md](../CHANGELOG.md).

Design DNA counts also disagree across public pages (9,700+ and 40,900+). The tool returns the tokens for the style or competitor you request. Quote the response and the page, not a frozen total from this file.

Prices checked on `/pricing` and `/llms-full.txt` the same day: packs at $1.9, $4.9, and $9.9; Pro at $129/year or $45/quarter; Max at $249/year or $79/quarter. A free signed-in plan is listed. Confirm the live price before you buy.

## Example: evaluation prescription to a hero and pricing page

This is workflow WF-01 on `/mcp` ("Idea Evaluation + Hero Design DNA"), the flow the page marks as using no AI-compute quota for those two reads. It matches Workflow A in `/skill.md`. You need a completed evaluation already stored on the same account as the API key.

1. Connect MCP with your own key, using one of the configs above.
2. Ask the coding agent to run the prompt below. It should call `earlylore_get_evaluation` first and `earlylore_get_design_dna` second.
3. If the account is Pro or Max, Workflow A also calls `earlylore_get_niche_benchmark` for the primary category and anchors the entry and pro tiers to that benchmark. `/mcp` lists that tool as Pro / Max.

```text
Call earlylore_get_evaluation to read my latest completed idea evaluation report.
Extract the Core Bet and the MVP prescription (headline, subheadline, and tier structure),
and keep the consensus dealbreakers out of the MVP scope.
Then call earlylore_get_design_dna for the style or competitor named in that report,
and apply the returned :root CSS variables to this project's global styles.
Build the hero and pricing page for this project.
Keep the product name, copy, and assets original to this project.
```

What the skill tells the agent to take from those calls:

- From the evaluation: `strategyDebate.coreBet`, `strategyDebate.consensusTrap`, the MVP headline, subheadline, form and style, and the pricing model, tiers, and hook.
- From Design DNA: the returned CSS variables (`--background`, `--surface`, `--foreground`, `--muted-foreground`, `--accent`, `--radius`, `--font-heading`, `--font-body`), the color ratios, the hero layout, and the avoid list.
- From the niche benchmark, when the plan includes it: median entry price, median top price, and trial share.

The skill's other published workflows, all on `/skill.md`:

- **Workflow B.** Search the catalog and inspect one product dossier, including optional Design DNA.
- **Workflow C.** Read the local landing page and pricing, then compare them with live competitors and write notes back with `earlylore_save_note_or_evaluate`.
- **Workflow D.** Draft launch posts from the local repo using `earlylore_get_marketing_playbook`.

A name-search walkthrough, with a synthetic sample and no evaluation or saved note, is in [competitor-lookup.md](competitor-lookup.md).

A written walkthrough of MCP setup is the 2026-11-07 guide [Vibe Coding with Market Intelligence](https://earlylore.com/blog/vibe-coding-market-research-with-mcp-and-claude-code) ([中文](https://earlylore.com/zh/blog/vibe-coding-market-research-with-mcp-and-claude-code)).
