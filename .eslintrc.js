const { rules } = require("eslint-config-prettier");

module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    "prettier/prettier": "off",
    "simple-import-sort/imports": "off",
    "eol-last": "off",
  },
}
