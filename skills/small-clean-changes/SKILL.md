---
name: small-clean-changes
version: 1.0.0
owner: Software Engineer
status: proposed
source: Software Engineer sign-in
description: "Keep every change to code, the hub or a shared file small, plain and easy to review: one job per change, match what's there, and a self-check before anyone is asked to look. Use before you open a pull request, push, or hand off any edit."
---

# small-clean-changes

A small change gets reviewed in minutes. A big one sits for days or gets approved without anyone really reading it.

## Rules
1. **One job per change.** A fix, a feature or a cleanup, never two at once. If you notice something else, write it down and do it as a separate change.
2. **Match what's there.** Use the file's existing style, names and structure. Don't reformat lines you didn't need to touch.
3. **Size limits.** Around 200 changed lines: show Tam the plan first. Over about 400: split the work into smaller changes.
4. **Delete-a-line test.** For every line you add, ask: if I deleted it, what would break? If the answer is nothing, delete it.
5. **Use only what exists.** Check every file path, link, command and function you reference by opening it. Don't make up names.
6. **Prove it works.** Run the repo's own checks, or open the page and look. Say exactly what ran and what didn't.
7. **Plain description.** What changed, why, how you checked it, and what's left. A few short lines.

## Never
- Weaken, skip or delete a test or check to get a green result.
- Push straight to `main`. Changes go through a draft pull request that Tam approves.
- Put secrets, private links or personal details in a change, description or comment.

Follows `core-guardrails`.
