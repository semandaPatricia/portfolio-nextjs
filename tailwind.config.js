const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary:{ 'dark_purple': { DEFAULT: '#0E0725', 100: '#030108', 200: '#06030f', 300: '#090417', 400: '#0c061f', 500: '#0e0725', 600: '#2c1675', 700: '#4a25c2', 800: '#8163e1', 900: '#c0b1f0' }, 'russian_violet': { DEFAULT: '#1B063E', 100: '#05010c', 200: '#0b0218', 300: '#100424', 400: '#150530', 500: '#1b063e', 600: '#3f0e8d', 700: '#6316de', 800: '#955def', 900: '#caaef7' }, 'russian_violet': { DEFAULT: '#280657', 100: '#080111', 200: '#100222', 300: '#180433', 400: '#1f0545', 500: '#280657', 600: '#4b0ba4', 700: '#6f14ef', 800: '#9f63f4', 900: '#cfb1fa' }, 'persian_indigo': { DEFAULT: '#350571', 100: '#0b0117', 200: '#15022d', 300: '#200344', 400: '#2b045a', 500: '#350571', 600: '#5908bc', 700: '#7e1df6', 800: '#a968f9', 900: '#d4b4fc' }, 'indigo': { DEFAULT: '#42048A', 100: '#0d011c', 200: '#1b0237', 300: '#280353', 400: '#36036f', 500: '#42048a', 600: '#6506d2', 700: '#8a29f8', 800: '#b171fb', 900: '#d8b8fd' }, 'indigo': { DEFAULT: '#4F04A3', 100: '#100121', 200: '#200242', 300: '#2f0362', 400: '#3f0383', 500: '#4f04a3', 600: '#6f06e7', 700: '#9237fa', 800: '#b67afc', 900: '#dbbcfd' }, 'chrysler_blue': { DEFAULT: '#5C03BC', 100: '#120125', 200: '#25014a', 300: '#370270', 400: '#490295', 500: '#5c03bc', 600: '#7a04f9', 700: '#9b41fc', 800: '#bd80fd', 900: '#dec0fe' } } , // Define your primary color
        // Add more custom colors as needed
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

