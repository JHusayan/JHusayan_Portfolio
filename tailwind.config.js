/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'smug' : "url('assets/images/1500x500.jpg')",
        'awesome' : "url('assets/images/awesome.png')",
        'active' : "url('assets/images/active.png')",
        'hover' : "url('assets/images/hover.png')",        
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}