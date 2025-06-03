/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#02CECB",
        secondary: "rgb(253, 224, 71)",
        text: "#fefefe",
        textSecondary: "#8d99ae",
        rojo: "#e70e02",
        rojoSuave: "#f44e3f",
        verde: "#06837F",
      },
      fontSize: {
        "5xl": ["3.75rem", "4rem"],
      },
    },
  },
  plugins: [],
};
