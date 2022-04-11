import {Theme} from './types';
import darkTheme from './dark';
import monospaceTheme from './monospace';

const monospaceDarkTheme: Theme = {
  name: 'monospace-dark',
  containerStyles: {
    ...darkTheme.containerStyles,
    ...monospaceTheme.containerStyles,
  },
  headingStyles: {
    ...darkTheme.headingStyles,
    ...monospaceTheme.headingStyles,
  },
  subheadingStyles: {
    ...darkTheme.subheadingStyles,
    ...monospaceTheme.subheadingStyles,
  },
  detailStyles: {...darkTheme.detailStyles, ...monospaceTheme.detailStyles},
};

export default monospaceDarkTheme;
