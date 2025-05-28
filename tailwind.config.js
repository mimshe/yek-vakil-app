const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react/class-list.json"],
  theme: {
    extend: {
      colors: {
        primary: '#03AB35',
        lightPrimary: '#4BD761',
      },
    },
    fontSize: {

      sm: '0.875rem',
      base: '0.875rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
  },
  plugins: [flowbiteReact],
}