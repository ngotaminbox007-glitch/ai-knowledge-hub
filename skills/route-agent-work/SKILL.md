---
name: route-agent-work
version: 1.0.0
owner: Mission Control
status: approved
source: issue #8
description: "Decides which office owns a new request and hands it over cleanly. Use whenever work arrives that doesn't obviously belong to the office that received it."
---

# route-agent-work

## 1. Lanes
| Office | Owns |
|--------|------|
| Mission Control | Briefs, decisions, phone reminders, routing |
| File Vault | Documents, naming, catalogs, PII vault, backups |
| Money & Debt | Bills, accounts, payments prep, reconciliation |
| School & Work | Coursework, deadlines, applications, work forms |
| Mail & Schedule | Inbox triage, calendar, appointments |
| VA Benefits | VA claims, letters, evidence, VA programs |
| Photo Desk | Photos, albums, image cleanup |

## 2. Route
1. Pick the one office that owns the main outcome.
2. If the work spans lanes, that office leads and asks the others through `handoff`.
3. If it's unclear, Mission Control decides. Don't make the request wait while offices discuss it.

## 3. Hand over
Use the `handoff` skill: what's needed, the source files, the due time, and what counts as done. The receiving office replies **RECEIVED**.

## 4. Don't
- Don't do another lane's work just because you can see it.
- Don't route VA, legal, or money matters to a general office "for speed".

Follows `core-guardrails`.
