/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: "#F48C06",
        secondary: "#F0F4EF",
        tatiary: "#344966",
        accent: "#B4CDED",
        fade: "#696984",
        system: {
          success: "#03e13c",
          error: "#e52515"
        },
        dark: {
          accent: "#0D1821",
          bg: "#1f3a5e"
        }
      },
      keyframes: {
        grow: {
          '0%': {transform: 'scale(0, 0)', opacity: '0'},
          '100%': {transform: 'scale(1, 1)', opacity: '1'}
        },
        move: {
          '0%': {transform: 'translateX(0px)'},
          '100%': {transform: 'translateX(45px)'}
        }
      },
      animation: {
        grow: 'grow 700ms linear 0s initial reverse',
        grow_reverse: 'grow 700ms linear 0s infinite',
        move: 'move 700ms linear 0ms infinite'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
