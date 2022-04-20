const path = require('path');

module.exports = {
  core: {builder: 'webpack5'},
  stories: [
    '../src/__stories__/Installation.stories.mdx',
    '../src/**/*.stories.@(js|mdx|ts|tsx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  webpackFinal: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
    };
    config.resolve.extensions = [
      '.web.jsx',
      '.web.tsx',
      '.web.js',
      '.web.ts',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
    ];

    config.module.rules.push({
      test: /(@?react-(navigation|native)).*\.(ts|js)x?$/,
      exclude: [/react-native-web/, /\.(native|ios|android)\.(ts|js)x?$/],
      loader: 'babel-loader',
      options: {
        presets: [
          [
            require.resolve('babel-preset-react-app/dependencies'),
            {helpers: true},
          ],
          ['babel-preset-react-app'],
        ],
      },
    });
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: prop =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
  },
};
