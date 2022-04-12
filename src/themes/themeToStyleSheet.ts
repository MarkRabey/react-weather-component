import {StyleSheet, ColorSchemeName} from 'react-native';
import merge from 'lodash.merge';

import brandColors from './brandColors';
import {Theme, WeatherStyles} from './types';
import defaultTheme from './default';

export const themeToStyleSheet = (
  theme: Theme | undefined,
  colorScheme: ColorSchemeName,
) => {
  const combinedTheme = theme
    ? merge(defaultTheme[colorScheme || 'light'], theme)
    : defaultTheme[colorScheme || 'light'];
  const styles: WeatherStyles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 2,
      borderRadius: 4,
      padding: 12,
      ...combinedTheme.containerStyles,
    },
    inner: {
      // flexDirection: 'row',
      // flexWrap: 'wrap',
    },
    headingContainer: {
      flex: 1,
      marginBottom: 6,
    },
    heading: {
      fontFamily: 'sans-serif',
      fontSize: 24,
      fontWeight: 'bold',
      ...combinedTheme.headingStyles,
    },
    subheading: {
      fontSize: 12,
      ...combinedTheme.subheadingStyles,
    },
    detailsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: -8,
    },
    details: {
      color: brandColors.violet[500],
      fontSize: 12,
      ...combinedTheme.detailStyles,
    },
  });
  return styles;
};
