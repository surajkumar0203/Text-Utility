/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./src/**/*.{html,js}"],

  theme: {
    extend: {
      content: {
        'arrowDownIcon': 'url("/img/arrow-down.png")',
      },
      
    },
  },
  plugins: [],
}

