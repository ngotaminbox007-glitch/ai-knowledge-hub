import { writeFileSync } from 'node:fs'

const text = process.env.POST_TEXT ?? ''

const patterns = [
  { name: 'SSN', re: /\b(?!000|666|9\d\d)\d{3}[- ](?!00)\d{2}[- ](?!0000)\d{4}\b/g },
  { name: 'phone number', re: /(?:\+?1[-. ]?)?\(?\b\d{3}\)?[-. ]\d{3}[-. ]\d{4}\b/g },
  { name: 'email address', re: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g },
  { name: 'account or card number', re: /\b\d(?:[ -]?\d){8,18}\b/g },
  {
    name: 'street address',
    re: /\b\d{1,6}\s+(?:[A-Z][a-z]+\s){1,3}(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Dr|Drive|Ln|Lane|Ct|Court|Way|Pl|Place|Cir)\b\.?/g,
  },
]

const allowedEmails = /noreply|example\.com/i

const findings = new Map()
for (const { name, re } of patterns) {
  for (const match of text.matchAll(re)) {
    const value = match[0]
    if (name === 'email address' && allowedEmails.test(value)) continue
    const digits = value.replace(/\D/g, '')
    const masked = `...${(digits || value).slice(-4)}`
    findings.set(`${name}${masked}`, { name, masked })
  }
}

if (findings.size === 0) {
  console.log('No personal details found.')
  process.exit(0)
}

const lines = [...findings.values()]
  .map((f) => `- possible **${f.name}** ending in \`${f.masked}\``)
  .join('\n')

const report = `**Privacy check flagged this post.**\n\n${lines}\n\nPer core-guardrails: last 4 only. Please edit the post to remove these, then remove the \`privacy-flag\` label.`

writeFileSync(process.env.REPORT_FILE ?? 'privacy-report.md', report)
console.log(report)
process.exit(1)
