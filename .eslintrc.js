module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-duplicate-imports': 0,
    'camelcase': [1, { 'properties': 'never' }],
    'semi': 0,
    'space-before-function-paren': 0,
    "indent": ["off", 2]
  }
}
