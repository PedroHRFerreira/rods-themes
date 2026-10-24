import type { IThemePalette } from './types.ts'

// Opaque selection colors keep the same contrast in all three editor formats.
export const selectionColor = (palette: IThemePalette) => {
  const blend = (offset: number) => {
    const foreground = parseInt(palette.primary.slice(offset, offset + 2), 16)
    const background = parseInt(palette.surfaces.editor.slice(offset, offset + 2), 16)
    return Math.round(foreground * 0.22 + background * 0.78).toString(16).padStart(2, '0')
  }
  return `#${[1, 3, 5].map(blend).join('')}`
}

export const terminalColors = (palette: IThemePalette): Record<string, string> => ({
  black: palette.surfaces.input, red: palette.error, green: palette.success,
  yellow: palette.warning, blue: palette.primary, magenta: palette.tertiary,
  cyan: palette.accent, white: palette.foreground,
  brightBlack: palette.muted, brightRed: palette.error, brightGreen: palette.success,
  brightYellow: palette.warning, brightBlue: palette.primary, brightMagenta: palette.tertiary,
  brightCyan: palette.accentAlt, brightWhite: '#FFFFFF'
})
