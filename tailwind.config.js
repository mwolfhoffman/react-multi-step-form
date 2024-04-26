/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
      },
      colors: {
        marineBlue: 'hsl(213, 96%, 18%)',
        purplishBlue: 'hsl(243, 100%, 62%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        lightBlue: 'hsl(206, 94%, 87%)',
        strawberryRed: 'hsl(354, 84%, 57%)',
        pastelBlue: 'hsl(228, 100%, 84%)',
        coolGray: 'hsl(231, 11%, 63%)',
        lightGray: 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        body: ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        'body': '16px',
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'bold': 700,
      },
    },
  },
  plugins: [],
}

