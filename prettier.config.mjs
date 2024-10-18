/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],
};
export default config;
