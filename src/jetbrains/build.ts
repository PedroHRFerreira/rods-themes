import { join } from 'node:path'
import { countryPalettes } from '../palettes/countries.ts'
import { createColorSchemeXml } from './color-scheme.ts'
import { createPaths, readPackageManifest, resetBuildDir, runZip, writeTextFile } from './files.ts'
import { createPluginIcon } from './plugin-icon.ts'
import { createPluginXml } from './plugin-xml.ts'
import { createThemeJson } from './theme-json.ts'

const rootDir = process.cwd()
const packageJson = readPackageManifest(rootDir)
const paths = createPaths(rootDir, packageJson)
const pluginIcon = createPluginIcon()

resetBuildDir(paths)

writeTextFile(join(paths.jarContentDir, 'META-INF', 'plugin.xml'), createPluginXml(packageJson, countryPalettes))
writeTextFile(join(paths.jarContentDir, 'META-INF', 'pluginIcon.svg'), pluginIcon)
writeTextFile(join(paths.jarContentDir, 'META-INF', 'pluginIcon_dark.svg'), pluginIcon)
writeTextFile(join(paths.buildDir, 'rods-themes-plugin-icon.svg'), pluginIcon)

countryPalettes.forEach((palette) => {
  writeTextFile(
    join(paths.jarContentDir, 'themes', `${palette.id}-neon-black.theme.json`),
    createThemeJson(packageJson, palette)
  )
  writeTextFile(
    join(paths.jarContentDir, 'colorSchemes', `${palette.id}-neon-black.xml`),
    createColorSchemeXml(palette)
  )
})

runZip(paths.jarContentDir, paths.jarPath, ['META-INF', 'themes', 'colorSchemes'])
runZip(paths.buildDir, paths.zipPath, ['rods-themes'])

console.log(`Generated JetBrains plugin: ${paths.zipPath}`)
console.log(`Generated plugin jar: ${paths.jarPath}`)
console.log(`Generated plugin icon: ${join(paths.buildDir, 'rods-themes-plugin-icon.svg')}`)
