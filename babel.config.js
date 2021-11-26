module.exports = {
  presets: ['@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: false,
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    [
      '@emotion',
      {
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
  ],
};
