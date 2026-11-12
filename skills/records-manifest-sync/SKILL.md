---
name: records-manifest-sync
version: 1.0.0
owner: File Vault
status: approved
source: issue #9
description: "Keeps the document catalog (MANIFEST) matched to the files that actually exist: one row per file with doc_id, sha256, and path. Use after any intake, move, rename, or OCR run."
---

# records-manifest-sync

## 1. One row per file
| Field | Rule |
|-------|------|
| doc_id | Never changes, even if the file moves |
| name | Plain unique name (`doc-naming-handoff`) |
| sha256 | File hash |
| path | Current location in the master (Google Drive) |
| backup | Dropbox path, if copied there |
| flags | DUP-OF, OCR-LOW, VAULT, as needed |

## 2. Sync
1. List the files in scope and hash them.
2. Match rows by sha256 first, then by doc_id.
3. File moved: update the path and keep the doc_id.
4. New file: add a row with a new doc_id.
5. File missing: flag the row **MISSING**. Don't delete the row.

## 3. Report
Rows added, updated, and flagged missing. Anything marked MISSING goes to Mission Control the same day.

Follows `core-guardrails`.
