/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
]
export const theme = {
  letterSpacing: {
    'wide-subtitle': '.15em'
  },
  extend: {
    keyframes: {
      morph: {
        "0%": {
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        },

        "50%": {
          borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
        },

        "100%": {
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }
      },
    },
    animation: {
      moveRight: "moveRight 3s ease-in-out infinite",
      morph: "morph 5s ease-in-out infinite"
    },
    textShadow: {
      'title': '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgba(0, 0, 0, 0.2)'
    }
  },
}
export const plugins = [
  require('@tailwindcss/forms'),
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
]



