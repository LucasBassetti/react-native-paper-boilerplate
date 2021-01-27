module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};

// module.exports = {
//   env: {
//     es6: true,
//   },
//   extends: ['airbnb', 'prettier', 'prettier/react'],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//     __DEV__: 'readonly',
//   },
//   parser: 'babel-eslint',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 11,
//     sourceType: 'module',
//   },
//   plugins: ['react', 'prettier'],
//   rules: {
//     'prettier/prettier': 'error',
//     'react/jsx-filename-extension': [
//       'warn',
//       {
//         extensions: ['.tsx', '.ts'],
//       },
//     ],
//     'import/prefer-default-export': 'off',
//     'react/state-in-constructor': 'off',
//     'react/static-property-placement': 'off',
//     'react/jsx-props-no-spreading': 'off',
//     'react/prop-types': 'off',
//     'no-param-reassign': 'off',
//     'no-console': 'off',
//   },
// };
