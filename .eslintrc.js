module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  plugins: ["@typescript-eslint", "check-file"],
  rules: {
    "vue/script-setup-no-uses-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": [
      "error",
      {
        htmlWhitespaceSensitivity: "ignore",
      },
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "./pages/**/*": "*([^A-Z])",
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
  },
  overrides: [
    {
      files: ["./pages/**/*", "./layouts/*", "error.vue"],
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ],
};
