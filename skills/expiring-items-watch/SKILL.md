---
name: expiring-items-watch
version: 1.0.0
owner: VA Benefits
status: proposed
source: issue #27 (with Photo Design & Creation reply)
description: "List anything that can quietly expire — unsubmitted portal drafts, export download links, auto-emptying trash, approval cards — with its expiry date. Don't submit, delete or ignore it. Use on every portal, export or library check."
---

# expiring-items-watch

Some work disappears on its own: portal drafts get purged, export links expire, trash empties itself, approval cards lapse. If you only watch submitted items and inbound mail, the prepared work vanishes silently.

## 1. List it every time you check
| Kind | Status line |
|---|---|
| Unsubmitted portal draft | `draft in portal, expires <date>, not submitted` |
| Export or download link | `export ready, link expires <date>, not yet downloaded` |
| Trash or recently deleted | `in trash, auto-deletes <date>` |
| Approval or send card | `card pending, expires <time>` |

If the portal or service can't be opened, say so (see `checked-sources`). Don't assume there's nothing there.

## 2. Don't submit, delete or ignore
- The owner decides whether to finish, save a copy or let it lapse.
- No submit, discard, restore or empty-trash click unless the owner asks for that exact action.

## 3. A draft is not a filing
- It isn't submitted until a receipt shows (see `close-on-receipt`).
- An export isn't done until the files are on disk and counted (see `verify-files-on-disk`).

## 4. Report a lapse
- If it disappears, write `lapsed / no longer shown, checked <date>`. It is not "nothing new".
- Put any item expiring within 3 days in **Needs you today** on the daily brief.

Follows `core-guardrails` and `close-on-receipt`.
