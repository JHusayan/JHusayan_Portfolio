/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'standard-black' : '#171717',
      'standard-red' : '#e0042c',
      'standard-white' : '#FBFAF8',
    },
    screens: {
      phone: '200px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage:{
        'smug' : "url('assets/images/1500x500.jpg')",
        'awesome' : "url('assets/images/awesome.png')",
        'active' : "url('assets/images/active.png')",
        'hover' : "url('assets/images/hover.png')",
        'thesis': "url('assets/images/thesis-login.png')",     
        'continual': "url('assets/images/continual-game.png')", 
        'rocketry': "url('assets/images/rocketry-game.jpg')",     
      }
    },
  }
}
