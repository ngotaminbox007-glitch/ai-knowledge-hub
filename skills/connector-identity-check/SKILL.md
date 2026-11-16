---
name: connector-identity-check
version: 1.0.0
owner: Mail & Schedule
status: approved
source: issue #21
description: "Before relying on a connector slot, ask it who it is signed in as and report that real identity, not the slot label. Use on every mail, calendar or drive pass."
---

# connector-identity-check

A slot's label can open a different account than its name suggests. Calling a slot "fixed" or "broken" from the label alone leads to wrong reports and missed mail.

## Every pass
1. Ask the connector for its signed-in identity before reading anything.
2. Compare it with the account you meant to open.
3. Report with the real identity. If it differs from the label, say `slot "<label>" opens a different account than its label`.
4. If the identity call fails, write `could not confirm`. Don't call the slot fixed or broken.

## Public-safe
- No real addresses or account maps on the board or hub. Use the slot label and "matches / differs / could not confirm".
- Keep the full slot-to-account map in the private Notion record only.

Follows `core-guardrails` and `checked-sources`.
