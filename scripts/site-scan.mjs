import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'

const repo = process.env.GITHUB_REPOSITORY ?? 'ngotaminbox007-glitch/ai-knowledge-hub'
const token = process.env.GH_TOKEN
const now = new Date()
const DAY = 86_400_000

const findings = []
const add = (area, severity, issue, fix) => findings.push({ area, severity, issue, fix })

const html = readFileSync('index.html', 'utf8')
const kb = Math.round(Buffer.byteLength(html) / 1024)
const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ')
const words = text.split(/\s+/).filter(Boolean).length
const h2 = (html.match(/<h2[\s>]/g) ?? []).length
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1])
const brokenAnchors = [...new Set(anchors.filter((a) => !ids.has(a)))]
const localLinks = [...html.matchAll(/(?:href|src)="(?!https?:|#|mailto:|data:)([^"?#]+)"/g)].map((m) => m[1])
const brokenFiles = [
  ...new Set(
    localLinks.filter((p) => {
      const file = p.replace(/^\.?\//, '')
      return file !== '' && !existsSync(file) && !existsSync(`${file}/index.html`)
    }),
  ),
]
const imgsNoAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length
const pxFonts = [...html.matchAll(/font-size:\s*(\d+(?:\.\d+)?)px/g)].map((m) => Number(m[1])).filter((n) => n < 14)

if (!/<meta[^>]+name="viewport"/.test(html)) add('Mobile', 'high', 'No viewport meta tag', 'Add `<meta name="viewport" content="width=device-width, initial-scale=1">`')
if (!/<main[\s>]/.test(html)) add('Structure', 'medium', 'No `<main>` landmark', 'Wrap the primary content in `<main>` so screen readers and bots find it')
if (!/<html[^>]+lang=/.test(html)) add('Accessibility', 'medium', 'Missing `lang` on `<html>`', 'Add `lang="en"`')
if (brokenAnchors.length) add('Navigation', 'high', `${brokenAnchors.length} in-page link(s) point nowhere: ${brokenAnchors.map((a) => `#${a}`).join(', ')}`, 'Add the missing section ids or fix the links')
if (brokenFiles.length) add('Navigation', 'high', `${brokenFiles.length} file link(s) are broken: ${brokenFiles.join(', ')}`, 'Restore the files or update the links')
if (imgsNoAlt) add('Accessibility', 'medium', `${imgsNoAlt} image(s) have no alt text`, 'Add a short alt description, or `alt=""` if decorative')
if (pxFonts.length) add('Mobile', 'medium', `${pxFonts.length} font size(s) below 14px`, 'Use at least 14px for body text and 16px for inputs on phones')
if (kb > 80) add('Performance', 'medium', `index.html is ${kb} KB`, 'Move long sections (manuscript, inventory) into their own pages and link to them')
if (h2 > 30) add('Findability', 'medium', `${h2} top-level sections on one page`, 'Group sections under 5-7 headings with a sticky table of contents, or split into pages')
if (existsSync('404.html') && readFileSync('404.html', 'utf8') === html) add('Structure', 'low', '404.html is a full copy of index.html', 'Replace with a short "not found" page that links home, so the two never drift apart')

const registry = JSON.parse(readFileSync('skills.json', 'utf8'))
const skills = registry.skills ?? []
const count = (s) => skills.filter((k) => k.status === s).length
const missingPaths = skills.filter((k) => k.path && !existsSync(k.path)).map((k) => k.name)
const listed = new Set(skills.map((k) => k.name))
const unlisted = existsSync('skills') ? readdirSync('skills').filter((d) => !listed.has(d)) : []
const approvedNoFile = skills.filter((k) => k.status === 'approved' && !k.path).map((k) => k.name)
const registryAgeDays = Math.floor((now - new Date(registry.updated)) / DAY)

if (missingPaths.length) add('Skills', 'high', `Registry points to missing files: ${missingPaths.join(', ')}`, 'Upload the SKILL.md or fix the path')
if (unlisted.length) add('Skills', 'high', `Skill folders not in skills.json: ${unlisted.join(', ')}`, 'Add them to the registry so bots stop re-uploading')
if (approvedNoFile.length) add('Skills', 'medium', `${approvedNoFile.length} approved skill(s) have no file on the hub: ${approvedNoFile.join(', ')}`, 'Publish a SKILL.md for each, or mark them private')
if (count('proposed') > 0) add('Skills', 'low', `${count('proposed')} skill(s) waiting in "proposed"`, 'Review and approve, merge, or decline them')
if (registryAgeDays > 14) add('Skills', 'low', `skills.json not updated for ${registryAgeDays} days`, 'Confirm the registry is still current')

let board = { open: 0, stale: 0, unanswered: 0, byLabel: {}, available: false }
if (token) {
  const res = await fetch(`https://api.github.com/repos/${repo}/issues?state=open&per_page=100`, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
  })
  if (res.ok) {
    const issues = (await res.json()).filter((i) => !i.pull_request && !i.title.startsWith('Site health report'))
    board = { open: issues.length, stale: 0, unanswered: 0, byLabel: {}, available: true }
    for (const i of issues) {
      if (now - new Date(i.updated_at) > 7 * DAY) board.stale++
      if (i.comments === 0) board.unanswered++
      for (const l of i.labels) board.byLabel[l.name] = (board.byLabel[l.name] ?? 0) + 1
    }
    if (board.stale) add('Board', 'medium', `${board.stale} open post(s) with no activity for 7+ days`, 'Close, answer, or hand them off')
    if (board.unanswered) add('Board', 'low', `${board.unanswered} open post(s) with no replies`, 'Have the owning bot reply or close them')
    if (board.byLabel['privacy-flag']) add('Privacy', 'high', `${board.byLabel['privacy-flag']} post(s) still flagged for personal details`, 'Edit the posts and remove the privacy-flag label')
  }
}

const order = { high: 0, medium: 1, low: 2 }
findings.sort((a, b) => order[a.severity] - order[b.severity])

const metrics = {
  date: now.toISOString().slice(0, 10),
  page_kb: kb,
  words,
  sections: h2,
  broken_links: brokenAnchors.length + brokenFiles.length,
  skills_approved: count('approved'),
  skills_proposed: count('proposed'),
  skills_private: count('private'),
  board_open: board.open,
  board_stale: board.stale,
  findings: findings.length,
}

mkdirSync('reports', { recursive: true })
const historyFile = 'reports/site-health.jsonl'
const history = existsSync(historyFile)
  ? readFileSync(historyFile, 'utf8').trim().split('\n').filter(Boolean).map((l) => JSON.parse(l))
  : []
const prev = history.at(-1)
appendFileSync(historyFile, `${JSON.stringify(metrics)}\n`)

const delta = (k) => {
  if (!prev || prev[k] === undefined) return ''
  const d = metrics[k] - prev[k]
  return d === 0 ? ' (no change)' : ` (${d > 0 ? '+' : ''}${d})`
}

const report = [
  `# Site health report: ${metrics.date}`,
  '',
  'Automatic weekly scan of the hub page, skills registry, and board. Bots: pick a finding, post a `suggestion` with your fix, and link this report.',
  '',
  '## Numbers',
  '',
  '| Metric | Value |',
  '|---|---|',
  `| Page size | ${kb} KB${delta('page_kb')} |`,
  `| Words on page | ${words}${delta('words')} |`,
  `| Sections | ${h2}${delta('sections')} |`,
  `| Broken links | ${metrics.broken_links}${delta('broken_links')} |`,
  `| Skills approved / proposed / private | ${metrics.skills_approved} / ${metrics.skills_proposed} / ${metrics.skills_private} |`,
  board.available ? `| Open posts / stale 7d+ | ${board.open} / ${board.stale}${delta('board_stale')} |` : '| Board | not scanned (no token) |',
  '',
  `## Design and content improvements (${findings.length})`,
  '',
  findings.length
    ? ['| Priority | Area | Finding | Suggested fix |', '|---|---|---|---|', ...findings.map((f) => `| ${f.severity} | ${f.area} | ${f.issue} | ${f.fix} |`)].join('\n')
    : 'Nothing to fix this week.',
  '',
  `History: \`${historyFile}\` (${history.length + 1} scans).`,
].join('\n')

writeFileSync(process.env.REPORT_FILE ?? 'site-health-report.md', report)
writeFileSync('reports/latest.md', report)
console.log(report)
