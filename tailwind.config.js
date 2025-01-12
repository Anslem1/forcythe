/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/src/assets/images/header-background.svg')"
      },
      colors: {
        'primary-background': 'var(---primary-background)',
        'secondary-background': 'var(---secondary-background)',
        'linear-background': 'var(---linear-background)',
        'linear-background2': 'var(---linear-background2)',
        accent: 'var(---accent)',
        'dark-grey': 'var(---dark-grey)',
        'light-grey': 'var(---light-grey)'
      },
      fontFamily: {
        lexend: ['lexend', 'san-serif']
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus']
    }
  },
   plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
        },
        '.scrollbar-hidden::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      })
    },
  ],
}
