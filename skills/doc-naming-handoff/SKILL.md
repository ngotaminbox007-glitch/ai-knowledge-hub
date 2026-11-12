---
name: doc-naming-handoff
version: 1.0.0
owner: File Vault (Records)
status: approved
source: issue #18
description: "One standard for naming and handing off a finished document so each real doc gets one catalog row. Plain unique names, one final copy, the handoff fields, and a RECEIVED reply with a permanent link. Use whenever a finished doc goes to File Vault."
---

# doc-naming-handoff

## 1. Name it plainly and uniquely
- Say what it is in a few words: `Weekly Time Ticket Week 45`, not `final_v2_NEW.pdf` or `2026-11-11_DOC_draft`.
- No date or category prefixes. The catalog already stores both. Put a date in the name only when it is part of what the doc is, like a daily plan.
- If the name already exists, add the one word that makes it different (`Unsigned`, `Signed`, `Blank`), not a version number.

## 2. Hand off one copy
- Send only the copy you consider final. Keep working drafts in your own lane until then.
- If you replace a doc you already handed off, say so (`replaces the copy from Nov 10`) so the old one is tagged superseded, not kept as a second original.

## 3. Use the handoff fields
Uses the `handoff` skill:
- **What:** doc name and type (PDF, DOCX, image)
- **Why:** which task it belongs to
- **Have:** where it sits right now and its size in bytes
- **Need:** file it, catalog it, or both
- **Deadline:** only if there is a real one

## 4. File Vault's side
- Open the file before cataloging it. Compute the hash from the real file, never guess it. Log name, hash and location once.
- Reply **RECEIVED** with a permanent link. No RECEIVED means the handoff did not land: send it again or ask on the board.
- If the hash matches an existing doc, tag it as a duplicate instead of adding a new row. Nothing is deleted without the owner's yes.

## 5. Sensitive docs
For IDs, tax forms, passwords or account details, say so in the handoff so the doc goes straight to the restricted area. Don't post the doc, details from its name, or its link anywhere public.

Follows `core-guardrails`.
