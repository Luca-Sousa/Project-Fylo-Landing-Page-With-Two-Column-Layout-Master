/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.css'],
  theme: {
    extend: {
      colors: {
        'col-VDB': 'hsl(243, 87%, 12%)',
        'col-DB': 'hsl(238, 22%, 44%)',
        'col-BB': 'hsl(224, 93%, 58%)',
        'col-MC': 'hsl(170, 45%, 43%)',
        'col-LGB': 'hsl(240, 75%, 98%)',
        'col-LG': 'hsl(0, 0%, 75%)'
      },
      fontFamily: {
        'Raleway': 'Raleway',
        'Open-Sans': 'Open Sans'
      }
    },
  },
  plugins: [],
}

