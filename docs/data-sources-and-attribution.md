# Data sources and attribution

Reviewed against public pages on 2026-11-10. Quote the live page, and keep the observation month, source, and population next to every figure.

| Data | Public source | How to cite |
|---|---|---|
| Website traffic estimates | Product payloads label the provider as Vaneform and include an observation month (`YYYY-MM`). [/llms.txt](https://earlylore.com/llms.txt) calls these provider estimates. Methodology: [Vaneform methodology](https://vaneform.com/methodology). | Name EarlyLore, link the product or category page, and keep the month. |
| Pricing and plan text | The product's official public pages, as captured by EarlyLore, plus EarlyLore's own plan page at [/pricing](https://earlylore.com/pricing). | Keep the observation context. A benchmark is a category summary, not a quote of one invoice. |
| Revenue | [/llms.txt](https://earlylore.com/llms.txt) says revenue is shown when it is payment-verified (TrustMRR is the named integration) or publicly stated by the founder with a dated source. Missing revenue means undisclosed. | Do not replace a blank with an estimate, and do not treat undisclosed as zero. |
| Design DNA | Computed first-screen CSS and layout tokens on [/design](https://earlylore.com/design). | Quote the style or product page you opened. |
| Website changes | Dated diffs of public pricing, positioning, and feature copy, as described on `/llms.txt`. | Keep the diff date and the page. |
| Hosted MCP and Skill | HTTP MCP at `https://earlylore.com/api/mcp`. Personal Bearer key from [/account](https://earlylore.com/account). Hosted spec: [/skill.md](https://earlylore.com/skill.md). Installable copy: [skills/earlylore-product-architect/SKILL.md](../skills/earlylore-product-architect/SKILL.md). Setup: [mcp-and-skill.md](mcp-and-skill.md). | This is an account-scoped server. It is not an open dump of the catalog. The two skill files are compared in [skill-source.md](skill-source.md). |
| Commercial feeds | [/pricing#custom-data-api](https://earlylore.com/pricing#custom-data-api), `hello@earlylore.com`. | Use the contact on that page for bulk or high-concurrency access. |

Vaneform's own API and MCP documentation stays at the [Vaneform docs](https://github.com/vaneform/docs/blob/main/docs/api.md). That is Vaneform's product. EarlyLore's hosted MCP is the server documented in [mcp-and-skill.md](mcp-and-skill.md).

## Counts the public site does not agree on

This repository does not pick a winner among these. They were all visible on 2026-11-10:

- **Design DNA.** 9,700+ on `/llms.txt`, `/skill.md`, `/blog`, and the changelog introduction. 40,900+ on `/mcp` and the pricing page's IDE section.
- **Evaluation pipeline.** The 2026-11-08 changelog entry and the live `/mcp` tool text say 4-lane. The 2026-11-06 changelog entry says 6-lane.
- **Catalog size.** `/llms.txt` says 440,000+. The homepage also shows a live exact counter. The counter is not copied here.
- **Revenue population.** `/llms.txt` says about 3.6% of browse products have disclosed revenue. The 2026-11-07 changelog entry says three-tier evidence covers 10,200+ products. The homepage also shows a separate verified-revenue count. Name the population on the page you cite.

`/llms.txt` also says 90,000+ indie creators and 249 niches. Those two figures were consistent across the pages checked. They are still a snapshot of that file on 2026-11-10.

## What this license covers

When you cite EarlyLore, link the specific page and name EarlyLore. Text in this docs repository is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The EarlyLore application and its source code are proprietary. Customer accounts, API keys, and the live catalog are not part of this license.
