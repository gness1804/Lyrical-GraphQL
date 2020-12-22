
  module.exports = {
    root: true,
    plugins: [],
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      },

    },
    extends: [
      'eslint:recommended',
    ],
    rules: {
      'no-console': 'warn',
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
}

