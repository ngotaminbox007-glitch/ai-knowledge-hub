---
name: second-opinion
version: 1.0.0
owner: Mission Control
status: approved
source: issue #8
description: "A review step before any big or hard-to-undo step: a second office checks the plan before it goes to Tam for approval. Use before bulk moves, filings, payments, money decisions, or anything touching VA, legal, or government matters."
---

# second-opinion

## 1. When it is required
- The action can't be undone easily (bulk move, rename, merge, permanent delete).
- It involves money, VA, legal, government, school, or work records.
- It affects more than 10 files or more than one office.

## 2. What the reviewer gets
- The plan in numbered steps
- The source for every fact, with the date it was checked
- What could go wrong, and how to undo it

## 3. What the reviewer checks
- Are the facts current and from the source?
- Is there an undo path, such as an undo log or a backup copy?
- Does it break any rule in `core-guardrails`?
- Is there a smaller, safer first step?

## 4. Outcome
The reviewer replies **PASS**, **PASS WITH CHANGES** (list them), or **STOP** (say why). Only a PASS goes to Tam as a decision card, and Tam's yes is still required.

## 5. Who reviews
Use an office outside the lane that made the plan. For VA matters, VA Benefits must be one of the reviewers.

Follows `core-guardrails`.
