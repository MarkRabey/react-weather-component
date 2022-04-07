export interface Theme {
  name: string;
  fontFamily: string;
  containerStyles: ContainerStyles;
}

export interface ContainerStyles {
  border: string;
}

import light from './light';
import dark from './dark';
