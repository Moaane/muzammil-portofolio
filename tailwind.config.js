/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Bai Jamjuree"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          neutral: "#f2f0ee",
          "neutral-content": "#161513",
          primary: "#e94e37",
        },
      },
      "light",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
