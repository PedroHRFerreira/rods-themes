import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { Ajv } from 'ajv'
import { themePalettes } from '../palettes/collection.ts'
import { createThemeFile } from '../theme/theme-file.ts'
import { createColorSchemeXml } from '../jetbrains/color-scheme.ts'
import { createThemeJson } from '../jetbrains/theme-json.ts'
import { createPluginXml } from '../jetbrains/plugin-xml.ts'
import { createZedFamily } from '../zed/theme-family.ts'

const manifest = JSON.parse(readFileSync('package.json', 'utf8'))
const schema = JSON.parse(readFileSync('src/zed/themes.schema.json', 'utf8'))
schema.definitions.ThemeStyleContent.additionalProperties = false
const validate = new Ajv({ allErrors: true }).compile(schema)
const names = ['Rods Black Neon', 'Rods Black Emerald', 'Rods Black Ember', 'Rods Dark Graphite', 'Rods Dark Midnight']
const backgrounds = ['#000000', '#000000', '#000000', '#0D1117', '#161B26']

test('the public catalog has exactly five unique names and matching VS Code paths', () => {
  assert.deepEqual(themePalettes.map((palette) => palette.name), names)
  assert.equal(new Set(themePalettes.map((palette) => palette.id)).size, 5)
  assert.deepEqual(manifest.contributes.themes, themePalettes.map((palette) => ({
    label: palette.name, uiTheme: 'vs-dark', path: `./themes/${palette.id}-color-theme.json`
  })))
  assert.equal(manifest.version, '0.1.0')
})

test('all Zed themes comply with the official schema and use known style properties', () => {
  const family = createZedFamily(themePalettes, manifest.author.name)
  assert.ok(validate(family), JSON.stringify(validate.errors))
  assert.deepEqual(family.themes.map((theme) => theme.name), names)
  assert.ok(family.themes.every((theme) => theme.appearance === 'dark'))
  const invalid = structuredClone(family)
  Object.assign(invalid.themes[0].style, { 'editor.unknown': '#FFFFFF' })
  assert.equal(validate(invalid), false)
})

test('backgrounds, gutter, terminal and readable selections agree across formats', () => {
  const zed = createZedFamily(themePalettes, manifest.author.name)
  themePalettes.forEach((palette, index) => {
    const vs = createThemeFile(palette)
    const jb = JSON.parse(createThemeJson(manifest, palette))
    const xml = createColorSchemeXml(palette)
    const style = zed.themes[index].style
    for (const key of ['editor.background', 'editorGutter.background', 'terminal.background']) {
      assert.equal(vs.colors[key], backgrounds[index])
    }
    assert.equal(style['editor.background'], backgrounds[index])
    assert.equal(style['terminal.background'], backgrounds[index])
    assert.equal(jb.colors.background, backgrounds[index])
    assert.equal(jb.ui['Panel.background'], palette.surfaces.panel)
    assert.equal(vs.colors['titleBar.activeBackground'], palette.surfaces.chrome)
    assert.equal(style['title_bar.background'], palette.surfaces.chrome)
    assert.match(xml, new RegExp(`<option name="TEXT"><value><option name="FOREGROUND" value="${palette.foreground.slice(1).toLowerCase()}"/><option name="BACKGROUND" value="${backgrounds[index].slice(1).toLowerCase()}"/>`))
    assert.equal(vs.colors['editor.selectionBackground'], style.players[0].selection)
    assert.match(xml, /name="SELECTION_BACKGROUND"/)
    assert.match(xml, /<option name="CONSOLE_BLUE_BRIGHT_OUTPUT"><value><option name="FOREGROUND"/)
    assert.doesNotMatch(xml, /SELECTION_BACKGROUND_COLOR|CONSOLE_BRIGHT_BLUE_OUTPUT/)
    assert.notEqual(vs.colors['editor.selectionBackground'], palette.primary)
    assert.equal(vs.semanticTokenColors.keyword, style.syntax.keyword?.color)
    assert.equal(vs.semanticTokenColors.string, style.syntax.string?.color)
    assert.equal(jb.editorScheme, `/colorSchemes/${palette.id}.xml`)
  })
})

test('JetBrains descriptor preserves plugin identity, supports five themes and describes migration', () => {
  const xml = createPluginXml(manifest, themePalettes)
  assert.match(xml, /<id>com.pedrohrferreira.rodsThemes<\/id>/)
  assert.match(xml, /since-build="241"/)
  assert.equal((xml.match(/<themeProvider /g) ?? []).length, 5)
  for (const palette of themePalettes) assert.ok(xml.includes(`/themes/${palette.id}.theme.json`))
  assert.match(xml, /0\.0\.x/)
  const description = xml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ?? ''
  assert.match(description, /^Five dark themes/)
  assert.match(description.slice(0, 40), /^[A-Za-z0-9 ,.:;-]{40}$/)
  assert.doesNotMatch(xml, /World Cup|Neon Black/)
})
