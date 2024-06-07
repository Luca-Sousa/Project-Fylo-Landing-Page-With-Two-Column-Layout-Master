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
        'col-LG': 'hsl(0, 0%, 75%)',
        'hv-btn1': 'rgba(107,155,255,255)',
        'hv-btn2': 'rgba(105,155,254,255)'
      },
      fontFamily: {
        'Raleway': 'Raleway',
        'Open-Sans': 'Open Sans'
      },
      backgroundImage: {
        'Crv-Desk': "url('/images/bg-curve-desktop.svg')",
        'Crv-Mob': "url('/images/bg-curve-mobile.svg')"
      },
      backgroundSize: {
        '100-100': '100% 100%'
      },
      boxShadow: {
        'boxShadow': 'rgba(149, 157, 165, 0.2) 0px 8px 24px;'
      }
    },
  },
  plugins: [],
}

