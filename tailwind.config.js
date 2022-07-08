/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': {
          500: '#97BF11',
        },
        'custom-white': {
          500: '#FFFFFF',
        },
        'custom-grey': {
          500: '#474747',
        },
        'custom-black': {
          500: '#090909',
        },
        'custom-yellow': {
          500: '#F5D66B',
        },
      },
    },
  },
  plugins: [],
};
