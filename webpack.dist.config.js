const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');

config.entry = './src/Weather.jsx';
config.output = {
  path: path.join(__dirname, './dist'),
  filename: 'Weather.js',
  library: 'Weather',
  libraryTarget: 'commonjs2',
};
config.externals = {
  react: 'react',
};
config.target = 'node';
config.plugins = [
  new ExtractTextPlugin({ filename:'Weather.css', allChunks: true }),
];

module.exports = config;
