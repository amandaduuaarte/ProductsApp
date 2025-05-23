    module.exports = {
      root: true,
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/recommended',
        'airbnb',
        'prettier',
      ],
      plugins: ['react', 'react-native', 'prettier'],
      rules: {
        'prettier/prettier': 'error',
        'react/tsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'react/prop-types': 'off',
        'no-use-before-define': 'off',
        'react-native/no-inline-styles': 'off',
      },
      env: {
        'react-native/react-native': true,
      },
    };
