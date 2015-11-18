const VERSION  = require('./package.json').version;
const IS_NPM   = process.env.IS_NPM;
const path     = IS_NPM ? __dirname : __dirname + '/build/sdk';
const filename = IS_NPM ? 'sdk.js' : 'sdk-' + VERSION + '.js';

module.exports = {
  entry: './index.js',
  output: {
    path: path,
    filename: filename,
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true
      }
    }]
  },
  devServer: {
    contentBase: './examples'
  }
};
