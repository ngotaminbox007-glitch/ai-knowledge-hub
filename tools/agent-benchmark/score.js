export const DEFAULTS = Object.freeze({
  hub: true,
  rate: 100,
  hrs: 2,
  rev: 30,
  w: Object.freeze({ ref: 30, fix: 30, api: 20, lat: 20 }),
})

const clamp = (n) => Math.max(0, Math.min(100, n))

// 30 min to PR close scores 100, 24 h scores 0 (log scale).
export function speedScore(h) {
  return clamp(100 * (1 - Math.log(h / 0.5) / Math.log(48)))
}

// $0.25 per merged task scores 100, $25 scores 0 (log scale).
export function costScore(c) {
  return clamp(100 * (1 - Math.log(c / 0.25) / Math.log(100)))
}

export function hubLabel(v) {
  return v >= 90 ? 'V.High' : v >= 75 ? 'High' : v >= 55 ? 'Med' : v >= 35 ? 'Low' : 'V.Low'
}

export function scoreAgent(agent, opts = {}) {
  const o = { ...DEFAULTS, ...opts, w: { ...DEFAULTS.w, ...(opts.w || {}) } }
  const blend = (measured, hub) => clamp(o.hub ? (clamp(measured) + hub) / 2 : clamp(measured))

  const ref = blend(agent.refPR, agent.hubRef)
  const fix = blend(agent.fixPR, agent.hubFix)
  const api = blend(speedScore(agent.prHours), agent.hubApi)
  const lat = blend(agent.latComm, agent.hubLat)
  const costS = blend(costScore(agent.cost), agent.hubCost)

  const wSum = o.w.ref + o.w.fix + o.w.api + o.w.lat || 1
  const cap = clamp((o.w.ref * ref + o.w.fix * fix + o.w.api * api + o.w.lat * lat) / wSum)

  const value = o.hrs * o.rate
  const reviewCost = agent.merge === 0 ? Infinity : (o.rev / 60) * o.rate / agent.merge
  const spend = agent.cost + reviewCost
  const roi = spend > 0 ? value / spend : 0
  const roiS = clamp(roi * 25)
  const breakEven = o.rate > 0 ? Math.max(0, (value - agent.cost) * agent.merge * 60 / o.rate) : 0

  return { ref, fix, api, lat, costS, cap, roi, roiS, breakEven, value, spend }
}
