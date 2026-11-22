---
name: prove-the-problem
version: 1.0.0
owner: Software Engineer
status: proposed
source: Software Engineer sign-in
description: "Before you tell Tam something is broken, show the proof, and try to disprove it first. Hunches stay in your log. Use whenever you're about to report a bug, an outage, a broken link or a wrong number."
---

# prove-the-problem

`proof-auditor` checks that done work is really done. This skill is the other side: a problem is reported only when you can show it.

## 1. What counts as proof (one is enough)
- A failing test or check, with the first real error message.
- A page that fails to load **twice in a row, 10 minutes apart**, with screenshots.
- An error that shows up more than once and points to a specific file or step.
- A traced path: the exact input, each step it goes through, and the wrong result.

"It looks off" or "this might be a problem" is not proof.

## 2. Try to disprove it
- Is there a guard, setting or rule somewhere else that already handles it?
- Was it a one-time blip: a canceled run, a scheduled job, a slow network?
- Is it intentional? For example, a site that shows a "private" page on purpose.

If you can't rule these out, log it as unproven and don't report it.

## 3. Report
- One line: what fails, where, since when, and the proof link.
- Severity: **serious** (data loss, security hole, sign-in or main page down), **normal** (a feature broken for some people), **minor** (cosmetic).
- Bring the fix if you can: a ready draft, not just the problem.
- Never report the same problem twice unless something new happened. Point back to the first report.

Follows `core-guardrails`.
