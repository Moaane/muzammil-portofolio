/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Bai Jamjuree"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'white': '#f2f0ee',
      'black': "#161513",
      'orange': "#e94e37",
    },
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
