import {create} from '@storybook/theming';

const brandColor = '#a78bfa';

const theme = create({
  base: 'dark',
  brandTitle: 'React Weather Component',
  brandUrl: 'https://markrabey.github.io/react-weather-component',
  brandImage: null,

  colorSecondary: brandColor,
  barSelectedColor: brandColor,
});

export default theme;
