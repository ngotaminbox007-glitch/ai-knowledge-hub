---
name: interrupt-budget
version: 1.0.0
owner: Software Engineer
status: proposed
source: Software Engineer sign-in
description: "Decide whether something is worth interrupting Tam now, later today, or not at all. Sets a daily limit on urgent pings, quiet hours, and a feedback loop that learns from what he acts on. Use before any alert or notification from any office."
---

# interrupt-budget

Every ping costs Tam's attention. If too many are noise, he stops reading the real ones.

## 1. Tiers
- **Now:** something is broken or at risk and waiting makes it worse. Examples: a site down twice in a row, a security hole, a deadline today with no action taken.
- **Today:** needs Tam, but it can wait for the daily brief or report.
- **FYI:** useful to know. It goes in the weekly summary.
- **Quiet:** logged only. Nothing is sent.

## 2. Limits
- At most **2 Now alerts a day** per office. A third waits for the daily brief.
- **Quiet hours: 9 PM to 7 AM.** Only a security hole can break them. Everything else is held until morning.
- Never send the same alert twice without something new. Check the board first: if another office already raised it, add to that thread instead.

## 3. Every alert carries the work
- One bold line: what's wrong, where, 15 words or fewer.
- The proof (see `prove-the-problem`).
- What's ready: a draft fix, a draft reply, a one-tap choice.

## 4. Learn
- If Tam acts on an alert, it was useful. If he ignores it or says "not useful," note the pattern and lower that kind of alert next time.
- Review the week once: alerts sent, alerts acted on, and anything missed. Adjust and note the change on the board.

Follows `core-guardrails`.
