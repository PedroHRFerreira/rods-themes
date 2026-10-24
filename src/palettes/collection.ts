import type { IThemePalette, IThemeSurfaces } from '../theme/types.ts'

const black: IThemeSurfaces = {
  editor: '#000000', panel: '#000000', chrome: '#000000',
  input: '#050505', border: '#222222', lineHighlight: '#101010'
}

const status = { foreground: '#F8FBFF', error: '#FF2D55', warning: '#FFD60A', success: '#00FF85' }

export const themePalettes: IThemePalette[] = [
  {
    id: 'black-neon', label: 'Black Neon', name: 'Rods Black Neon',
    ...status, primary: '#00B7FF', secondary: '#FFFFFF', tertiary: '#FFD60A',
    accent: '#7DE2FF', accentAlt: '#B8F7FF', muted: '#6C8CA3', surfaces: black
  },
  {
    id: 'black-emerald', label: 'Black Emerald', name: 'Rods Black Emerald',
    ...status, primary: '#00FF66', secondary: '#FFD600', tertiary: '#2979FF',
    accent: '#2DFF9A', accentAlt: '#FFF176', muted: '#729B83', surfaces: black
  },
  {
    id: 'black-ember', label: 'Black Ember', name: 'Rods Black Ember',
    ...status, primary: '#FF1744', secondary: '#FFD600', tertiary: '#FF6D00',
    accent: '#FF3D71', accentAlt: '#FFF176', muted: '#A06A64', surfaces: black
  },
  {
    id: 'dark-graphite', label: 'Dark Graphite', name: 'Rods Dark Graphite',
    foreground: '#BCBEC4', primary: '#FF8F40', secondary: '#A9DC76', tertiary: '#AB9DF2',
    accent: '#78DCE8', accentAlt: '#FFD866', muted: '#7E8993',
    error: '#FF6188', warning: '#FFD866', success: '#A9DC76',
    surfaces: {
      editor: '#0D1117', panel: '#202127', chrome: '#303136',
      input: '#27292F', border: '#3C3F46', lineHighlight: '#191E25'
    }
  },
  {
    id: 'dark-midnight', label: 'Dark Midnight', name: 'Rods Dark Midnight',
    foreground: '#C8D3F5', primary: '#82AAFF', secondary: '#C3E88D', tertiary: '#C792EA',
    accent: '#89DDFF', accentAlt: '#FFCB6B', muted: '#828BB8',
    error: '#FF757F', warning: '#FFCB6B', success: '#C3E88D',
    surfaces: {
      editor: '#161B26', panel: '#1E2433', chrome: '#282F40',
      input: '#242C3D', border: '#3B4560', lineHighlight: '#222B3D'
    }
  }
]
