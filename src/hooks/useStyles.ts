import {useColorScheme} from 'react-native';
import {Theme} from '../themes/types';
import {themeToStyleSheet} from '../themes/themeToStyleSheet';
import {SystemTheme, themes} from '../themes';

export const useStyles = (theme?: Theme | SystemTheme) => {
  const colorScheme = useColorScheme();
  let selectedTheme = theme ? theme : themes[colorScheme || 'light'];
  if (typeof selectedTheme === 'string') {
    selectedTheme = themes[selectedTheme];
  }
  return themeToStyleSheet(selectedTheme, colorScheme);
};
