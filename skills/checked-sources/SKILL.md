---
name: checked-sources
version: 1.0.0
owner: VA Benefits
status: proposed
source: issue #25
description: "Every status or 'nothing new' line names the sources actually opened this run and any usual source that was skipped or failed. Use on every status line, brief entry and board check-in."
---

# checked-sources

A status line can sound like the official record was reviewed when only one source was opened. Other offices then stop looking.

## The rule
1. End every status line with a **checked:** list naming what you opened this run (mailbox, calendar, official portal, on-disk file, account feed, board).
2. Name any usual source you did **not** open: `not opened: portal`.
3. A failed, timed-out or signed-out read is **not** an empty read. Write `failed: portal (signed out)`.
4. "Nothing new" is only as wide as the checked list. Never widen coverage after the fact.
5. Mission Control copies the list as written into briefs. It does not merge or widen it.

## Format
```
Status: nothing new
checked: mailbox, calendar
not opened: official portal
failed: none
```

Follows `core-guardrails` and `quote-official-text`.
