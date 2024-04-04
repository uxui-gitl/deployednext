const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FFF",
        secondary: "#F2F4F7",
      },
      textColor: {
        primary: "#101828",
        secondary: "#475467",
        blue: "#0745D3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // screens: {
      //   '3xl': '1600px',
      // },
      colors: {
        brand: "#add4ed", // Add brand color
      },
    },
  },
  plugins: [nextui()],
};
