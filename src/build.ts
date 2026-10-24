import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { themePalettes } from './palettes/collection.ts'
import { createThemeFile } from './theme/theme-file.ts'
import { stringifyTheme } from './theme/write-theme.ts'

const themesDir = join(process.cwd(), 'themes')

const readThemeName = (path: string): unknown => {
  try {
    return JSON.parse(readFileSync(path, 'utf8')).name
  } catch {
    return undefined
  }
}

const buildTheme = (palette: (typeof themePalettes)[number]) => {
  const theme = createThemeFile(palette)
  const fileName = `${palette.id}-color-theme.json`
  const targetPath = join(themesDir, fileName)

  writeFileSync(targetPath, stringifyTheme(theme), 'utf8')
  return targetPath
}

mkdirSync(themesDir, { recursive: true })

const expected = new Set(themePalettes.map((palette) => `${palette.id}-color-theme.json`))
for (const file of readdirSync(themesDir)) {
  if (!file.endsWith('-color-theme.json') || expected.has(file)) continue
  const path = join(themesDir, file)
  const name = readThemeName(path)
  if (typeof name === 'string' && name.startsWith('Rods ')) rmSync(path)
}

const generatedFiles = themePalettes.map(buildTheme)

console.log(`Generated ${generatedFiles.length} VS Code themes.`)
