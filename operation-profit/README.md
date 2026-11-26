# Operation Profit — Cursor package

Local workspace for VetBuiltPrintables listing copy, competitor strategy, and small ads tests. Cursor loads `.cursor/rules/operation-profit.mdc` automatically in this folder.

## Setup

1. Open **this folder** (`operation-profit/`) as the Cursor project root (File → Open Folder).
2. Paste `KICKOFF-PROMPT.md` into Cursor Agent to generate strategy, listing, and ads drafts.
3. Drop each product’s real PDF (and optional `PRODUCT.md` facts) into `products/<name>/`.

## Layout

| Path | Purpose |
|------|---------|
| `.cursor/rules/operation-profit.mdc` | Always-on listing, ads, competitor, and compliance rules |
| `KICKOFF-PROMPT.md` | Paste into Agent to start work |
| `products/` | One folder per product; put the real PDF here |
| `research/` | Competitor notes (sourced) |
| `outputs/` | Drafts only — never published by the agent |

## Guardrails

- Agent **writes files only**. It does not publish to Etsy, spend ad budget, or send messages.
- Do not invent page or question counts. If the PDF is missing, write `UNVERIFIED` and stop.
- Every IBEW/NECA/ALLIANCE mention needs a clear **not affiliated** line.
- Disclose AI help on Etsy when AI tools were used.
- Listing drafts must call for **preview images** (real PDF pages + at least one printed-page photo when ready).

## Current products

- `products/aptitude-practice-test-1/` — Electrical Apprenticeship Aptitude Practice Test 1 (PDF included; counts verified Nov 26, 2026 PT).
- `products/electrician-exam-math-workbook/` — live Etsy math workbook facts (drop v1.1 PDF here before claiming new counts).
