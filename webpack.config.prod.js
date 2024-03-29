var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, "app"),
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      "app", "node_modules"
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?module&localIdentName=[local]__[hash:base64:5]!autoprefixer-loader!sass?includePaths[]='
                + encodeURIComponent(path.resolve(__dirname, './app/scss'))
    }
    ]
  }
};
