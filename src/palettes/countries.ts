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
  { id: 'germany', label: 'Germany', name: 'Rods Themes: Germany Neon Black', primary: '#FFD600', secondary: '#FF1744', tertiary: '#FFFFFF', accent: '#FFF176', accentAlt: '#FF6B8A', muted: '#9B8A75', ...basePalette },
  { id: 'jamaica', label: 'Jamaica', name: 'Rods Themes: Jamaica Neon Black', primary: '#00FF66', secondary: '#FFD600', tertiary: '#28F7FF', accent: '#8CFF3D', accentAlt: '#FFF176', muted: '#6F9A72', ...basePalette },
  { id: 'senegal', label: 'Senegal', name: 'Rods Themes: Senegal Neon Black', primary: '#00E676', secondary: '#FFD600', tertiary: '#FF3D55', accent: '#40FFB0', accentAlt: '#FFF176', muted: '#7D9470', ...basePalette },
  { id: 'cabo-verde', label: 'Cabo Verde', name: 'Rods Themes: Cabo Verde Neon Black', primary: '#00B7FF', secondary: '#FFFFFF', tertiary: '#FF3D55', accent: '#28F7FF', accentAlt: '#FFD600', muted: '#6E8EA8', ...basePalette },
  { id: 'south-korea', label: 'South Korea', name: 'Rods Themes: South Korea Neon Black', primary: '#2979FF', secondary: '#FF1744', tertiary: '#FFFFFF', accent: '#00B0FF', accentAlt: '#FF6B8A', muted: '#747F9F', ...basePalette },
  { id: 'colombia', label: 'Colombia', name: 'Rods Themes: Colombia Neon Black', primary: '#FFD600', secondary: '#2979FF', tertiary: '#FF1744', accent: '#FFF176', accentAlt: '#7DA8FF', muted: '#9B8F70', ...basePalette },
  { id: 'japan', label: 'Japan', name: 'Rods Themes: Japan Neon Black', primary: '#FFFFFF', secondary: '#FF1744', tertiary: '#FF6B8A', accent: '#F8FBFF', accentAlt: '#FF4F6D', muted: '#9A7D84', ...basePalette },
  { id: 'mexico', label: 'Mexico', name: 'Rods Themes: Mexico Neon Black', primary: '#00E676', secondary: '#FFFFFF', tertiary: '#FF1744', accent: '#40FFB0', accentAlt: '#FF6B8A', muted: '#719687', ...basePalette },
  { id: 'uruguay', label: 'Uruguay', name: 'Rods Themes: Uruguay Neon Black', primary: '#00B7FF', secondary: '#FFFFFF', tertiary: '#FFD600', accent: '#7DE2FF', accentAlt: '#FFF176', muted: '#6E8EA8', ...basePalette },
  { id: 'croatia', label: 'Croatia', name: 'Rods Themes: Croatia Neon Black', primary: '#FF1744', secondary: '#FFFFFF', tertiary: '#2979FF', accent: '#FF6B8A', accentAlt: '#7DA8FF', muted: '#817F98', ...basePalette },
  { id: 'united-states', label: 'United States', name: 'Rods Themes: United States Neon Black', primary: '#FF1744', secondary: '#FFFFFF', tertiary: '#2979FF', accent: '#FF6B8A', accentAlt: '#7DA8FF', muted: '#817F98', ...basePalette },
  { id: 'jamaica-south-korea', label: 'Jamaica South Korea', name: 'Rods Themes: Jamaica South Korea Neon Black', primary: '#00FF66', secondary: '#2979FF', tertiary: '#FF1744', accent: '#28F7FF', accentAlt: '#FFF176', muted: '#6F8F90', ...basePalette },
  { id: 'senegal-netherlands', label: 'Senegal Netherlands', name: 'Rods Themes: Senegal Netherlands Neon Black', primary: '#00E676', secondary: '#FF6D00', tertiary: '#FFD600', accent: '#40FFB0', accentAlt: '#FF9E40', muted: '#85866D', ...basePalette },
  { id: 'cabo-verde-brazil', label: 'Cabo Verde Brazil', name: 'Rods Themes: Cabo Verde Brazil Neon Black', primary: '#00B7FF', secondary: '#00FF66', tertiary: '#FFD600', accent: '#28F7FF', accentAlt: '#2DFF9A', muted: '#6B9896', ...basePalette },
  { id: 'colombia-france', label: 'Colombia France', name: 'Rods Themes: Colombia France Neon Black', primary: '#FFD600', secondary: '#2979FF', tertiary: '#FF1744', accent: '#7DE2FF', accentAlt: '#FFF176', muted: '#858AA0', ...basePalette },
  { id: 'morocco-portugal', label: 'Morocco Portugal', name: 'Rods Themes: Morocco Portugal Neon Black', primary: '#FF1744', secondary: '#00FF66', tertiary: '#FFD600', accent: '#FF6B8A', accentAlt: '#2DFF9A', muted: '#8C806F', ...basePalette }
]

export const countryPalettes: ICountryPalette[] = [
  ...baseCountryPalettes,
  ...createMixedCountryPalettes(baseCountryPalettes)
]
