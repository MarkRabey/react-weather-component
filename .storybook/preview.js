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
  issues: {
    repository: process.env.GITHUB_REPO,
    token: process.env.GITHUB_TOKEN,
  },
};
