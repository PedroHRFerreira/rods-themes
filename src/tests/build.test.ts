import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import test from 'node:test'
import { themePalettes } from '../palettes/collection.ts'

test('VS Code build removes obsolete Rods outputs, preserves other files and is repeatable', () => {
  const directory = mkdtempSync(join(tmpdir(), 'rods-themes-test-'))
  const output = join(directory, 'themes')
  mkdirSync(output)
  writeFileSync(join(output, 'old-neon-black-color-theme.json'), '{"name":"Rods Themes: Old Neon Black"}')
  writeFileSync(join(output, 'personal-color-theme.json'), '{"name":"Personal"}')
  writeFileSync(join(output, 'draft-color-theme.json'), 'An unfinished personal theme')
  writeFileSync(join(output, 'README.md'), 'Keep this document.\n')
  const run = () => execFileSync(process.execPath, [
    '--import', import.meta.resolve('tsx'), resolve('src/build.ts')
  ], { cwd: directory })
  try {
    run()
    const files = readdirSync(output).sort()
    assert.ok(!files.includes('old-neon-black-color-theme.json'))
    assert.ok(files.includes('personal-color-theme.json'))
    assert.equal(readFileSync(join(output, 'README.md'), 'utf8'), 'Keep this document.\n')
    assert.ok(files.includes('draft-color-theme.json'))
    assert.equal(files.length, 8)
    const first = files.map((file) => readFileSync(join(output, file), 'utf8'))
    run()
    assert.deepEqual(readdirSync(output).sort(), files)
    assert.deepEqual(files.map((file) => readFileSync(join(output, file), 'utf8')), first)
    for (const palette of themePalettes) {
      assert.equal(JSON.parse(readFileSync(join(output, `${palette.id}-color-theme.json`), 'utf8')).name, palette.name)
    }
  } finally {
    rmSync(directory, { recursive: true, force: true })
  }
})
