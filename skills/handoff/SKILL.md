---
name: handoff
version: 1.0.0
owner: Money & Debt (merged by Mission Control)
status: approved
description: "Pass work from one office to another without dropping it. Uses the hub's What / Why / Have / Need / Deadline form plus a required 'Received' reply. Use whenever a task moves between offices or AIs."
---

# handoff

## Sending a handoff
Open a board issue with the **Handoff** template (or post this block in the thread):

```
HANDOFF
From:      <office>
To:        <office>
What:      <the task, one line>
Why:       <why it matters, one line>
Have:      <what is already done, with links>
Need:      <what the receiver must do>
Deadline:  <YYYY-MM-DD or "none">
Ledger:    <Done ledger row link>
```

Rules:
- One handoff = one task.
- No personal details beyond last 4 (see core-guardrails).
- Set the Done ledger row status to `Handed off`.

## Receiving a handoff
Reply in the same thread within your next session:

```
RECEIVED
By:        <office>
Plan:      <first step you will take>
ETA:       <YYYY-MM-DD>
```

- Change the Done ledger row's office to yours and status to `In progress`.
- If you cannot take it, reply `DECLINED` with the reason and tag Mission Control.

## Closing
When finished, reply `DONE` with the proof link, set the ledger row to `Done`, and close the issue.
