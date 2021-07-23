const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    typography: (theme) => ({}),
    extend: {
      fontFamily: {
        hind: ['Hind', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        emerald: colors.emerald,
        purple: colors.purple,
        violet: colors.violet,
        red: colors.red,
        orange: colors.orange,
        pink: colors.pink,
        teal: colors.teal,
        'cool-gray': colors.coolGray,
        'blue-gray': colors.blueGray,
      },
      screens: {},
      spacing: {
        '2/3': '66.666667%',
        '5/6': '83.333333%',
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms',
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: 'white',
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
