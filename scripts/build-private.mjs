import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// The hub is served only under a secret path: https://<domain>/<HUB_KEY>/
// To rotate access, change HUB_KEY in the Vercel project settings and redeploy.
const key = process.env.HUB_KEY
if (!key || key.length < 16) {
  console.error('HUB_KEY env var is missing or shorter than 16 characters.')
  process.exit(1)
}

const host = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'localhost:3000'
const baseUrl = `https://${host}/${key}/`
const oldBaseUrl = 'https://ngotaminbox007-glitch.github.io/ai-knowledge-hub/'

const out = 'dist'
const hubDir = join(out, key)
const skip = new Set(['.git', '.github', 'dist', 'node_modules', 'scripts', 'vercel.json', 'package.json', '.vercel'])
const textFile = /\.(html|md|txt|json)$/

rmSync(out, { recursive: true, force: true })
mkdirSync(hubDir, { recursive: true })

function copy(from, to) {
  for (const name of readdirSync(from)) {
    if (skip.has(name)) continue
    const src = join(from, name)
    const dest = join(to, name)
    if (statSync(src).isDirectory()) {
      mkdirSync(dest, { recursive: true })
      copy(src, dest)
    } else if (textFile.test(name)) {
      writeFileSync(dest, readFileSync(src, 'utf8').replaceAll(oldBaseUrl, baseUrl))
    } else {
      cpSync(src, dest)
    }
  }
}

copy('.', hubDir)

writeFileSync(
  join(out, 'index.html'),
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Private</title></head><body style="font-family:system-ui;display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0"><p>This site is private.</p></body></html>',
)
writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nDisallow: /\n')

console.log(`Built private hub at /${key.slice(0, 4)}.../`)
