export interface Theme {
  name: string;
  fontFamily: string;
  containerStyles: ContainerStyles;
}

export interface ContainerStyles {
  border: string;
}

import defaultTheme from './default';
import light from './light';
import dark from './dark';

export default {
  [defaultTheme.name]: defaultTheme,
  [light.name]: light,
  [dark.name]: dark,
};
