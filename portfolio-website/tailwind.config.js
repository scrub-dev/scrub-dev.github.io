/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      purple: colors.purple,
      green: colors.green
    },
    container: {
      center: true,
    },
    keyframes: {
      blink: {
        '0%, 100%': {color: 'transparent'},
        '50%': {color: '#FFFFFF'}
      }
    },
    animation: {
      blinking: 'blink 1s infinite'
    }
  },
  plugins: [],
}
