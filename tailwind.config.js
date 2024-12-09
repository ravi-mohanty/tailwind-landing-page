/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
           
  ], // what ever the tailwind is presemt inside the index.html will get converted 
  theme: {
    extend: {
      colors:{
        'primary': '#3238f2',
      },
      fontFamily: {
        'display' : ['Poppins', 'san-sarif'],
        'body' : ['Inter', 'san-sarif']
      }
  
    }, // here we can define anything and we can use this shortcut through out the code .
  },
  plugins: [],
}

