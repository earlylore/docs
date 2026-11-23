> **This is the official EarlyLore docs and public resources repository.** The EarlyLore application source is proprietary and is not published here. For the dedicated hosted MCP configuration repo and registry card, see [earlylore/earlylore-mcp](https://github.com/earlylore/earlylore-mcp); for open CC BY 4.0 SaaS/Design benchmark CSV & JSON snapshots, see [earlylore/saas-benchmarks](https://github.com/earlylore/saas-benchmarks). [CC BY 4.0](LICENSE) covers the text in this repository.

# EarlyLore

**[EarlyLore](https://earlylore.com) is live in commercial production.** It is a product-discovery, idea-validation, and competitive-intelligence workspace used to check a software idea against live products, pricing, traffic evidence, first-fold Design DNA, and competitor changes, and to bring that evidence into a coding agent through the hosted 14-tool MCP server.

Public pages were synced for this file on **2026-11-23**. The public changelog's latest dated release entries are **v1.12 (2026-11-22)** and **2026-11-23**.

![EarlyLore mark](https://earlylore.com/earlylore-mark.png)

## What the public product covers

The authoritative short index is [earlylore.com/llms.txt](https://earlylore.com/llms.txt) (extended reference: [llms-full.txt](https://earlylore.com/llms-full.txt)). All public figures use consistent definitions across the website, MCP server, and public docs:

| Metric / Topic | Unified public scope | Canonical page |
| --- | --- | --- |
| Total tracked catalog | **540,000+ (`540K+`)** tracked software products | [/products](https://earlylore.com/products) |
| Measured browse scope | **460,000+ (`460K+`)** products with website traffic or revenue evidence | [/market](https://earlylore.com/market) |
| Traffic-measured websites | **190,000+** websites with monthly traffic estimates | [/products](https://earlylore.com/products) |
| Categories & creators | **249** taxonomy niches (`248` public browsable excluding `adult`) · **90,000+** creators | [/categories](https://earlylore.com/categories) · [/creators](https://earlylore.com/creators) |
| First-fold Design DNA | **130,000+ (`130K+`)** analyzed sites across **12** visual styles (`:root` CSS tokens & hero patterns) | [/design](https://earlylore.com/design) |
| Revenue evidence | **10,000+** products with disclosed or payment-verified revenue (~3.6% of browse products; optional dimension, undisclosed when absent) | [/products?list=revenue](https://earlylore.com/products?list=revenue) |
| Idea evaluations | **4-lane** concurrent pipeline: **Standard** (4 research perspectives) and **Deep** (8-seat orthogonal roundtable + 4-week MVP & GTM timeline) | [/evaluate](https://earlylore.com/evaluate) |
| Hosted MCP & Skill | **14 hosted MCP tools** at `https://earlylore.com/api/mcp` + `earlylore-product-architect` skill | [/mcp](https://earlylore.com/mcp) · [/skill.md](https://earlylore.com/skill.md) |
| Markdown negotiation | Public research routes serve `text/markdown` for `Accept: text/markdown` requests | [/llms.txt](https://earlylore.com/llms.txt) |

Traffic figures are provider estimates from [Vaneform](https://vaneform.com) and need an observation month. Revenue is cited only when payment-verified or publicly disclosed with a source and date. Missing revenue means undisclosed.

## Key pages

| Page | URL |
| --- | --- |
| Home (English) | <https://earlylore.com> |
| 中文首页 | <https://earlylore.com/zh> |
| Evaluate an idea | <https://earlylore.com/evaluate> |
| Products directory (540K+) | <https://earlylore.com/products> |
| Software categories (249) | <https://earlylore.com/categories> |
| Software alternatives (140+ incumbents) | <https://earlylore.com/alternatives> |
| 1v1 comparisons | <https://earlylore.com/vs> |
| Design DNA showcase (130K+) | <https://earlylore.com/design> |
| Open-source & COSS | <https://earlylore.com/open-source> |
| Monthly market reports | <https://earlylore.com/reports> |
| Plans, 7-day Pro Trial & pricing | <https://earlylore.com/pricing> |
| Public changelog | <https://earlylore.com/changelog> |
| Research guides (16) | <https://earlylore.com/blog> |
| Hosted MCP guide | <https://earlylore.com/mcp> |
| Official MCP setup repo | <https://github.com/earlylore/earlylore-mcp> |
| Open benchmark dataset (CC BY 4.0) | <https://github.com/earlylore/saas-benchmarks> |
| MCP server card | <https://earlylore.com/api/mcp/server-card> |
| Skill spec | <https://earlylore.com/skill.md> |
| LLM index | <https://earlylore.com/llms.txt> |
| About, Methodology, Terms & Privacy | <https://earlylore.com/about> · <https://earlylore.com/methodology> · <https://earlylore.com/terms> · <https://earlylore.com/privacy> |
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

The skill's default workflow is the two-read competitor lookup in [docs/competitor-lookup.md](docs/competitor-lookup.md). The sample response [examples/fast-search.synthetic.json](examples/fast-search.synthetic.json) is synthetic and is an illustration only.

Checks that do not install anything:

```bash
node tests/validate-skill.mjs
node tests/check-skill-drift.mjs
```

## Research guides

Sixteen guides are live on [/blog](https://earlylore.com/blog) as of **2026-11-23**. Summaries, update dates, and bilingual URLs are tracked in [articles/README.md](articles/README.md). The website is the canonical text.

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

## Plans, Trial & Legal Disclosures

Synced on **2026-11-23** against [/pricing](https://earlylore.com/pricing):

- **Free (`$0`)**: 3 lifetime Standard evaluations, 15 lifetime chat turns, 5 full product profiles/month, 5 Design DNA tries, compare 2 products, and `30` MCP calls/day.
- **7-Day Pro Trial (`$0`, automatic on sign-up, no card required)**: 1 Deep evaluation, 3 Standard evaluations, 10 Deep chat turns, 6 full product profiles, access to all 249 niches, plus a 10% annual upgrade discount during the 7-day trial window.
- **Evaluation Packs (one-time, never expire)**: Idea Polish (`$9.9`, 3 Deep + 3 Standard evals, 30 Deep 1v1 turns, 25 details) and Validation Sprint (`$19`, 8 Deep + 8 Standard evals, 80 Deep 1v1 turns, 60 details); 100% of pack spend within 14 days (up to `$19`) credits toward Pro or Max Annual at checkout.
- **Pro (`$19/month` or `$144/year`, `$12/mo`)**: 25 Deep + 50 Standard evaluations/month (`12/day` cap), 500 full product profiles/month, unlimited Design DNA, compare 4 products, Markdown export, and `200` MCP calls/day.
- **Max (`$49/month` or `$384/year`, `$32/mo`)**: 80 Deep + 160 Standard evaluations/month (`25/day` cap), 5,000 full product profiles/month, unlimited Design DNA, compare 8 products, Markdown export, 3 claimed domains with Stealth Mode, and `1,000` MCP calls/day.
- **Optional USD One-Time Passes**: Both Pro and Max offer **30-Day** and **1-Year** single-payment passes with zero auto-renewal.

Custom data feeds and licensing terms are at <https://earlylore.com/pricing#custom-data-api> (`hello@earlylore.com`).

**Operator & Legal Entities**: EarlyLore is operated by [Kai Jiang](https://github.com/jiangqizheng) through **Dancheng County Qiannuo Network Technology Studio**（郸城县千诺网络技术工作室）, registered in Dancheng County, Zhoukou City, Henan Province, China. Billing, refunds (7-day unused first-purchase refund policy + automatic fault recovery), governing law (PRC), and data retention terms are published at [/about](https://earlylore.com/about), [/terms](https://earlylore.com/terms), and [/privacy](https://earlylore.com/privacy) (`support@earlylore.com` · `hello@earlylore.com` · `security@earlylore.com`).

## License

Text in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Attribute EarlyLore and link to the specific `earlylore.com` page you used. The EarlyLore application, its source code, private account data, and the live catalog are not licensed by this repository.

## 中文

**[EarlyLore](https://earlylore.com/zh) 现已正式商业化运营**，用于在写代码之前对照真实软件产品做验证。公开站点提供点子评估（`/evaluate`）、54 万+ 产品与 9 万+ 创作者目录、定价与流量证据、13 万+ 首屏 Design DNA（`/design`）、平替图谱（`/alternatives`）、1v1 对比战卡（`/vs`）、开源与商业化目录（`/open-source`）、月度市场报告（`/reports`），以及支持 14 个工具的托管 MCP 服务。本仓库同步公开说明，应用源码不在这里；独立 MCP 配置与安装仓库请看 [earlylore/earlylore-mcp](https://github.com/earlylore/earlylore-mcp)，开放 SaaS 与 Design DNA 基准数据集请看 [earlylore/saas-benchmarks](https://github.com/earlylore/saas-benchmarks)。

本文件对照公开页面的同步日期是 **2026-11-23**，对应最新线上版本说明 **v1.12 (2026-11-22)** 与 **2026-11-23**。新注册账号默认提供 3 次永久标准评估及自动生效的 **7 天 Pro 体验**（无需绑卡），按次评估包为 `$9.9 / $19`（长期有效、14 天内最高 `$19` 全额抵年付），会员套餐为 **Pro `$19/月 · $144/年`**、**Max `$49/月 · $384/年`**（另提供可选美元 30 天 / 1 年一次性通行证）。网站提供 5 种 UI 语言（EN、ZH、ZH-TW、JA、KO）。流量来自 Vaneform 估算并带观察月份；缺失收入记录表示未公开披露，收入为零需单独核验。

托管 MCP 说明见 [docs/mcp-and-skill.md](docs/mcp-and-skill.md)，运营主体（Kai Jiang / 郸城县千诺网络技术工作室，中国河南省周口市郸城县）、退款政策与数据保留细则见 <https://earlylore.com/zh/about>、<https://earlylore.com/zh/terms> 与 <https://earlylore.com/zh/privacy>。

本仓库文字使用 [CC BY 4.0](LICENSE)。该许可仅覆盖文档正文，商业产品源码、账户数据与线上全库版权归 EarlyLore 所有。
