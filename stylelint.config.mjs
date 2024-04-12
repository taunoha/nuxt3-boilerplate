/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-prettier/recommended",
    "stylelint-config-recess-order",
    "stylelint-config-standard-scss",
  ],
  rules: {
    "prettier/prettier": true,
    "scss/at-rule-no-unknown": null,
  },
};
