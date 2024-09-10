module.exports = {
  env: {
    browser: true,
    es2021: true,
    jasmine: true,
  },
  extends: ["airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": 0,
    "class-methods-use-this": 0,
    "import/extensions": 0,
    "no-useless-constructor": 0,
    "no-empty-function": 0,
    "no-eval": 0,
    "import/prefer-default-export": 0,
    "no-useless-return": 0,
    "no-param-reassign": 0,
  },
};
