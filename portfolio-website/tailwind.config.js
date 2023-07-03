/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace']},
    extend: {
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
          },
          unblur: {
            '0%': { filter: "blur(50px)" },
            '100%': { filter: "blur(0px)" }
          }
        },
        animation: {
          blinking: 'blink 1.5s infinite',
          unblur: 'unblur 3s',
        }
    }
  },
  plugins: [],
}
