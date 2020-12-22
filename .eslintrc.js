
  module.exports = {
    root: true,
    plugins: [
      'react',
    ],
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
}
