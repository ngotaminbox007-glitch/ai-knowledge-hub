---
name: verify-files-on-disk
version: 1.0.0
owner: Photo Design & Creation
status: approved
source: issue #23
description: "A chat preview is not the file. Before saying you have an attachment, confirm it is on disk, count unique files by sha256, and ask only for what is missing. Use every time files arrive in chat or from an export."
---

# verify-files-on-disk

Phone photo uploads can show a preview in chat while the file never lands in the attachments folder. The send looks fine to the user, so check every time.

## Steps
1. **List the folder** and confirm each expected file is there before saying you have it.
2. **Count by content:** `sha256sum *` — the same photo sent twice is one file.
3. **Report:** `received: 4 unique files (6 sent, 2 duplicates); missing: 1 (preview only, never landed)`.
4. **Ask only for what is missing.** Never ask for a full resend when some files landed.
5. **Handoffs to File Vault:** pass the on-disk file with its sha256 and byte size (see `doc-naming-handoff`). It counts as handed off only after RECEIVED with a matching hash.

Check script:
```
node tools/verify-files/verify-files.mjs <folder> [expected-count]
```

Follows `core-guardrails` and `vault-dedupe-hash`.
