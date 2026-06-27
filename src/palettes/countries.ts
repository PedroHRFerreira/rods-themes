import type { ICountryPalette } from '../theme/types.ts'
import { createMixedCountryPalettes } from './mixed-countries.ts'

const basePalette: Pick<ICountryPalette, 'foreground' | 'error' | 'warning' | 'success'> = {
  foreground: '#F8FBFF',
  error: '#FF2D55',
  warning: '#FFD60A',
  success: '#00FF85'
}

const baseCountryPalettes: ICountryPalette[] = [
  { id: 'argentina', label: 'Argentina', name: 'Rods Themes: Argentina Neon Black', primary: '#00B7FF', secondary: '#FFFFFF', tertiary: '#FFD60A', accent: '#7DE2FF', accentAlt: '#B8F7FF', muted: '#6C8CA3', ...basePalette },
  { id: 'spain', label: 'Spain', name: 'Rods Themes: Spain Neon Black', primary: '#FF1744', secondary: '#FFD600', tertiary: '#FF6D00', accent: '#FF3D71', accentAlt: '#FFF176', muted: '#A06A64', ...basePalette },
  { id: 'france', label: 'France', name: 'Rods Themes: France Neon Black', primary: '#2979FF', secondary: '#FFFFFF', tertiary: '#FF1744', accent: '#00B0FF', accentAlt: '#FF6B8A', muted: '#6E83A8', ...basePalette },
  { id: 'england', label: 'England', name: 'Rods Themes: England Neon Black', primary: '#FFFFFF', secondary: '#FF1744', tertiary: '#2979FF', accent: '#FF6B8A', accentAlt: '#7DA8FF', muted: '#8C91A0', ...basePalette },
  { id: 'portugal', label: 'Portugal', name: 'Rods Themes: Portugal Neon Black', primary: '#00FF66', secondary: '#FF1744', tertiary: '#FFD600', accent: '#2DFF9A', accentAlt: '#FF6B8A', muted: '#709B75', ...basePalette },
  { id: 'brazil', label: 'Brazil', name: 'Rods Themes: Brazil Neon Black', primary: '#00FF66', secondary: '#FFD600', tertiary: '#2979FF', accent: '#2DFF9A', accentAlt: '#FFF176', muted: '#729B83', ...basePalette },
  { id: 'morocco', label: 'Morocco', name: 'Rods Themes: Morocco Neon Black', primary: '#FF1744', secondary: '#00E676', tertiary: '#FFD600', accent: '#FF4F6D', accentAlt: '#40FFB0', muted: '#9B706D', ...basePalette },
  { id: 'netherlands', label: 'Netherlands', name: 'Rods Themes: Netherlands Neon Black', primary: '#FF6D00', secondary: '#FFFFFF', tertiary: '#2979FF', accent: '#FF9E40', accentAlt: '#7DA8FF', muted: '#9A806D', ...basePalette },
  { id: 'belgium', label: 'Belgium', name: 'Rods Themes: Belgium Neon Black', primary: '#FFD600', secondary: '#FF1744', tertiary: '#FF6D00', accent: '#FFF176', accentAlt: '#FF6B8A', muted: '#A08B64', ...basePalette },
  { id: 'germany', label: 'Germany', name: 'Rods Themes: Germany Neon Black', primary: '#FFD600', secondary: '#FF1744', tertiary: '#FFFFFF', accent: '#FFF176', accentAlt: '#FF6B8A', muted: '#9B8A75', ...basePalette }
]

export const countryPalettes: ICountryPalette[] = [
  ...baseCountryPalettes,
  ...createMixedCountryPalettes(baseCountryPalettes)
]
