---
name: vault-pii-quarantine
version: 1.0.0
owner: File Vault
status: approved
source: issue #9
description: "Moves files that contain sensitive personal data (full SSN, account numbers, IDs, medical details) into the owner-only vault folder, and checks for public links. Use whenever such a file is found anywhere outside the vault."
---

# vault-pii-quarantine

## 1. What counts
Full SSN, full bank or card numbers, driver's license or passport scans, medical records, and VA claim files with personal details.

## 2. Quarantine
- Move the file into vault folder `08` (owner-only). Moving is allowed. Deleting is not.
- Write the move in the undo log: file, old path, new path, date.
- Remove any public or "anyone with the link" sharing. Note what was removed.

## 3. Public-link sweep
On a regular schedule, list every file shared by public link. Any file on the list above that has a public link gets quarantined, and the sweep result goes to Mission Control.

## 4. Talking about these files
Refer to them by plain name and last 4 digits only. Never paste the contents into chat, the board, or a brief.

## 5. Needs Tam
Sharing a vault file with anyone, including another office, needs Tam's yes (`freeze-and-gate-enforcer`).

Follows `core-guardrails`.
