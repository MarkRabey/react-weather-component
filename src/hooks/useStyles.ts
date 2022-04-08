import {ColorSchemeName} from 'react-native';
import {Theme, WeatherStyles} from '../themes';
import {themeToStyleSheet} from '../themes/themeToStyleSheet';

interface UseStyleArgs {
  theme?: Theme;
  colorScheme?: ColorSchemeName;
}
export const useStyles = (args?: UseStyleArgs) =>
  themeToStyleSheet(args?.theme, args?.colorScheme);
