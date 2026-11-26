# Cloud Coding Agent Benchmark (v2.0)

A static, sortable page comparing three cloud coding agents (Cursor Cloud Agents, GitHub Copilot cloud agent, Cognition Devin) on capability, latency, cost and ROI.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page. Loads `data.json`, imports `score.js`, renders the table, chart and cards. |
| `score.js` | ES module with all scoring math: `DEFAULTS`, `speedScore`, `costScore`, `hubLabel`, `scoreAgent`. |
| `data.json` | All inputs: agents, confidence levels, sources, version and updated date. |
| `test.mjs` | Checks the math against expected values. Run with `node tools/agent-benchmark/test.mjs`. |
| `README.md` | This file. |

## Features

- Sortable columns (header buttons, keyboard accessible, `aria-sort`). Default sort: Capability score, descending.
- Toggle to blend ChatGPT AI Hub 5-task ratings; inputs for dev rate, hours saved and review minutes.
- Four weight sliders for the capability score, each showing its normalized %.
- Break-even review minutes column.
- Confidence badge (High / Medium / Low) under each score.
- Reset defaults, Copy share link, Download CSV (current table, current sort).
- Every setting plus sort column and direction is saved in the URL hash and restored on load.
- Inline-SVG "Capability vs ROI score" chart in the table's sort order.
- "When to use each" cards from `bestFor` / `watchOut`.
- Light and dark mode, horizontal table scroll on phones, error row if `data.json` fails to load.

## Metrics

| Metric | How it's measured | Confidence |
| --- | --- | --- |
| Multi-file refactor | % of agent refactor PRs merged (AIDev, 2025) | High |
| Bug-fix success | % of agent bug-fix PRs merged (AIDev, 2025) | High |
| API integration speed | Hours to PR close, used as a proxy | Low |
| Latency | Community estimate of time to first usable result | Low |
| Cost / merged task | Reported spend per merged task | Medium |
| Capability score | Weighted average of the four above | Medium |
| ROI multiple / ROI score | Value created vs cost plus review time | Medium |
| Break-even review min | Review time at which ROI = 1.0× | Medium (derived from ROI) |

## Formulas

All scores are clamped to 0-100.

```
blend(a, hub)  = hub toggle on ? (a + hub) / 2 : a
Refactor       = blend(refPR, hubRef)
Bug fix        = blend(fixPR, hubFix)
API speed      = blend(100 × (1 − ln(prHours / 0.5) / ln(48)), hubApi)
Latency        = blend(latComm, hubLat)
Cost score     = blend(100 × (1 − ln(cost / 0.25) / ln(100)), hubCost)
Capability     = (wRef×Refactor + wFix×BugFix + wApi×APIspeed + wLat×Latency) / (sum of weights, or 1 if 0)
ROI multiple   = (hours × rate) / (cost + (reviewMin / 60 × rate) / merge)
ROI score      = min(100, ROI multiple × 25)
Break-even     = max(0, (hours × rate − cost) × merge × 60 / rate)
```

Defaults: hub on, $100/h, 2 h saved, 30 review min, weights 30/30/20/20.

Expected default results: Cursor cap 74, ROI 2.64×, ROI score 66, break-even 80 min. Devin cap 59, 1.99×, 50, 63 min. Copilot cap 59, 1.68×, 42, 52 min.

## Caveats

- API integration speed uses PR completion time as a proxy.
- Latency is a community estimate.
- AIDev PR data is from 2025.
- AI Hub ratings are qualitative and tested Copilot's IDE agent mode.
- Copilot Workspace was sunset, so its successor (Copilot cloud agent) is scored.
- Devin's 67% merge rate is vendor-reported and not scored.

## Updating the numbers

1. Edit `data.json` only (agents, confidence, sources).
2. Bump `"version"` and `"updated"`.
3. Update the expected values in `test.mjs`.
4. Run `node tools/agent-benchmark/test.mjs` and confirm "All checks passed".
5. Run `POST_TEXT="$(cat tools/agent-benchmark/*)" node scripts/privacy-check.mjs` and confirm "No personal details found."
