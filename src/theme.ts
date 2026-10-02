import materialTheme from '../material-theme.json';

export type SchemeKey = 
  | 'primary'
  | 'surfaceTint'
  | 'onPrimary'
  | 'primaryContainer'
  | 'onPrimaryContainer'
  | 'secondary'
  | 'onSecondary'
  | 'secondaryContainer'
  | 'onSecondaryContainer'
  | 'tertiary'
  | 'onTertiary'
  | 'tertiaryContainer'
  | 'onTertiaryContainer'
  | 'error'
  | 'onError'
  | 'errorContainer'
  | 'onErrorContainer'
  | 'background'
  | 'onBackground'
  | 'surface'
  | 'onSurface'
  | 'surfaceVariant'
  | 'onSurfaceVariant'
  | 'outline'
  | 'outlineVariant'
  | 'shadow'
  | 'scrim'
  | 'inverseSurface'
  | 'inverseOnSurface'
  | 'inversePrimary'
  | 'primaryFixed'
  | 'onPrimaryFixed'
  | 'primaryFixedDim'
  | 'onPrimaryFixedVariant'
  | 'secondaryFixed'
  | 'onSecondaryFixed'
  | 'secondaryFixedDim'
  | 'onSecondaryFixedVariant'
  | 'tertiaryFixed'
  | 'onTertiaryFixed'
  | 'tertiaryFixedDim'
  | 'onTertiaryFixedVariant'
  | 'surfaceDim'
  | 'surfaceBright'
  | 'surfaceContainerLowest'
  | 'surfaceContainerLow'
  | 'surfaceContainer'
  | 'surfaceContainerHigh'
  | 'surfaceContainerHighest';

export const materialThemeConfig = materialTheme;

export const lightScheme = materialTheme.schemes.light as Record<SchemeKey, string>;
export const darkScheme = materialTheme.schemes.dark as Record<SchemeKey, string>;
export const coreColors = materialTheme.coreColors;
export const palettes = materialTheme.palettes;

export default materialTheme;
