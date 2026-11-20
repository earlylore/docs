> **This is the official EarlyLore docs and public resources repository.** The EarlyLore application source is proprietary and is not published here. For the dedicated hosted MCP configuration repo and registry card, see [earlylore/earlylore-mcp](https://github.com/earlylore/earlylore-mcp); for open CC BY 4.0 SaaS/Design benchmark CSV & JSON snapshots, see [earlylore/saas-benchmarks](https://github.com/earlylore/saas-benchmarks). [CC BY 4.0](LICENSE) covers the text in this repository.

# EarlyLore

[EarlyLore](https://earlylore.com) is a product-discovery, idea-validation, and competitive-intelligence workspace. It is used to check a software idea against live products, pricing, traffic evidence, first-fold Design DNA, and competitor changes, and to bring that evidence into a coding agent through the hosted MCP server.

Public pages were reviewed for this file on **2026-11-20**. That date is a documentation sync, not a product release. The public changelog's newest dated entry at review time was **v1.10 (2026-11-10)**.

![EarlyLore mark](https://earlylore.com/earlylore-mark.png)

## What the public product covers

The authoritative short index is [earlylore.com/llms.txt](https://earlylore.com/llms.txt). On 2026-11-20 it described the product as covering daily product picks, competitor comparisons, published research guides, computed first-screen styles (Design DNA), open-source/COSS dossiers, optional revenue disclosures, creator portfolios, monthly market snapshots, and idea evaluations. Read the live index or destination page before quoting a count:

| Topic | What public pages currently print | Where to quote |
| --- | --- | --- |
| Catalog size | Homepage and live guides reference 440,000+ tracked software products, 90,000+ creators, and 249 niches | The page you used, with the date you read it |
| Design DNA | Captured first-screen layout, typography, and `:root` CSS color/radius evidence across analyzed sites | [/design](https://earlylore.com/design) |
| Idea evaluations | Standard (4 research perspectives) and Deep (8-seat orthogonal roundtable + 4-week GTM timeline); curated Deep samples linked from `/evaluate` with `Accept: text/markdown` support on `/evaluations/<id>` | [/evaluate](https://earlylore.com/evaluate) |
| Revenue coverage | Disclosed or payment-verified revenue is an optional discovery dimension (~3.6% of browse products; missing revenue remains undisclosed) | The page defining the population |
| Markdown negotiation | Public research routes serve `text/markdown` for `Accept: text/markdown` requests | [/llms.txt](https://earlylore.com/llms.txt) |

Traffic figures are provider estimates and need an observation month. Revenue is cited only when it is payment-verified or publicly disclosed with a source and date. A missing revenue figure means undisclosed.

## Key pages

| Page | URL |
| --- | --- |
| Home (English) | <https://earlylore.com> |
| 中文首页 | <https://earlylore.com/zh> |
| Evaluate an idea | <https://earlylore.com/evaluate> |
| Products directory | <https://earlylore.com/products> |
| Software categories (249) | <https://earlylore.com/categories> |
| Design DNA showcase | <https://earlylore.com/design> |
| Open-source & COSS | <https://earlylore.com/open-source> |
| Monthly market reports | <https://earlylore.com/reports> |
| Plans and pricing | <https://earlylore.com/pricing> |
| Public changelog | <https://earlylore.com/changelog> |
| Research guides (16) | <https://earlylore.com/blog> |
| Hosted MCP guide | <https://earlylore.com/mcp> |
| Official MCP setup repo | <https://github.com/earlylore/earlylore-mcp> |
| Open benchmark dataset (CC BY 4.0) | <https://github.com/earlylore/saas-benchmarks> |
| MCP server card | <https://earlylore.com/api/mcp/server-card> |
| Skill spec | <https://earlylore.com/skill.md> |
| LLM index | <https://earlylore.com/llms.txt> |
| Methodology & About | <https://earlylore.com/methodology> · <https://earlylore.com/about> |
| Account (personal API key) | <https://earlylore.com/account> |
| English demo | [Research Before You Build](https://www.youtube.com/watch?v=MZESeiHWNgY) |
| 中文演示 | [先看清对手怎么涨起来](https://www.youtube.com/watch?v=j19cvUtrtnY) |
| Traffic data partner | [Vaneform](https://vaneform.com) |

The application offers **5 active UI languages**: English (`en`), Simplified Chinese (`zh`), Traditional Chinese (`zh-TW`), Japanese (`ja`), and Korean (`ko`). Product profiles, creator portfolios, research articles, and curated Deep sample evaluations are indexed in English and Chinese (including `zh-TW`), while Japanese and Korean editions remain UI translations with `noindex, follow`; retired `es`, `pt`, `fr`, and `de` paths permanently redirect (`301`) to English.

## Docs in this repo

- [Research method](docs/research-method.md)
- [Data sources and attribution](docs/data-sources-and-attribution.md)
- [Hosted MCP and Skill quickstart](docs/mcp-and-skill.md)
- [Look up one competitor](docs/competitor-lookup.md)
- [Skill source of truth](docs/skill-source.md)
- [CHANGELOG.md](CHANGELOG.md)
- [Research guide index](articles/README.md)

## Install the skill & MCP config

The canonical skill name is `earlylore-product-architect`. Install via the official MCP repo or this docs repo:

```bash
npx skills add earlylore/earlylore-mcp --skill earlylore-product-architect
```

Or using the CC BY 4.0 documentation copy at [skills/earlylore-product-architect](skills/earlylore-product-architect/SKILL.md):

```bash
npx skills add earlylore/docs --skill earlylore-product-architect
```

Client config files for Claude Code, Cursor, Codex, Antigravity, Windsurf, and Cline live in [earlylore/earlylore-mcp](https://github.com/earlylore/earlylore-mcp). Save-folder aliases `.claude/skills/earlylore/SKILL.md` and `.agents/skills/earlylore/SKILL.md` are also recognized; details are in [docs/skill-source.md](docs/skill-source.md).

The skill's default workflow is the two-read competitor lookup in [docs/competitor-lookup.md](docs/competitor-lookup.md). The sample response [examples/fast-search.synthetic.json](examples/fast-search.synthetic.json) is synthetic and not a live catalog row.

Checks that do not install anything:

```bash
node tests/validate-skill.mjs
node tests/check-skill-drift.mjs
```

## Research guides

Sixteen guides are live on [/blog](https://earlylore.com/blog) as of **2026-11-20**. Summaries, update dates, and bilingual URLs are tracked in [articles/README.md](articles/README.md). The website is the canonical text.

<!-- articles:start -->
- [How to Validate a Startup or Micro-SaaS Idea Before Writing Code (2026 Framework)](https://earlylore.com/blog/how-to-validate-a-saas-idea)
- [7 Fastest-Growing Micro-SaaS & AI Software Niches Backed by Traffic Data (2026)](https://earlylore.com/blog/micro-saas-ideas-and-fastest-growing-niches)
- [SaaS Pricing Benchmarks Across 249 Niches: Subscription, Freemium & Usage Tiers](https://earlylore.com/blog/saas-pricing-benchmarks-and-models)
- [SaaS Landing Page Design Inspiration: 12 Hero Section Styles & Computed CSS Tokens](https://earlylore.com/blog/saas-landing-page-design-and-hero-examples)
- [Vibe Coding with Market Intelligence: Using EarlyLore MCP & SKILL.md in Claude Code and Cursor](https://earlylore.com/blog/vibe-coding-market-research-with-mcp-and-claude-code)
- [How Breakout Indie & AI Products Acquire Users: Traffic Channels & Revenue Signals](https://earlylore.com/blog/indie-hacker-acquisition-channels-and-revenue-signals)
- [Generative Engine Optimization (GEO) & llms.txt Playbook for SaaS Products (2026)](https://earlylore.com/blog/generative-engine-optimization-and-llms-txt-guide)
- [How to Run SaaS Competitor Analysis: Tracking Traffic, Pricing Diffs & Positioning](https://earlylore.com/blog/saas-competitor-analysis-traffic-and-pricing-monitoring)
- [The One-Person AI Company Playbook: Portfolio Patterns from 90,000+ Indie Builders](https://earlylore.com/blog/solo-founder-and-one-person-ai-company-playbook)
- [Vertical AI Agents & Voice Agent SaaS: Where New Founders Are Winning in 2026](https://earlylore.com/blog/vertical-ai-agents-and-voice-agent-saas-niches)
- [Best Startup Idea Validation & SaaS Market Research Tools Compared (2026)](https://earlylore.com/blog/best-startup-idea-validation-and-market-research-tools-compared)
- [Cursor vs. Windsurf vs. Bolt.new vs. Lovable: AI Coding & Vibe Coding Benchmark (2026)](https://earlylore.com/blog/cursor-vs-windsurf-vs-bolt-vs-lovable-traffic-and-pricing-benchmark)
- [Supabase, Clerk, Resend, PostHog & Cal.com: Developer & COSS Growth Case Studies](https://earlylore.com/blog/supabase-clerk-resend-posthog-coss-growth-and-pricing-case-studies)
- [Lean High-ARPU Micro-SaaS Case Studies: $5K–$50K/mo MRR Under 10,000 Visits](https://earlylore.com/blog/lean-high-arpu-micro-saas-case-studies-under-10k-visits)
- [Best MCP Servers for Cursor, Claude Code & Codex (2026): Market Research, Docs, Scraping & Backend Stack Compared](https://earlylore.com/blog/best-mcp-servers-for-cursor-claude-code-and-product-research)
- [SaaS Developer Stack Pricing & Alternatives (2026): Clerk vs. Auth0, Resend vs. Loops, Supabase vs. Neon & Plausible vs. Umami](https://earlylore.com/blog/saas-dev-stack-pricing-and-alternatives-clerk-resend-supabase-plausible)
<!-- articles:end -->

## Plans

On **2026-11-20**, [/pricing](https://earlylore.com/pricing) listed:

- **Free (`$0`)**: 3 lifetime Standard evaluations, 15 lifetime chat turns, 5 full product profiles/month, 5 Design DNA extractions, compare 2 products, and `30` MCP calls/day.
- **Evaluation Packs (one-time, never expire)**: Trial (`$1.9`), Idea Polish (`$14.9`), and Validation Sprint (`$29`); 100% of pack spend within 14 days (up to `$29`) credits toward Pro or Max Annual checkout.
- **Pro (`$228/year` or `$29/month`)**: 25 Deep + 50 Standard evaluations/month, 500 full product profiles/month, unlimited Design DNA, compare 4 products, Markdown export, and `200` MCP calls/day.
- **Max (`$540/year` or `$69/month`)**: 80 Deep + 160 Standard evaluations/month, 5,000 full product profiles/month, unlimited Design DNA, compare 8 products, Markdown export, Stealth slots, and `1,000` MCP calls/day.

Custom data feeds and licensing terms are at <https://earlylore.com/pricing#custom-data-api> (`hello@earlylore.com`).

## License

Text in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribute EarlyLore and link to the specific `earlylore.com` page you used. The EarlyLore application, its source code, private account data, and the live catalog are not licensed by this repository.

## 中文

**EarlyLore 用来在写代码之前对照真实软件产品做验证。** 公开站点提供点子评估（`/evaluate`）、产品与创作者目录、定价与流量证据、首屏 Design DNA（`/design`）、开源与商业化目录（`/open-source`）、月度市场报告（`/reports`），以及给编程代理使用的托管 MCP 服务。本仓库同步公开说明，应用源码不在这里；独立 MCP 配置与安装仓库请看 [earlylore/earlylore-mcp](https://github.com/earlylore/earlylore-mcp)，开放 SaaS 与 Design DNA 基准数据集请看 [earlylore/saas-benchmarks](https://github.com/earlylore/saas-benchmarks)。

本文件对照公开页面的日期是 **2026-11-20**（文档同步日，非产品发布日），当时公开更新日志最新条目为 **v1.10 (2026-11-10)**。网站提供 5 种 UI 语言（英文、简体中文、繁体中文、日文、韩文）；核心内容页与精选 Deep 示例评估在英文及繁简中文下开放搜索引擎索引。流量是带来源和观察月份的估算；没有收入记录表示未披露，而不是收入为零。

托管 MCP 说明见 [docs/mcp-and-skill.md](docs/mcp-and-skill.md)。可安装技能规范名为 `earlylore-product-architect`，可通过 `npx skills add earlylore/earlylore-mcp --skill earlylore-product-architect` 或 `npx skills add earlylore/docs --skill earlylore-product-architect` 安装。网站中文 MCP 入口是 <https://earlylore.com/zh/mcp>，点子评估入口是 <https://earlylore.com/zh/evaluate>（精选深度样本 `/evaluations/<id>` 支持 Markdown 访问），十六篇公开研究指南的索引在 [articles/README.md](articles/README.md)。

本仓库文字使用 [CC BY 4.0](LICENSE)。该许可只覆盖这些文档，不覆盖 EarlyLore 应用、源码、账户数据或线上目录。
