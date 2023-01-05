/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pom: {
          red: "#F87070",
          teal: "#70F3F8",
          purple: "#D881F8",
          lavender: "#D7E0FF",
          darkBlue: "#1E213F",
          white: "#FFFFFF",
          grey: "#EFF1FA",
          black: "#161932",
        },
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
        roboto: ["Roboto Slab", "serif"],
        space: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
