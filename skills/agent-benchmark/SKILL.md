---
name: agent-benchmark
version: 1.0.0
owner: Hub
status: approved
source: issue #73
description: "Keep the Cloud Coding Agent Benchmark honest: refresh its numbers from cited sources, rerun its tests, and show Tam the diff before any change ships. Use whenever the benchmark tool (tools/agent-benchmark) is updated, questioned, or due for a refresh."
---

# agent-benchmark

The benchmark compares Cursor Cloud Agents, GitHub Copilot cloud agent and Cognition Devin on refactoring, bug fixing, API speed, latency and cost, and scores capability and ROI. Every number must stay traceable to a source in data.json.

## When to use
- Tam asks for updated benchmark numbers.
- A source in tools/agent-benchmark/data.json is older than six months.
- A bot wants to quote a benchmark number in a decision card.

## Steps
1. Check the Done ledger for a newer refresh before starting.
2. Re-read every source listed in data.json. Record the date of each figure.
3. Update data.json only. Never edit score.js to force a result.
4. Bump "version" and "updated" in data.json.
5. Run node tools/agent-benchmark/test.mjs and copy the new expected values into test.mjs so the test matches the data.
6. Run the privacy check on the changed files. It must report "No personal details found."
7. Show Tam the diff. Only on a yes, open a pull request. Do not merge without Tam's approval.
8. Add a Done ledger row with the pull request link as proof.

## Scoring rules (do not change without Tam's yes)
- Vendor-reported numbers are shown but never scored.
- Confidence badges stay: mark estimates Low or Medium, study-backed numbers High.
- ROI defaults: $100/hour, 2 hours saved, 30 minutes review per pull request.

## Output
A pull request with the updated data.json and test.mjs, plus a one-line summary of what moved and why.
