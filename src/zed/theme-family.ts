import { selectionColor, terminalColors } from '../theme/colors.ts'
import type { IThemePalette } from '../theme/types.ts'

const syntax = (palette: IThemePalette): Record<string, { color: string; font_style?: 'italic' }> => {
  const groups = {
    primary: ['keyword', 'operator', 'tag', 'attribute'],
    secondary: ['string', 'string.escape', 'variable.parameter'],
    tertiary: ['type', 'constructor', 'number', 'boolean', 'constant'],
    accent: ['function', 'function.method'],
    accentAlt: ['property'], foreground: ['variable', 'punctuation', 'punctuation.bracket']
  }
  return {
    ...Object.fromEntries(Object.entries(groups).flatMap(([color, tokens]) =>
      tokens.map((token) => [token, { color: palette[color as keyof typeof groups] }])
    )),
    comment: { color: palette.muted, font_style: 'italic' },
    'comment.doc': { color: palette.muted, font_style: 'italic' }
  }
}

export const createZedTheme = (palette: IThemePalette) => ({
  name: palette.name,
  appearance: 'dark',
  style: {
    background: palette.surfaces.panel, 'background.appearance': 'opaque',
    'surface.background': palette.surfaces.panel,
    'elevated_surface.background': palette.surfaces.input,
    'panel.background': palette.surfaces.panel,
    'title_bar.background': palette.surfaces.chrome,
    'title_bar.inactive_background': palette.surfaces.chrome,
    'status_bar.background': palette.surfaces.chrome,
    'toolbar.background': palette.surfaces.chrome,
    'tab_bar.background': palette.surfaces.chrome,
    'tab.active_background': palette.surfaces.editor,
    'tab.inactive_background': palette.surfaces.chrome,
    'element.background': palette.surfaces.input,
    'element.hover': palette.surfaces.lineHighlight,
    'element.selected': selectionColor(palette),
    'ghost_element.hover': palette.surfaces.lineHighlight,
    'ghost_element.selected': selectionColor(palette),
    border: palette.surfaces.border, 'border.variant': palette.surfaces.border,
    'border.focused': palette.primary, 'border.selected': palette.primary,
    text: palette.foreground, 'text.muted': palette.muted, 'text.accent': palette.primary,
    icon: palette.foreground, 'icon.muted': palette.muted, 'icon.accent': palette.primary,
    'editor.background': palette.surfaces.editor, 'editor.foreground': palette.foreground,
    'editor.gutter.background': palette.surfaces.editor,
    'editor.active_line.background': palette.surfaces.lineHighlight,
    'editor.line_number': palette.muted, 'editor.active_line_number': palette.secondary,
    'editor.indent_guide': palette.surfaces.border, 'editor.indent_guide_active': palette.primary,
    'editor.wrap_guide': palette.surfaces.border,
    'search.match_background': `${palette.warning}33`,
    'terminal.background': palette.surfaces.editor, 'terminal.foreground': palette.foreground,
    ...Object.fromEntries(Object.entries(terminalColors(palette)).map(([key, color]) =>
      [`terminal.ansi.${key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)}`, color]
    )),
    error: palette.error, 'error.background': `${palette.error}22`,
    warning: palette.warning, 'warning.background': `${palette.warning}22`,
    success: palette.success, created: palette.success, deleted: palette.error,
    modified: palette.warning, 'created.background': `${palette.success}22`,
    'deleted.background': `${palette.error}22`, 'modified.background': `${palette.warning}22`,
    players: [{ cursor: palette.primary, background: palette.primary, selection: selectionColor(palette) }],
    syntax: syntax(palette)
  }
})

export const createZedFamily = (palettes: IThemePalette[], author: string) => ({
  $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
  name: 'Rods Themes', author, themes: palettes.map(createZedTheme)
})
