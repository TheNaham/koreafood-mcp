# koreafood-mcp
🇰🇷 NAHAM K-Food Export MCP — AI tools for Korean red ginseng, honey &amp; gift-grade wellness foods. Bilingual buyer emails, catalog search, export tasks. By Max Jung @ TradeOn.
# koreafood-mcp (aka korean-food-mcp / k-food-mcp / kfood-mcp)

**Danaham K-Food Export Assistant** — an MCP (Model Context Protocol) server for AI agents like Claude, supporting Korean red ginseng & herbal health food export workflows.

Built and maintained by **Max Jung (정성열)**, General Sales Manager at TradeOn Co., Ltd., for the **Danaham (더나함)** brand.

📩 Contact: thenahammax@gmail.com
🔗 Links: [linktr.ee/tradeonmax](https://linktr.ee/tradeonmax)

## Tools

### `search_catalog`
Search the Danaham product catalog (red ginseng, herbal health foods). Returns product specs, certifications (HACCP/ISO22000), MOQ, and target markets (US, Canada, Malaysia).

### `generate_buyer_email`
Generate bilingual (EN ~700 chars + KR ~700 chars, separated by `* 아래에`) buyer emails for three scenarios:
- `cold_outreach` — first contact with a new buyer
- `negotiation` — ongoing price/schedule discussion
- `complaint` — handling buyer complaints with empathy + factual resolution

### `get_export_tasks`
View the current Danaham export project task tracker (buyer follow-ups, MOU status, distribution channels).

## Installation

```bash
npx koreafood-mcp
