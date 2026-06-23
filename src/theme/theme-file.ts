import { createSemanticTokenColors } from './semantic-colors.ts'
import { createTokenColors } from './token-colors.ts'
import { createUiColors } from './ui-colors.ts'
import type { ICountryPalette, IThemeFile } from './types.ts'

export const createThemeFile = (palette: ICountryPalette): IThemeFile => ({
  name: palette.name,
  type: 'dark',
  semanticHighlighting: true,
  colors: createUiColors(palette),
  tokenColors: createTokenColors(palette),
  semanticTokenColors: createSemanticTokenColors(palette)
})
