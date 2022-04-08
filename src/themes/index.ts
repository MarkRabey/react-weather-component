import {StyleProp, ColorValue, ViewStyle, TextStyle} from 'react-native';
export interface WeatherStyles {
  container: StyleProp<ViewStyle>;
  inner: StyleProp<ViewStyle>;
  headingContainer: StyleProp<ViewStyle>;
  heading: StyleProp<TextStyle>;
  subheading: StyleProp<TextStyle>;
  details: StyleProp<TextStyle>;
  detailsContainer: StyleProp<ViewStyle>;
}
export interface Theme {
  name: string;
  containerStyles?: ViewStyle;
  headingStyles?: ThemeTextStyle;
  subheadingStyles?: TextStyle;
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

export const brandColors = {
  white: '#ffffff',
  black: '#000000',
  lightText: '#ffffff',
  darkText: '#000000',
  violet: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  coolGray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};
