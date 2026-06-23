import type { ISemanticRule, ITextMateRule, IThemeFile } from './types.ts'

const json = (value: unknown) => JSON.stringify(value)

const comma = (index: number, total: number) => {
  if (index === total - 1) return ''
  return ','
}

const semanticValue = (value: string | ISemanticRule) => {
  if (typeof value === 'string') return json(value)
  return json(value)
}

const tokenLine = (rule: ITextMateRule, index: number, rules: ITextMateRule[]) => {
  return `    ${json(rule)}${comma(index, rules.length)}`
}

const colorLine = ([key, value]: [string, string], index: number, colors: [string, string][]) => {
  return `    ${json(key)}: ${json(value)}${comma(index, colors.length)}`
}

const semanticLine = (
  [key, value]: [string, string | ISemanticRule],
  index: number,
  entries: [string, string | ISemanticRule][]
) => {
  return `    ${json(key)}: ${semanticValue(value)}${comma(index, entries.length)}`
}

export const stringifyTheme = (theme: IThemeFile) => {
  const colorEntries = Object.entries(theme.colors)
  const semanticEntries = Object.entries(theme.semanticTokenColors)
  const lines = [
    '{',
    `  "name": ${json(theme.name)},`,
    `  "type": ${json(theme.type)},`,
    `  "semanticHighlighting": ${json(theme.semanticHighlighting)},`,
    '  "colors": {',
    ...colorEntries.map(colorLine),
    '  },',
    '  "tokenColors": [',
    ...theme.tokenColors.map(tokenLine),
    '  ],',
    '  "semanticTokenColors": {',
    ...semanticEntries.map(semanticLine),
    '  }',
    '}'
  ]

  return `${lines.join('\n')}\n`
}
