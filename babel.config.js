module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins: [['@babel/plugin-proposal-class-properties', {legacy: true}]],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
      },
    ],
    'jest-hoist',
  ],
};
