const reactPlugin = require('eslint-plugin-react');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');
const prettierPlugin = require('eslint-plugin-prettier');
const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');

const config = {
  languageOptions: {
    parser: typescriptEslintParser, // Set the parser here
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
  },
    globals: {
      browser: true,
      shallow: true,
      mount: true,
    },
  },
  plugins: {
    react: reactPlugin,
    'react-refresh': reactRefreshPlugin,
    '@typescript-eslint': typescriptEslintPlugin,
    prettier: prettierPlugin,
},
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'max-len': ['error', 100],
    'comma-dangle': 2,
    'no-cond-assign': 2,
    'no-console': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'valid-typeof': 2,
    'no-undef': 2,
    'no-undefined': 0,
    'no-unused-vars': 1,
    'array-bracket-spacing': 1,
    'comma-spacing': 1,
    'comma-style': 1,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-quotes': 1,
    'key-spacing': 1,
    'keyword-spacing': 1,
    'linebreak-style': 1,
    'lines-around-comment': 1,
    'new-cap': 1,
    'object-curly-spacing': 0,
    semi: ['error'],
    quotes: [2, 'single'],
    "react-refresh/only-export-components": ["error", {
      "allowConstantExport": true,
      "checkJS": false,
      "allowExportNames": []
    }],
    // Rules for React
    'react/display-name': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-sort-props': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-unknown-property': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/sort-prop-types': 1,
  },
};

module.exports = config;