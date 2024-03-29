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
