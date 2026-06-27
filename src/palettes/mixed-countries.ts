import type { ICountryPalette } from '../theme/types.ts'

interface IMixedCountryPair {
  firstId: string
  secondId: string
}

export const mixedCountryPairs: IMixedCountryPair[] = [
  { firstId: 'argentina', secondId: 'morocco' },
  { firstId: 'brazil', secondId: 'france' },
  { firstId: 'spain', secondId: 'portugal' },
  { firstId: 'england', secondId: 'netherlands' },
  { firstId: 'belgium', secondId: 'germany' }
]

const getPairKey = (pair: IMixedCountryPair) => [pair.firstId, pair.secondId].sort().join('+')

const assertUniquePairs = (pairs: IMixedCountryPair[]) => {
  const keys = new Set<string>()
  const countryIds = new Set<string>()

  pairs.forEach((pair) => {
    if (pair.firstId === pair.secondId) {
      throw new Error(`Mixed country pair cannot repeat ${pair.firstId}.`)
    }

    const key = getPairKey(pair)

    if (keys.has(key)) {
      throw new Error(`Mixed country pair already exists: ${key}.`)
    }

    if (countryIds.has(pair.firstId)) {
      throw new Error(`Country already used in a mixed pair: ${pair.firstId}.`)
    }

    if (countryIds.has(pair.secondId)) {
      throw new Error(`Country already used in a mixed pair: ${pair.secondId}.`)
    }

    keys.add(key)
    countryIds.add(pair.firstId)
    countryIds.add(pair.secondId)
  })
}

const getPaletteById = (palettes: ICountryPalette[], id: string) => {
  const palette = palettes.find((item) => item.id === id)

  if (!palette) {
    throw new Error(`Country palette not found: ${id}.`)
  }

  return palette
}

const createMixedPalette = (
  palettes: ICountryPalette[],
  pair: IMixedCountryPair
): ICountryPalette => {
  const first = getPaletteById(palettes, pair.firstId)
  const second = getPaletteById(palettes, pair.secondId)

  return {
    id: `${first.id}-${second.id}`,
    label: `${first.label} + ${second.label}`,
    name: `Rods Themes: ${first.label} + ${second.label} Neon Black`,
    primary: first.primary,
    secondary: second.primary,
    tertiary: second.secondary,
    accent: first.accent,
    accentAlt: second.accent,
    muted: first.muted,
    foreground: first.foreground,
    error: first.error,
    warning: first.warning,
    success: first.success
  }
}

export const createMixedCountryPalettes = (palettes: ICountryPalette[]) => {
  assertUniquePairs(mixedCountryPairs)
  return mixedCountryPairs.map((pair) => createMixedPalette(palettes, pair))
}
