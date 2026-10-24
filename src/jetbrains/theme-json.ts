import { selectionColor } from '../theme/colors.ts'
import type { IThemePalette } from '../theme/types.ts'
import type { IPackageManifest } from './types.ts'

const createUiColors = (palette: IThemePalette) => ({
  '*.background': palette.surfaces.panel,
  '*.foreground': palette.foreground,
  '*.selectionBackground': selectionColor(palette),
  '*.selectionForeground': palette.foreground,
  '*.separatorColor': palette.surfaces.border,
  '*.focusColor': palette.primary,
  'Button.background': palette.primary,
  'Button.foreground': '#000000',
  'Button.hoverBackground': palette.accent,
  'ComboBox.background': palette.surfaces.input,
  'Component.borderColor': palette.primary,
  'EditorTabs.background': palette.surfaces.chrome,
  'EditorTabs.selectedBackground': palette.surfaces.editor,
  'MainToolbar.background': palette.surfaces.chrome,
  'StatusBar.background': palette.surfaces.chrome,
  'EditorTabs.underlinedTabForeground': palette.secondary,
  'EditorTabs.inactiveForeground': palette.muted,
  'Label.foreground': palette.foreground,
  'Link.activeForeground': palette.accent,
  'Link.hoverForeground': palette.accentAlt,
  'List.background': palette.surfaces.panel,
  'List.foreground': palette.foreground,
  'List.selectionBackground': `${palette.primary}33`,
  'List.selectionForeground': palette.foreground,
  'Menu.background': palette.surfaces.panel,
  'Menu.foreground': palette.foreground,
  'Panel.background': palette.surfaces.panel,
  'Plugins.SectionHeader.background': palette.surfaces.panel,
  'Popup.Advertiser.background': palette.surfaces.panel,
  'Popup.Header.activeBackground': palette.surfaces.chrome,
  'Popup.Header.inactiveBackground': palette.surfaces.chrome,
  'ScrollBar.Mac.Transparent.hoverThumbColor': `${palette.primary}99`,
  'Separator.foreground': palette.surfaces.border,
  'SidePanel.background': palette.surfaces.panel,
  'TabbedPane.selectedTabTitleForeground': palette.secondary,
  'TextField.background': palette.surfaces.input,
  'TextField.foreground': palette.foreground,
  'ToolWindow.background': palette.surfaces.panel,
  'Tree.background': palette.surfaces.panel,
  'Tree.foreground': palette.foreground,
  'Tree.selectionBackground': `${palette.primary}33`,
  'Tree.selectionForeground': palette.foreground,
  'VersionControl.FileHistory.Commit.selectedBranchBackground': `${palette.primary}33`
})

export const createThemeJson = (
  packageJson: IPackageManifest,
  palette: IThemePalette
) =>
  `${JSON.stringify(
    {
      name: palette.name,
      dark: true,
      author: packageJson.author?.name ?? 'PedroHRFerreira',
      editorScheme: `/colorSchemes/${palette.id}.xml`,
      colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        tertiary: palette.tertiary,
        accent: palette.accent,
        foreground: palette.foreground,
        background: palette.surfaces.editor
      },
      ui: createUiColors(palette)
    },
    null
  )}\n`
