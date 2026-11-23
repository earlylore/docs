# Public tool list

Verified on **2026-11-23** against `https://earlylore.com/api/mcp` (`14` hosted tools), <https://earlylore.com/mcp>, and <https://earlylore.com/pricing>. Supports MCP protocol versions `2025-11-25`, `2025-06-18`, and `2025-03-26`.

If a connected session advertises a different argument, the session schema wins. Do not send an argument this table lists when the session schema has dropped it.

| Tool | Read-only hint | Required | Arguments |
| --- | --- | --- | --- |
| `earlylore_list_my_workspace` | true | none | `limit` |
| `earlylore_get_evaluation` | true | none | `evaluationId`, `query` |
| `earlylore_get_design_dna` | false | none | `styleSlug`, `productSlugOrDomain` |
| `earlylore_get_niche_benchmark` | true | none | `categorySlug`, `search` |
| `earlylore_search_products` | false | none | `query`, `mode`, `list`, `category`, `pricing`, `form`, `minVisits`, `trend`, `hasRepository`, `offset`, `limit` |
| `earlylore_inspect_product` | false | `slugOrDomain` | `slugOrDomain`, `analyzeIfMissing`, `includeDesignDna` |
| `earlylore_inspect_creator` | true | none | `creatorSlug`, `query`, `list`, `category`, `limit` |
| `earlylore_get_market_pulse` | true | none | `categorySlug`, `groupSlug` |
| `earlylore_compare_products` | false | `slugsOrDomains` | `slugsOrDomains` |
| `earlylore_save_note_or_evaluate` | false | `action` | `action`, `title`, `body`, `url`, `evaluationId`, `ideaText`, `tier`, `isPrivate` |
| `earlylore_get_marketing_playbook` | true | none | `category`, `group`, `form`, `play`, `platform`, `productName`, `oneLiner`, `painPoint`, `incumbent`, `metric` |
| `earlylore_get_incumbent_alternatives` | true | none | `incumbentSlug`, `q`, `ossOnly` |
| `earlylore_get_demand_opportunities` | true | none | `categorySlug`, `groupSlug`, `limit` |
| `earlylore_get_product_comparison` | true | none | `pairSlug`, `q`, `categorySlug`, `ossOnly` |

Enums and bounds:

- `earlylore_search_products.mode`: `auto`, `fast`, `semantic`
- `earlylore_search_products.list`: `growing`, `revenue`, `new`
- `earlylore_search_products.form`: `app`, `extension`, `web`, `mcp_server`, `cli`, `api`
- `earlylore_search_products.trend`: `up`, `down`
- `earlylore_search_products.pricing`: array of `free`, `freemium`, `subscription`, `one_time`, `usage`
- `earlylore_search_products.limit`: default 20, max 50. The default workflow sends 5.
- `earlylore_inspect_product.analyzeIfMissing`: default false. True starts live capture for a domain that is not catalogued.
- `earlylore_inspect_product.includeDesignDna`: default false.
- `earlylore_inspect_creator.list`: `launching`, `revenue`, `serial`
- `earlylore_save_note_or_evaluate.action`: `save_note`, `start_evaluation`
- `earlylore_save_note_or_evaluate.tier`: `standard`, `deep`
- `earlylore_get_marketing_playbook.form`: `web`, `app`, `extension`, `mcp_server`, `cli`, `api`
- `earlylore_get_marketing_playbook.play`: `launch_post`, `demo_video`, `quick_build`, `build_in_public`, `giveaway`, `versus`, `hot_take`, `milestone`
- `earlylore_get_marketing_playbook.platform`: `x`, `reddit`, `hn`, `ph`, `xhs`
- `earlylore_get_demand_opportunities.limit`: 1–40 (default 15)

Gates recorded in tool descriptions:

- `earlylore_get_niche_benchmark` requires Pro or Max (or an active 7-day Pro Trial).
- `earlylore_compare_products` caps the list at Free 2, Pro 4, and Max 8.
- `earlylore_list_my_workspace` uses no evaluation or product-detail credits; daily MCP call limits still apply.
- Search, inspect, compare, and Design DNA are non-read-only in tool hints. Design DNA and inspect can start analysis or attach a capture when the matching flag is set.

The hosted skill at <https://earlylore.com/skill.md> previously listed legacy play ids `Workflow_pain`, `how_built`, and `Before_after` on 2026-11-14. Those strings are not in the `play` enum above. Do not send them.

The live pages at <https://earlylore.com/mcp> and <https://earlylore.com/pricing> on **2026-11-23** show Free at `30` MCP calls/day and `5` full product details/month (with an automatic 7-day Pro Trial providing `6` full product details), Pro at `200` calls/day and `500` details/month (`$19/mo` or `$144/yr`), Max at `1,000` calls/day and `5,000` details/month (`$49/mo` or `$384/yr`), plus non-expiring Evaluation Packs (`$9.9` / `$19`).
