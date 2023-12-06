const { join } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaderConfigs = {
  babel: [{
    loader: 'babel-loader',
  }],
  miniCSSExtract: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {sourceMap: true}
    },
    {
      loader: "postcss-loader",
      options: {sourceMap: true}
    },
    {
      loader: "sass-loader",
      options: {sourceMap: true}
    }
  ]
}

const pluginConfigs = {
    miniCSSExtract: {
      filename: 'interactiveposts.css' // this is what actually get served after sass is compiled
    },
}

// main export configs
// -------------------

// eslint-disable-next-line prefer-object-spread
const admin = {
  context: __dirname,

  entry: [
    'regenerator-runtime/runtime', // is needed for async/await
    `./index.js`,
  ],

  output: {
    path: join(__dirname),
    filename: 'interactiveposts.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: loaderConfigs.babel
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: loaderConfigs.miniCSSExtract
      }
    ]
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    new MiniCssExtractPlugin(pluginConfigs.miniCSSExtract),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}) // we only want to produce 1 bundle.js file
  ]
};


// main export
// -----------

module.exports = [admin];
