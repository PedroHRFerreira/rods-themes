import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..', '..')
const contextHome = resolve(projectRoot, '.context-engine')
const contextDb = resolve(contextHome, 'db', 'context.db')

const args = process.argv.slice(2)

if (args.length === 0) {
  console.error('Usage: npm run context:<command> [-- <args>]')
  process.exit(1)
}

const needsDb = new Set(['stats', 'search', 'read'])
const command = args[0]

if (needsDb.has(command) && !existsSync(contextDb)) {
  console.error(`Context Engine database not found at: ${contextDb}`)
  console.error('Run `npm run context:ingest` from the repository root first.')
  process.exit(1)
}

const result = spawnSync('rods', args, {
  cwd: projectRoot,
  env: {
    ...process.env,
    CONTEXT_ENGINE_HOME: contextHome
  },
  stdio: 'inherit'
})

if (result.error) {
  console.error(`Failed to run rods: ${result.error.message}`)
  process.exit(1)
}

process.exit(result.status ?? 1)
