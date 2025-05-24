module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@presentation': './src/presentation',
          '@domain': './src/domain',
          '@data': './src/data',
          '@lib': './src/lib',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
