import {addons} from '@storybook/addons';
import {create} from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'React Weather Component',
  brandUrl: 'https://markrabey.github.io/react-weather-component',
});

addons.setConfig({
  theme,
  toolbar: {
    zoom: {hidden: true},
    fullscreen: {hidden: true},
  },
});
