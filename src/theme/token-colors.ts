import type { ICountryPalette, ITextMateRule } from './types.ts'

export const createTokenColors = (palette: ICountryPalette): ITextMateRule[] => [
  { name: 'Comment', scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: palette.muted, fontStyle: 'italic' } },
  { name: 'Keyword', scope: ['keyword', 'storage.type', 'storage.modifier'], settings: { foreground: palette.primary } },
  { name: 'Function', scope: ['entity.name.function', 'support.function'], settings: { foreground: palette.accent } },
  { name: 'Method', scope: ['entity.name.function.member', 'meta.method'], settings: { foreground: palette.accentAlt } },
  { name: 'Variable', scope: ['variable', 'meta.definition.variable'], settings: { foreground: palette.foreground } },
  { name: 'Parameter', scope: ['variable.parameter', 'meta.parameter'], settings: { foreground: palette.secondary } },
  { name: 'Type', scope: ['entity.name.type', 'support.type', 'entity.name.class'], settings: { foreground: palette.tertiary } },
  { name: 'Interface', scope: ['entity.name.type.interface'], settings: { foreground: palette.tertiary, fontStyle: 'italic' } },
  { name: 'String', scope: ['string', 'constant.other.symbol'], settings: { foreground: palette.secondary } },
  { name: 'Number', scope: ['constant.numeric', 'constant.language.boolean'], settings: { foreground: palette.tertiary } },
  { name: 'Property', scope: ['variable.other.property', 'support.variable.property'], settings: { foreground: palette.accentAlt } },
  { name: 'Operator', scope: ['keyword.operator', 'punctuation.accessor'], settings: { foreground: palette.primary } },
  { name: 'Tag', scope: ['entity.name.tag', 'entity.other.attribute-name'], settings: { foreground: palette.primary } },
  { name: 'Invalid', scope: ['invalid', 'invalid.illegal'], settings: { foreground: palette.error, fontStyle: 'bold' } }
]
