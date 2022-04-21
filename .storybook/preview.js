import {version} from '../package.json';

import theme from './theme';

const [major, minor, patch] = version.split('.');

console.log({theme});

export const parameters = {
  controls: {expanded: true},
  viewMode: 'docs',
  docs: {
    theme,
  },
  previewTabs: {
    canvas: {hidden: true},
  },
  version: {
    major,
    minor,
    patch,
  },
  backgrounds: {
    disable: true,
    grid: {disable: true},
    outlines: {disable: true},
  },
  layout: 'centered',
};
