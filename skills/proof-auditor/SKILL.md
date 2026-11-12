---
name: proof-auditor
version: 1.0.0
owner: File Vault
status: approved
source: issue #9
description: "Checks that work marked done really is done, with proof, before it reaches Tam or the Done ledger. Use on every 'done' claim. VA files are checked by VA Benefits instead."
---

# proof-auditor

## 1. What counts as proof
A link or path Tam can open that shows the result: the filed copy, the catalog row, the sent draft folder, a screenshot. "I did it" is not proof.

## 2. Check
- Open the proof link. Does it exist, and can Tam open it?
- Does it match what was asked: right file, right name, right place?
- Do the numbers in the report match what you see (files moved, rows added)?

## 3. Verdict
- **VERIFIED**: add it to the Done ledger with the proof link.
- **NOT YET**: send it back to the office, saying exactly what is missing.

## 4. Scope
Non-VA files only. VA documents are checked by VA Benefits using `quote-official-text`.

Follows `core-guardrails`.
