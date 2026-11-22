import { cpSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

// Rebuilds skill-source-package.zip: keeps what is already in the package and adds or
// refreshes every approved skill from skills/, plus skills.json and a MANIFEST.tsv.
// Run after a skill is approved: node scripts/build-package.mjs  (needs zip and unzip)
const zipFile = resolve('skill-source-package.zip')
const root = 'skill-source-package'
const registry = JSON.parse(readFileSync('skills.json', 'utf8'))
const approved = registry.skills.filter((s) => s.status === 'approved' && s.path?.startsWith('skills/'))

const work = mkdtempSync(join(tmpdir(), 'pkg-'))
execFileSync('unzip', ['-q', zipFile, '-d', work])
const pkg = join(work, root)

for (const s of approved) {
  cpSync(join('skills', s.name), join(pkg, s.name), { recursive: true })
}
cpSync('skills.json', join(pkg, 'skills.json'))

const status = new Map(registry.skills.map((s) => [s.name, s.status]))
const files = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? files(p) : [p]
  })
const rows = files(pkg)
  .filter((p) => p.endsWith('SKILL.md'))
  .map((p) => {
    const data = readFileSync(p)
    const rel = p.slice(pkg.length + 1)
    const name = rel.split('/')[0]
    const version = /^version:\s*(.+)$/m.exec(data.toString())?.[1].trim() ?? ''
    return [name, status.get(name) ?? 'package-only', version, data.length, createHash('sha256').update(data).digest('hex'), rel]
  })
  .sort((a, b) => a[0].localeCompare(b[0]))
writeFileSync(
  join(pkg, 'MANIFEST.tsv'),
  [['name', 'status', 'version', 'bytes', 'sha256', 'file'], ...rows].map((r) => r.join('\t')).join('\n') + '\n',
)

rmSync(zipFile)
execFileSync('zip', ['-q', '-X', '-r', zipFile, root], { cwd: work })
rmSync(work, { recursive: true, force: true })

const sha = createHash('sha256').update(readFileSync(zipFile)).digest('hex')
console.log(`${rows.length} skills (${approved.length} approved from skills/). skill-source-package.zip sha256 ${sha}`)
