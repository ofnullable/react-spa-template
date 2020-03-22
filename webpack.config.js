import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { resolve } from 'dns'

const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

const loaders = {
  babel: {
    loader: 'babel-loader',
    options: {
      compact: false,
      cacheDirectory: !prod,
    },
  },
  html: {
    loader: 'html-loader',
    options: { minimize: true },
  },
  style: [
    prod ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'postcss-loader',
    'sass-loader',
  ],
}

module.exports = {
  mode,
  devtool: prod ? 'hidden-source-map' : false,
  entry: {
    app: resolve(__dirname, 'src/index.js'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
        use: [loaders.babel],
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: loaders.style,
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: [{ loader: 'url-loader', options: { limit: 8192 } }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      filename: './index.html',
      scriptLoading: 'defer',
      hash: true,
    }),
    ...(isProd
      ? [new MiniCssExtractPlugin({ filename: '[name].css?[hash]' })]
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
    filename: '[name].js?[hash]',
    chunkFilename: '[name].[id].js?[hash]',
  },
}
