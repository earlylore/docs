# Data sources and attribution

Reviewed and unified against public pages on **2026-11-23**. Quote the live page, and keep the observation month, source, and population next to every figure.

| Data | Public source | How to cite |
|---|---|---|
| Website traffic estimates | Product payloads label the provider as Vaneform (`190,000+` traffic-measured websites) and include an observation month (`YYYY-MM`). [/llms.txt](https://earlylore.com/llms.txt) calls these provider estimates. Methodology: [Vaneform methodology](https://vaneform.com/methodology). | Name EarlyLore, link the product or category page, and keep the month. |
| Pricing and plan text | The product's official public pages, as captured by EarlyLore, plus EarlyLore's own plan page at [/pricing](https://earlylore.com/pricing). | Keep the observation context. A benchmark is a category summary, not a quote of one invoice. |
| Revenue | [/llms.txt](https://earlylore.com/llms.txt) states revenue appears when payment-verified (TrustMRR integration) or publicly disclosed with a dated source (`10,000+` products across the catalog). Missing revenue means undisclosed. | Never replace a blank with an estimate or treat undisclosed as zero. |
| Design DNA | Computed first-screen CSS and layout tokens across **130,000+ (`130K+`)** analyzed sites on [/design](https://earlylore.com/design). | Quote the style or product page you opened. |
| Website changes | Dated diffs of public pricing, positioning, and feature copy, tracked via PageReceipt / Niche. | Keep the diff date and the page. |
| Hosted MCP and Skill | **14 hosted tools** over Streamable HTTP at `https://earlylore.com/api/mcp`. Personal Bearer key from [/account](https://earlylore.com/account). Hosted spec: [/skill.md](https://earlylore.com/skill.md). Setup: [mcp-and-skill.md](mcp-and-skill.md). | Account-scoped server; see [pricing](https://earlylore.com/pricing) and [terms](https://earlylore.com/terms). |
| Commercial feeds | [/pricing#custom-data-api](https://earlylore.com/pricing#custom-data-api), `hello@earlylore.com`. | Contact directly for bulk or high-concurrency commercial access. |

Vaneform's own API and MCP documentation stays at the [Vaneform docs](https://github.com/vaneform/docs/blob/main/docs/api.md). That is Vaneform's product. EarlyLore's hosted MCP is the server documented in [mcp-and-skill.md](mcp-and-skill.md).

## Scope & Measurement Definitions

Every public number on EarlyLore corresponds to a distinct, explicitly defined population:

- **Total tracked catalog (`540K+` on `/products`)**: Full tracked public product catalog across all niches (`553,700+` indexed entries at review time). Static marketing copy uses `540K+` (`540,000+`) safely below the live database count.
- **Measured browse scope (`460K+` on `/market` & `earlylore/saas-benchmarks`)**: Subset of products carrying observed website traffic estimates or revenue evidence (`460,446` products, `459,332` websites as of `2026-11-23`).
- **Traffic-measured websites (`190,000+`)**: Websites with multi-month Vaneform monthly visit series.
- **Design DNA (`130K+` on `/design`)**: Websites with extracted desktop/mobile hero captures and computed visual/CSS token profiles (`130,984` analyzed sites across `12` visual styles).
- **Revenue evidence (`10,000+` products)**: Products with payment-verified MRR/30d revenue or dated public founder disclosures (`~3.6%` of browse products). Revenue is an optional discovery dimension and is never a listing gate.
- **Categories (`249` taxonomy niches / `248` public browsable)**: Full taxonomy contains `249` categories across `26` groups; `adult` is excluded from default public directory lists (`/categories` and `earlylore/saas-benchmarks` publish the `248` public browsable niches).
- **Creators (`90K+` graph / `3,100+` measured featured profiles)**: `90,000+` indie makers in the creator relationship graph, with `3,153` measured featured profiles displayed on `/creators`.
- **Evaluation pipeline (`4-lane pipeline`)**: Current evaluation engine runs a concurrent 4-lane pipeline (`8-seat` orthogonal roundtable on Deep; `4-seat` screening on Standard). Historical `v1.7` changelog entries preserve their original date label.

## What this license covers

When you cite EarlyLore, link the specific page and name EarlyLore. Text in this docs repository is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The EarlyLore application, its source code, customer accounts, API keys, and the live catalog are operated by Kai Jiang through **Dancheng County Qiannuo Network Technology Studio** and remain governed by [Terms of Service](https://earlylore.com/terms) and [Privacy Policy](https://earlylore.com/privacy).
