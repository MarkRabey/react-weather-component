import {Theme} from '../../../themes/types';
import {fontControl} from '../../../utils/storybook';
import customTheme from './customTheme';

const containerStylesControls = {
  'theme.containerStyles.backgroundColor': {
    defaultValue: customTheme.containerStyles?.backgroundColor,
    control: {
      type: 'color',
    },
    table: {
      category: 'theme.containerStyles',
    },
  },
  'theme.containerStyles.borderColor': {
    defaultValue: customTheme.containerStyles?.borderColor,
    control: {
      type: 'color',
    },
    table: {
      category: 'theme.containerStyles',
    },
  },
};

const headingStylesControls = {
  'theme.headingStyles.color': {
    defaultValue: customTheme.headingStyles?.color,
    control: {
      type: 'color',
    },
    table: {
      category: 'theme.headingStyles',
    },
  },
  'theme.headingStyles.fontFamily': {
    ...fontControl,
    table: {
      category: 'theme.headingStyles',
    },
  },
};

const subheadingStylesControls = {
  'theme.subheadingStyles.color': {
    defaultValue: customTheme.subheadingStyles?.color,
    control: {
      type: 'color',
    },
    table: {
      category: 'theme.subheadingStyles',
    },
  },
  'theme.subheadingStyles.fontFamily': {
    ...fontControl,
    table: {
      category: 'theme.subheadingStyles',
    },
  },
};

const detailStylesControls = {
  'theme.detailStyles.color': {
    defaultValue: customTheme.detailStyles?.color,
    control: {
      type: 'color',
    },
    table: {
      category: 'theme.detailStyles',
    },
  },
  'theme.detailStyles.fontFamily': {
    ...fontControl,
    table: {
      category: 'theme.detailStyles',
    },
  },
};

const customThemeControls = {
  ...containerStylesControls,
  ...headingStylesControls,
  ...subheadingStylesControls,
  ...detailStylesControls,
};

export const argsToTheme = (args: any) => {
  const theme: Theme = {
    name: 'custom-theme',
    containerStyles: {
      ...customTheme.containerStyles,
      backgroundColor: args['theme.containerStyles.backgroundColor'],
      borderColor: args['theme.containerStyles.borderColor'],
    },
    headingStyles: {
      ...customTheme.headingStyles,
      color: args['theme.headingStyles.color'],
      fontFamily: args['theme.headingStyles.fontFamily'],
    },
    subheadingStyles: {
      ...customTheme.subheadingStyles,
      color: args['theme.subheadingStyles.color'],
      fontFamily: args['theme.subheadingStyles.fontFamily'],
    },
    detailStyles: {
      ...customTheme.detailStyles,
      color: args['theme.detailStyles.color'],
      fontFamily: args['theme.detailStyles.fontFamily'],
    },
  };
  return theme;
};

export default customThemeControls;
