/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      content: {
        'arrowDownIcon': 'url("/img/arrow-down.png")',
      },
      
    },
  },
  plugins: [],
}

