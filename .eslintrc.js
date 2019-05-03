'use strict'

const isProduction = (process.env.NODE_ENV === 'production')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'no-alert': isProduction ? 'error' : 'off',
    'no-console': isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'space-before-function-paren': ['warn', 'always'],
    'nuxt/no-env-in-hooks': 'off',
  }
}
