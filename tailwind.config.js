/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Lobster Two", "cursive"],
    },
    extend: {
      height: {
        108: "26rem",
      },
      width: {
        "3/14": "28%",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
