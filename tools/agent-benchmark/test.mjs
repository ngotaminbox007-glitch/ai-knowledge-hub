import { readFileSync } from 'node:fs'
import { DEFAULTS, scoreAgent } from './score.js'

const data = JSON.parse(readFileSync(new URL('./data.json', import.meta.url), 'utf8'))

const expected = {
  'Cursor Cloud Agents': { cap: 74, roi: 2.64, roiS: 66, breakEven: 80 },
  'Cognition Devin': { cap: 59, roi: 1.99, roiS: 50, breakEven: 63 },
  'GitHub Copilot cloud agent': { cap: 59, roi: 1.68, roiS: 42, breakEven: 52 },
}

let failures = 0
const check = (ok, msg) => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`)
  if (!ok) failures++
}

for (const [name, exp] of Object.entries(expected)) {
  const agent = data.agents.find((a) => a.name === name)
  check(Boolean(agent), `${name} exists in data.json`)
  if (!agent) continue
  const s = scoreAgent(agent, DEFAULTS)
  check(Math.round(s.cap) === exp.cap, `${name} cap ${Math.round(s.cap)} = ${exp.cap}`)
  check(s.roi.toFixed(2) === exp.roi.toFixed(2), `${name} roi ${s.roi.toFixed(2)} = ${exp.roi.toFixed(2)}`)
  check(Math.round(s.roiS) === exp.roiS, `${name} roiS ${Math.round(s.roiS)} = ${exp.roiS}`)
  check(Math.round(s.breakEven) === exp.breakEven, `${name} breakEven ${Math.round(s.breakEven)} = ${exp.breakEven}`)
  for (const [k, v] of Object.entries(s)) check(Number.isFinite(v) && v > 0, `${name} ${k} > 0 (${v.toFixed(2)})`)
}

const cursor = data.agents.find((a) => a.name === 'Cursor Cloud Agents')
const on = scoreAgent(cursor, DEFAULTS).cap
const off = scoreAgent(cursor, { ...DEFAULTS, hub: false }).cap
check(on !== off, `hub toggle changes Cursor cap (${on.toFixed(2)} vs ${off.toFixed(2)})`)

const zero = scoreAgent(cursor, { ...DEFAULTS, w: { ref: 0, fix: 0, api: 0, lat: 0 } }).cap
check(zero === 0, 'all-zero weights give cap 0 without dividing by zero')

if (failures) {
  console.error(`\n${failures} check(s) failed`)
  process.exit(1)
}
console.log('\nAll checks passed')
