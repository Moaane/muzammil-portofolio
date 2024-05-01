/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

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
  plugins: [daisyui],
};
