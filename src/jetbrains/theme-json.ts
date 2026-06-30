import type { ICountryPalette } from '../theme/types.ts'
import type { IPackageManifest } from './types.ts'

const createUiColors = (palette: ICountryPalette) => ({
  '*.background': '#000000',
  '*.foreground': palette.foreground,
  '*.selectionBackground': `${palette.primary}44`,
  '*.selectionForeground': palette.foreground,
  '*.separatorColor': '#222222',
  '*.focusColor': palette.primary,
  'Button.background': palette.primary,
  'Button.foreground': '#000000',
  'Button.hoverBackground': palette.accent,
  'ComboBox.background': '#050505',
  'Component.borderColor': palette.primary,
  'EditorTabs.background': '#000000',
  'EditorTabs.underlinedTabForeground': palette.secondary,
  'EditorTabs.inactiveForeground': palette.muted,
  'Label.foreground': palette.foreground,
  'Link.activeForeground': palette.accent,
  'Link.hoverForeground': palette.accentAlt,
  'List.background': '#000000',
  'List.foreground': palette.foreground,
  'List.selectionBackground': `${palette.primary}33`,
  'List.selectionForeground': palette.foreground,
  'Menu.background': '#000000',
  'Menu.foreground': palette.foreground,
  'Panel.background': '#000000',
  'Plugins.SectionHeader.background': '#000000',
  'Popup.Advertiser.background': '#000000',
  'Popup.Header.activeBackground': '#050505',
  'Popup.Header.inactiveBackground': '#000000',
  'ScrollBar.Mac.Transparent.hoverThumbColor': `${palette.primary}99`,
  'Separator.foreground': '#222222',
  'SidePanel.background': '#000000',
  'TabbedPane.selectedTabTitleForeground': palette.secondary,
  'TextField.background': '#050505',
  'TextField.foreground': palette.foreground,
  'ToolWindow.background': '#000000',
  'Tree.background': '#000000',
  'Tree.foreground': palette.foreground,
  'Tree.selectionBackground': `${palette.primary}33`,
  'Tree.selectionForeground': palette.foreground,
  'VersionControl.FileHistory.Commit.selectedBranchBackground': `${palette.primary}33`
})

export const createThemeJson = (
  packageJson: IPackageManifest,
  palette: ICountryPalette
) =>
  `${JSON.stringify(
    {
      name: palette.name,
      dark: true,
      author: packageJson.author?.name ?? 'PedroHRFerreira',
      editorScheme: `/colorSchemes/${palette.id}-neon-black.xml`,
      colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        tertiary: palette.tertiary,
        accent: palette.accent,
        foreground: palette.foreground,
        background: '#000000'
      },
      ui: createUiColors(palette)
    },
    null,
    2
  )}\n`
