/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/*.ejs'],
  theme: {
    extend: {
      colors: {
        primary: '#f4a261',
      },
      fontFamily: {
        megrim: ['megrim, sans-serif'],
      },
    },
  },
  plugins: [],
};
