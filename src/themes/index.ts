import brandColors from './brandColors';
import darkTheme from './dark';
import lightTheme from './light';
import monospaceTheme from './monospace';
import monospaceLightTheme from './monospace-light';
import monospaceDarkTheme from './monospace-dark';
export {brandColors};
export const themes = {
  dark: darkTheme,
  light: lightTheme,
  monospace: monospaceTheme,
  'monospace-light': monospaceLightTheme,
  'monospace-dark': monospaceDarkTheme,
};

export type SystemTheme = keyof typeof themes;
