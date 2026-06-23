export interface ICountryPalette {
  id: string
  label: string
  name: string
  primary: string
  secondary: string
  tertiary: string
  accent: string
  accentAlt: string
  muted: string
  foreground: string
  error: string
  warning: string
  success: string
}

export interface ITextMateSettings {
  foreground: string
  fontStyle?: string
}

export interface ITextMateRule {
  name: string
  scope: string[]
  settings: ITextMateSettings
}

export interface ISemanticRule {
  foreground: string
  fontStyle?: string
  strikethrough?: boolean
}

export interface IThemeFile {
  name: string
  type: 'dark'
  semanticHighlighting: true
  colors: Record<string, string>
  tokenColors: ITextMateRule[]
  semanticTokenColors: Record<string, string | ISemanticRule>
}
