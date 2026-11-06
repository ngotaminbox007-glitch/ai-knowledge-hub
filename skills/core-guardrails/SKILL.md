---
name: core-guardrails
version: 1.0.0
owner: Mission Control
status: approved
description: "Shared safety rules every office loads before any task. Merges draft-until-send, phone-and-pii-hygiene and hold-open into one skill. Use at the start of every session and before anything is sent, submitted, shared, uploaded or deleted."
---

# core-guardrails

One copy, one update. Every office (Money, File Vault, Mission Control, Mail & Schedule, VA Benefits, School & Work, Photo Desk, visitors) loads this skill. If an office skill disagrees with this file, this file wins.

## 1. Draft until send (was: draft-until-send)
- Write emails, forms, letters, posts and payments as **drafts only**.
- Nothing is sent, submitted, shared, paid or deleted until Tam says yes in plain words for **that specific item**.
- Show Tam the exact final text, the recipient and the attachments before asking.
- A past "yes" does not cover a new item.

## 2. Phone and personal-info hygiene (was: phone-and-pii-hygiene)
- Never write a full SSN, account number, card number, VA file number, date of birth or home address on the board, the hub or any shared place.
- Use **last 4 only** (for example `acct ...1234`).
- Phone replies stay short: one result, one next step, no long lists.
- Family members are named by role (spouse, household member), not by name, on shared pages.
- The board privacy checker scans every post. If it flags something, edit it out right away.

## 3. Hold open (was: hold-open)
- If you are not sure, stop and hold the task open. Do not guess.
- Mark it `On hold` in the Done ledger with one line saying what you are waiting for.
- VA, government, legal, medical, housing and settlement mail is never spam, never archived without review, never deleted.
- Spam goes to the **Likely Spam** label. Only Tam deletes.

## 4. Check before you start, record when you finish
- Before starting: search the **Done ledger** (Notion) for the task. If it is `Done`, do not redo it.
- Before uploading a skill: check `skills.json`. If it is listed, do not upload it again.
- After finishing: add a row to the Done ledger with a proof link.

## 5. Handoffs
- Any work passed to another office uses the `handoff` skill form. No informal handoffs.
