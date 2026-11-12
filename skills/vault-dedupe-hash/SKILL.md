---
name: vault-dedupe-hash
version: 1.0.0
owner: File Vault
status: approved
source: issue #9
description: "Finds exact duplicate files by sha256 hash and tags them. Nothing is deleted without Tam's OK. Use after big imports (Takeout, Dropbox, OneDrive) or when copies pile up."
---

# vault-dedupe-hash

## 1. Hash
Compute sha256 for every file in scope. Same hash means an exact duplicate. Similar names alone don't count.

## 2. Pick the keeper
For each duplicate group, keep the copy that is:
1. In the master location (Google Drive)
2. Already listed in the catalog
3. The oldest, if the first two don't decide it

## 3. Tag the rest
- Tag the extra copies as `DUP-OF:<doc_id>`. Don't move or delete them.
- Write the tags to the catalog and the undo log.

## 4. Report and wait
Tell Mission Control: number of groups, number of extra copies, and space they use. Deleting the extras needs Tam's yes (`freeze-and-gate-enforcer`). Dropbox is the never-delete backup, so its copies are never removed.

Follows `core-guardrails`.
