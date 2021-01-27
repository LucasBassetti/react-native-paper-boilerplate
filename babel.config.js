module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@constants': './src/constants',
            '@hooks': './src/hooks',
            '@layout': './src/layout',
            '@navigation': './src/navigation',
            '@providers': './src/providers',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
