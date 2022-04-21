import {version} from '../package.json';
const [major, minor, patch] = version.split('.');

export const parameters = {
  controls: {expanded: true},
  viewMode: 'docs',
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
