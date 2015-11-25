var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      "app", "node_modules"
    ]
  },
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?module&localIdentName=[local]__[hash:base64:5]!autoprefixer-loader'
      },
    ]
  }
};
