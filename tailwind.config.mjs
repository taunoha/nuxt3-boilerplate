/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontFamily: {
      sans: ["Intel", "sans-serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        primary: "#00dc82",
        secondary: "#080b23",
      },
    },
  },
};
