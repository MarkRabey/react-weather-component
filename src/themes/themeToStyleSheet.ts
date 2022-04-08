import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import merge from 'lodash.merge';

import {Theme, WeatherStyles} from '.';
import defaultTheme from './default';

export const themeToStyleSheet = (theme?: Theme) => {
  const combinedTheme = theme ? merge(theme, defaultTheme) : defaultTheme;
  const styles: WeatherStyles = StyleSheet.create({
    container: {
      flex: 1,
      ...combinedTheme.containerStyles,
    },
    heading: {
      ...combinedTheme.headingStyles,
    },
    details: {
      ...combinedTheme.detailStyles,
    },
  });
  return styles;
};
