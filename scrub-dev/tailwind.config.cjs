/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      'main': "#00062F",
      'main-dark' : "#000314",
      'main-light' : "#000F66",

      'secondary-1': "#564787",
      'secondary-2': "#9DACFF",

      'tertiary-1': "#76E5FC",
      'tertiary-2': "#4BC0D9",


      'white' : "#ffffff",
      'black' : "#000000"
    },
    extend: {},
  },
  plugins: [],
}