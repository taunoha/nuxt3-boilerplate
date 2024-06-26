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
      "vue/multi-word-component-names": "error",
      "prettier/prettier": [
        "error",
        {
          htmlWhitespaceSensitivity: "ignore",
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
