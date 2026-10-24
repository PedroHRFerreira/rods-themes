import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { themePalettes } from '../palettes/collection.ts'
import { createZedFamily } from './theme-family.ts'

const manifest = JSON.parse(readFileSync('package.json', 'utf8'))
const outputDir = join(process.cwd(), 'build', 'zed')
mkdirSync(outputDir, { recursive: true })
const output = join(outputDir, 'rods-themes.json')
writeFileSync(output, `${JSON.stringify(createZedFamily(themePalettes, manifest.author.name), null, 2)}\n`)
console.log(`Generated ${themePalettes.length} Zed themes: ${output}`)
