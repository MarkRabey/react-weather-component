import pkg from '../package.json';

import theme from './theme';

const [major, minor, patch] = pkg.version.split('.');

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
