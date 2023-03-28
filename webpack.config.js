const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

const loaders = {
  html: {
    loader: 'html-loader',
  },
  swc: {
    loader: 'swc-loader',
    options: {
      minify: prod,
    },
  },
  style: [prod ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
  url: {
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: 'static/asset/[name]-[hash].[ext]',
    },
  },
  svg: {
    loader: '@svgr/webpack',
  },
};

module.exports = {
  mode: prod ? 'production' : 'development',
  devtool: prod ? false : 'eval-source-map',
  entry: {
    app: resolve(__dirname, 'src/index'),
  },
  resolve: {
    modules: ['node_modules'],
    mainFiles: ['index'],
    extensions: ['.js', '.mjs', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [loaders.html],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [loaders.swc],
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: loaders.style,
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: [loaders.url],
      },
      {
        test: /\.svg$/,
        use: [loaders.svg, loaders.url],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
    ...(prod
      ? [
          new MiniCssExtractPlugin({
            filename: 'static/css/[name].[fullhash:8].css',
            chunkFilename: 'static/css/[name].[fullhash:8].chunk.css',
          }),
        ]
      : []),
  ],
  optimization: {
    minimize: prod,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          safari10: true,
        },
      }),
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'static/js/[name].[fullhash:8].js',
    chunkFilename: 'static/js/[name].[fullhash:8].chunk.js',
  },
};
