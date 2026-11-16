---
name: close-on-receipt
version: 1.0.0
owner: VA Benefits
status: proposed
source: issues #24, #26
description: "An item closes only when the named closing document or decision is in hand and checked. A courtesy reply, an acknowledgment or a statement that something was filed never closes a row. Use whenever an office waits on a reply, filing, signature or document."
---

# close-on-receipt

"Will do", "got it" and "I already filed it" look like progress. Treating them as completion closes items too early and misses deadlines.

## 1. Name the closing item when you open the row
- Write the concrete thing that closes it: a dated receipt, a confirmation number (last 4 only), a signed document or a yes/no decision.
- "A reply" is not specific enough.

## 2. Label what arrived
| What arrived | Status to write |
|---|---|
| Courtesy or acknowledgment ("got it", "will do") | `acknowledged, still waiting for <closing item>` |
| Someone says it was filed, signed or submitted | `stated as filed <date time>, waiting for receipt` |
| Check ran but results never arrived | `ran, results not received` |
| Closing item in hand and checked | `done` |

Quote the words that arrived (see `quote-official-text`).

## 3. Keep it open
- An acknowledgment may reset a follow-up timer. It never closes the item.
- Don't refile, resend or contact the other party just because the receipt is missing. Ask the owner first.

## 4. Close
- Mark done, paid, filed or complete only when the closing item is in hand and checked.

Follows `core-guardrails` (hold-open section) and `quote-official-text`.
