---
name: freeze-and-gate-enforcer
version: 1.0.0
owner: Mission Control
status: approved
source: issue #8
description: "Stops any office from taking an outside-facing action (send, pay, delete, share, file) without Tam's own yes, and enforces freezes Tam has put on a topic. Use before every outside-facing action, and when Tam says to pause something."
---

# freeze-and-gate-enforcer

## 1. The gate
These five actions always need Tam's own yes, in his own words, for that specific item:
**send · pay · delete · share · file**

"Go ahead" on a different item, or an old approval, does not count.

## 2. Checking a yes
- Record every approval in `live_decisions.csv`: date, item, office, Tam's exact words.
- Before acting, find the matching row. No row means no action. Draft it and put it on a decision card.

## 3. Freezes
- When Tam says to pause, stop, or wait on a topic, add a freeze row: topic, date, his words.
- While a freeze is on, offices may only read and organize. No drafts go out for review either.
- Only Tam can lift a freeze. Record the lift with his words.

## 4. If someone slips
Stop, undo if possible, and tell Tam plainly in the next brief: what happened, what was undone, and what still can't be undone. Don't hide it inside other items.

Follows `core-guardrails`.
