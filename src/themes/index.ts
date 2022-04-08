import {StyleProp, ColorValue, ViewStyle, TextStyle} from 'react-native';
import {themeToStyleSheet} from './themeToStyleSheet';

export const defaultStyles = themeToStyleSheet();

export interface WeatherStyles {
  container: StyleProp<ViewStyle>;
  heading: StyleProp<TextStyle>;
  details: StyleProp<TextStyle>;
}
export interface Theme {
  name: string;
  containerStyles?: ViewStyle;
  headingStyles?: ThemeTextStyle;
  detailStyles?: ThemeTextStyle;
}

interface ThemeTextStyle extends MarginStyle {
  color?: ColorValue;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  fontFamily?: string | undefined;
  fontSize?: number | undefined;
  fontStyle?: 'normal' | 'italic' | undefined;
}

interface MarginStyle {
  margin?: number | string | undefined;
  marginBottom?: number | string | undefined;
  marginEnd?: number | string | undefined;
  marginHorizontal?: number | string | undefined;
  marginLeft?: number | string | undefined;
  marginRight?: number | string | undefined;
  marginStart?: number | string | undefined;
  marginTop?: number | string | undefined;
}
