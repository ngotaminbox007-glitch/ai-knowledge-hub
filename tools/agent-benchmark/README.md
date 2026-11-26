# Cloud Coding Agent Benchmark

A sortable table comparing three cloud coding agents: Cursor Cloud Agents, GitHub Copilot cloud agent, and Cognition Devin. Open `index.html` over HTTP (it loads `data.json` with `fetch`).

## What each metric measures

| Metric | Measured value | Source |
| --- | --- | --- |
| Multi-file refactor | % of refactor PRs merged | AIDev task-level acceptance study |
| Bug-fix success | % of bug-fix PRs merged | AIDev task-level acceptance study |
| API integration speed | Median hours to PR close (proxy) | AIDev PR completion study |
| Latency | Typical time to first usable result | Community reports |
| Cost / merged task | Dollars per merged task | Usage logs and pricing write-ups |
| Merge rate | Overall share of PRs merged (used in ROI) | AIDev PR completion study |

The ChatGPT AI Hub 5-task ratings can be blended in with the checkbox.

## Formulas

All scores are 0-100 and clamped.

- `blend(a, hub) = hubOn ? (a + hub) / 2 : a`
- Refactor = `blend(refPR, hubRef)`
- Bug fix = `blend(fixPR, hubFix)`
- API speed = `blend(100 × (1 − ln(prHours / 0.5) / ln(48)), hubApi)`
- Latency = `blend(latComm, hubLat)`
- Cost score = `blend(100 × (1 − ln(cost / 0.25) / ln(100)), hubCost)`
- Capability = `0.3 × Refactor + 0.3 × BugFix + 0.2 × APIspeed + 0.2 × Latency`
- ROI multiple = `(hours × rate) / (cost + (reviewMin / 60 × rate) / merge)`
- ROI score = `min(100, ROI multiple × 25)`

Defaults (Hub on, $100/h, 2 h saved, 30 review min): Cursor 74 / 2.64× / 66, Devin 59 / 1.99× / 50, Copilot 59 / 1.68× / 42.

## Caveats

- API integration speed uses PR completion time as a proxy.
- Latency is a community estimate.
- AIDev PR data is from 2025.
- AI Hub ratings are qualitative and tested Copilot's IDE agent mode.
- Copilot Workspace was sunset, so its successor (Copilot cloud agent) is scored.
- Devin's 67% merge rate is vendor-reported and not scored.

## Updating the numbers

Edit `data.json` only, then bump `"updated"` to today's date. The page recalculates everything from that file.
