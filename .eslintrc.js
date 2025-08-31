module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react-native/no-color-literals': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/naming-convention': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
