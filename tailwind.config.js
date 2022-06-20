/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */

const tailwindPlugin = require('tailwindcss/plugin');

function components() {
  return tailwindPlugin(() => {});
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundDark: '#1C1E2A',
        backgroundLight: '#242731',
        borderColor: '#52514E',
        primaryColor: '#00F5A0',
        secondaryColor: '#F23E2C',
        tertiaryColor: '#7FBA7A',
        cardBackGround: '#1B1D22',
        grey20: '#808191',
        labelColor: '#B2B3BD',
        buttonBorderColor: '#E4E4E41A',
      },
      dropShadow: {
        '3xl': '0 35px 35px #0c0c0e',
      },
    },
  },
  plugins: [components()],
};
