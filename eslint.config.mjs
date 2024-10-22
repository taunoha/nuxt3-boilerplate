// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier/recommended";

export default withNuxt([
  {
    ignores: [".vscode/*"],
  },
  {
    files: ["**/*.ts", "**/*.vue", "*.mjs"],
    ...prettier,
  },
  {
    files: ["*.vue", "**/*.vue", "**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "prettier/prettier": [
        "error",
        {
          htmlWhitespaceSensitivity: "ignore",
        },
      ],
    },
  },
  {
    files: ["*.vue", "**/*.ts"],
    rules: {
      "vue/multi-word-component-names": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["app.vue", "error.vue", "pages/**/*.vue", "layouts/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
]);
