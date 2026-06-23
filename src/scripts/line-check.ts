import { readdirSync, readFileSync, statSync } from 'node:fs'
import { basename, extname, join, relative } from 'node:path'

interface ILineReport {
  file: string
  lineCount: number
}

const lineLimit = 100
const ignoredNames = new Set(['.git', '.pnpm-store', 'node_modules', 'pnpm-lock.yaml', 'package-lock.json'])
const includedNames = new Set(['.gitignore', '.vscodeignore', 'LICENSE'])
const includedExtensions = new Set(['.json', '.md', '.ts'])

const isIgnored = (path: string) => {
  if (ignoredNames.has(basename(path))) return true
  if (path.endsWith('.vsix')) return true
  return false
}

const isIncluded = (path: string) => {
  if (includedNames.has(basename(path))) return true
  if (includedExtensions.has(extname(path))) return true
  return false
}

const collectFiles = (path: string, files: string[] = []) => {
  if (isIgnored(path)) return files

  const stats = statSync(path)

  if (stats.isFile()) {
    if (isIncluded(path)) files.push(path)
    return files
  }

  if (!stats.isDirectory()) return files

  readdirSync(path).forEach((entry) => collectFiles(join(path, entry), files))
  return files
}

const toLineReport = (file: string): ILineReport | null => {
  const content = readFileSync(file, 'utf8')
  const lineCount = content.split(/\r?\n/).length - 1

  if (lineCount <= lineLimit) return null
  return { file: relative(process.cwd(), file), lineCount }
}

const reports = collectFiles(process.cwd())
  .map(toLineReport)
  .filter((report): report is ILineReport => Boolean(report))

if (reports.length > 0) {
  console.error(`Files above ${lineLimit} lines:`)
  reports.forEach((report) => console.error(`- ${report.file}: ${report.lineCount}`))
  process.exit(1)
}

console.log(`All checked files are within ${lineLimit} lines.`)
