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
          '@infra': './src/infra',
          '@shared': './src/shared'
        }
      }
    ]
  ]
};
