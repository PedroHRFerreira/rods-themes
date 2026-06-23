import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { countryPalettes } from './palettes/countries.ts'
import { createThemeFile } from './theme/theme-file.ts'
import { stringifyTheme } from './theme/write-theme.ts'

const themesDir = join(process.cwd(), 'themes')

const buildTheme = (palette: (typeof countryPalettes)[number]) => {
  const theme = createThemeFile(palette)
  const fileName = `${palette.id}-neon-black-color-theme.json`
  const targetPath = join(themesDir, fileName)

  writeFileSync(targetPath, stringifyTheme(theme), 'utf8')
  return targetPath
}

mkdirSync(themesDir, { recursive: true })

const generatedFiles = countryPalettes.map(buildTheme)

console.log(`Generated ${generatedFiles.length} VS Code themes.`)
