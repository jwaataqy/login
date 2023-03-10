/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        clrFigma: '#7F56DA',
        background:'url(../src/img/pra.png)',
        clrLogin: '#5268F4',
       
      }
      
    },
  },
  plugins: [],
}
