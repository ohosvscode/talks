#!/usr/bin/env node

import { spawn } from 'node:child_process'
import { access, mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

const entries = await readdir(repoRoot, { withFileTypes: true })
const talkDirs = []
const excludedNames = new Set(['dist', 'node_modules', 'scripts'])
const distRoot = path.join(repoRoot, 'dist')

for (const entry of entries) {
  if (!entry.isDirectory())
    continue
  if (entry.name.startsWith('.'))
    continue
  if (excludedNames.has(entry.name))
    continue

  try {
    await access(path.join(repoRoot, entry.name, 'slides.md'))
    talkDirs.push(entry.name)
  }
  catch {
    // skip directories without slides.md
  }
}

if (talkDirs.length === 0) {
  console.error('未找到任何包含 slides.md 的演讲目录。')
  process.exit(1)
}

talkDirs.sort()

await rm(distRoot, { recursive: true, force: true })
await mkdir(distRoot, { recursive: true })

const requested = Number.parseInt(process.env.BUILD_CONCURRENCY ?? '', 10)
const maxConcurrency = Number.isFinite(requested) && requested > 0 ? requested : Math.min(4, talkDirs.length)
const queue = [...talkDirs]

await Promise.all(
  Array.from({ length: Math.min(maxConcurrency, queue.length) }, () => runNext()),
)

const latest = talkDirs.at(-1)
const redirectLines = [
  `/ /${latest}/ 302`,
  ...talkDirs.map(talk => `/${talk}/* /${talk}/index.html 200`),
]

await writeFile(path.join(distRoot, '_redirects'), `${redirectLines.join('\n')}\n`, 'utf8')

console.log('全部演讲构建完成。')

async function runNext() {
  const talk = queue.shift()
  if (!talk)
    return

  await buildTalk(talk)
  await runNext()
}

async function buildTalk(talk) {
  console.log(`开始构建 ${talk}…`)

  await rm(path.join(repoRoot, talk, 'dist'), { recursive: true, force: true })

  const outDir = path.join(distRoot, talk)

  await new Promise((resolve, reject) => {
    const child = spawn('pnpm', ['exec', 'slidev', 'build', `${talk}/slides.md`, '--out', outDir, '--base', './'], {
      cwd: repoRoot,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    })

    child.on('close', (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`构建 ${talk} 失败，退出码 ${code}`))
    })
  })
}
