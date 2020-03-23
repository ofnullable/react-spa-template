module.exports = {
  plugins: [
    require('postcss-fixes')({
      preset: 'safe',
    }),
    require('postcss-preset-env'),
    require('cssnano')({
      safe: true,
      calc: false,
    }),
  ],
};
