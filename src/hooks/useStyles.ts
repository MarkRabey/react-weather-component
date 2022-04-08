import {defaultStyles, Theme} from '../themes';
import {themeToStyleSheet} from '../themes/themeToStyleSheet';

export const useStyles = (theme?: Theme) => {
  if (theme) {
    return themeToStyleSheet(theme);
  }

  return defaultStyles;
};
