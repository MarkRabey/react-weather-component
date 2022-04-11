import {Theme} from './types';
import lightTheme from './light';
import monospaceTheme from './monospace';

const monospaceLightTheme: Theme = {
  name: 'monospace-light',
  containerStyles: {
    ...lightTheme.containerStyles,
    ...monospaceTheme.containerStyles,
  },
  headingStyles: {
    ...lightTheme.headingStyles,
    ...monospaceTheme.headingStyles,
  },
  subheadingStyles: {
    ...lightTheme.subheadingStyles,
    ...monospaceTheme.subheadingStyles,
  },
  detailStyles: {...lightTheme.detailStyles, ...monospaceTheme.detailStyles},
};

export default monospaceLightTheme;
