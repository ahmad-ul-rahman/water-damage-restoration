import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'
import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.resolve(__dirname, '..')
const repoUrl = 'https://github.com/ahmad-ul-rahman/water-damage-restoration.git'

/**
 * Attempt to retrieve token from git credential helper or GitHub CLI
 */
function getCredentialFromHelper() {
  try {
    const ghToken = execSync('gh auth token', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim()
    if (ghToken) return ghToken
  } catch {}

  try {
    const input = 'protocol=https\nhost=github.com\n\n'
    const output = execSync('git credential fill', {
      input,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore']
    })
    const match = output.match(/password=(.+)/)
    if (match) return match[1].trim()
  } catch {}

  return null
}

/**
 * Retrieve GitHub token from environment, credential helper, or uncommitted .env.local
 */
function getGitHubToken() {
  // 1. Process environment variables
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN.trim()
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN.trim()

  // 2. Git Credential Helper or GitHub CLI
  const helperToken = getCredentialFromHelper()
  if (helperToken) return helperToken

  // 3. Uncommitted local env files (.env.local, .env)
  const envFiles = ['.env.local', '.env']
  for (const envFile of envFiles) {
    const envPath = path.join(dir, envFile)
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8')
      const match = content.match(/^GITHUB_TOKEN=(.+)$/m)
      if (match) return match[1].trim()
    }
  }
  return null
}

function getFiles(currentDir, relativeDir = '') {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true })
  let files = []
  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name)
    const relPath = relativeDir ? `${relativeDir}/${entry.name}` : entry.name
    if (
      entry.name === '.git' ||
      entry.name === 'node_modules' ||
      entry.name === 'dist' ||
      entry.name === '.output' ||
      entry.name === '.nitro' ||
      entry.name === '.wrangler' ||
      entry.name === 'scratch' ||
      entry.name.startsWith('.env') ||
      entry.name.endsWith('.local')
    ) {
      continue
    }
    if (entry.isDirectory()) {
      files = files.concat(getFiles(fullPath, relPath))
    } else {
      files.push(relPath)
    }
  }
  return files
}

export async function gitStatus() {
  const files = getFiles(dir)
  const results = []
  for (const file of files) {
    const status = await git.status({ fs, dir, filepath: file })
    if (status !== 'unmodified') {
      results.push({ file, status })
    }
  }
  return results
}

export async function gitCommitAndPush(message = 'Update project files') {
  const token = getGitHubToken()
  if (!token) {
    throw new Error(
      'GITHUB_TOKEN not found.\n' +
      'Please supply it via one of the following:\n' +
      '  1. Environment variable: set GITHUB_TOKEN=your_token\n' +
      '  2. Uncommitted local file: add GITHUB_TOKEN=your_token in .env.local\n' +
      '  3. Git Credential Helper / GitHub CLI (gh auth login)'
    )
  }

  const files = getFiles(dir)
  for (const file of files) {
    await git.add({ fs, dir, filepath: file })
  }

  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'ahmad-ul-rahman',
      email: 'ahmad-ul-rahman@users.noreply.github.com'
    },
    message
  })
  console.log('Committed:', sha)

  try {
    await git.deleteRemote({ fs, dir, remote: 'origin' })
  } catch {}
  await git.addRemote({ fs, dir, remote: 'origin', url: repoUrl })

  try {
    await git.branch({ fs, dir, ref: 'main' })
  } catch {}

  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    force: true,
    onAuth: () => ({ username: token })
  })
  console.log('Pushed to GitHub:', pushResult.ok ? 'SUCCESS' : 'FAILED')
  return { sha, pushResult }
}

const cmd = process.argv[2]
if (cmd === 'status') {
  gitStatus().then(res => {
    console.log('Modified / untracked files:', res)
  }).catch(console.error)
} else if (cmd === 'commit' || cmd === 'push' || cmd === 'sync') {
  const msg = process.argv[3] || 'Update project files'
  gitCommitAndPush(msg).catch(console.error)
}
