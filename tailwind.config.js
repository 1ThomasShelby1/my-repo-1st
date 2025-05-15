/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        qurova: ['Qurova DEMO', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        segoe: ['"Segoe UI"', 'sans-serif'],
        varela: ['"Varela Round"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-white-pink': 'linear-gradient(180deg, #FD746C 100%)',
        'gradient-white-pink-opacity': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 23.36%, rgba(253, 116, 108, 0.8) 100%)',
        'gradient-dark-pink-302': 'linear-gradient(302.78deg, #2C3E50 10.83%, #FD746C 89.17%)',
        'gradient-dark-pink-314': 'linear-gradient(314.58deg, #2C3E50 -62.98%, #FD746C 91.04%)',
      },
       screens: {
        xs: '390px',       
        '2xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

