import {useColorScheme} from 'react-native';
import {Theme} from '../themes/types';
import {themeToStyleSheet} from '../themes/themeToStyleSheet';
import {themes} from '../themes';

interface UseStyleArgs {
  theme?: Theme | 'dark' | 'light';
}
export const useStyles = (args?: UseStyleArgs) => {
  const colorScheme = useColorScheme();
  let theme = args?.theme;
  if (!theme) {
    theme = themes[colorScheme || 'light'];
  }

  if (theme && (theme === 'dark' || theme === 'light')) {
    theme = themes[theme];
  }

  return themeToStyleSheet(theme, colorScheme);
};
