/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens:{
      'lg': {'max':'992px'},
      'md': {'max':'768px'},
      'sm': {'max':'480px'}
    },
    container:{
      padding:'20px',
      center:true
    },
    important: true,
    extend: {
      colors:{
        mainColor:'#29474C'
      },
    },
  },
  plugins: [],
}
