var path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  plugins:[
     new CompressionPlugin({
      filename: '[path].br[query]',
      algorithm: 'gzip',
      test: /\.js(\?.*)?$/i,
      threshold: 10240,
      minRatio: 0.8
    })    
],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};