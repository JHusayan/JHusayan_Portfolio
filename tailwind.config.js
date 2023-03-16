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
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
