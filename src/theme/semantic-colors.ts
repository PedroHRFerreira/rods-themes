import type { ICountryPalette, ISemanticRule } from './types.ts'

export const createSemanticTokenColors = (
  palette: ICountryPalette
): Record<string, string | ISemanticRule> => ({
  variable: palette.foreground,
  parameter: palette.secondary,
  property: palette.accentAlt,
  function: palette.accent,
  method: palette.accentAlt,
  class: palette.tertiary,
  interface: { foreground: palette.tertiary, fontStyle: 'italic' },
  enum: palette.tertiary,
  type: palette.tertiary,
  keyword: palette.primary,
  string: palette.secondary,
  number: palette.tertiary,
  comment: { foreground: palette.muted, fontStyle: 'italic' },
  decorator: palette.primary,
  namespace: palette.accent,
  'variable.readonly': palette.tertiary,
  'function.declaration': palette.accent,
  '*.deprecated': { foreground: palette.muted, strikethrough: true }
})
