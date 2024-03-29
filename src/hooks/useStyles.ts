import {useColorScheme} from 'react-native';
import {Theme} from '../themes/types';
import {themeToStyleSheet} from '../themes/themeToStyleSheet';
import {SystemTheme, themes} from '../themes';

export const useStyles = (theme?: Theme | SystemTheme) => {
  const colorScheme = useColorScheme();
  let selectedTheme: Theme;
  if (theme) {
    selectedTheme = typeof theme === 'string' ? themes[theme] : theme;
  } else {
    selectedTheme = themes[colorScheme || 'light'];
  }

  const styles = themeToStyleSheet(selectedTheme, colorScheme);
  return {styles, selectedTheme};
};
