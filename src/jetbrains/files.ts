import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { spawnSync } from 'node:child_process'
import type { IJetBrainsPaths, IPackageManifest } from './types.ts'

export const readPackageManifest = (rootDir: string) =>
  JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8')) as IPackageManifest

export const createPaths = (
  rootDir: string,
  packageJson: IPackageManifest
): IJetBrainsPaths => {
  const buildDir = join(rootDir, 'build', 'jetbrains')
  const pluginDir = join(buildDir, 'rods-themes')

  return {
    buildDir,
    jarContentDir: join(buildDir, 'jar-content'),
    jarPath: join(pluginDir, 'lib', 'rods-themes.jar'),
    pluginDir,
    rootDir,
    zipPath: join(buildDir, `rods-themes-${packageJson.version}.zip`)
  }
}

export const resetBuildDir = (paths: IJetBrainsPaths) => {
  rmSync(paths.buildDir, { recursive: true, force: true })
  mkdirSync(join(paths.pluginDir, 'lib'), { recursive: true })
}

export const writeTextFile = (path: string, content: string) => {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, content, 'utf8')
}

export const runZip = (cwd: string, outputPath: string, entries: string[]) => {
  const result = spawnSync('/usr/bin/zip', ['-qr', outputPath, ...entries], {
    cwd,
    stdio: 'pipe'
  })

  if (result.status === 0) return

  const message = result.stderr.toString('utf8') || result.stdout.toString('utf8')
  throw new Error(`zip failed: ${message}`)
}
