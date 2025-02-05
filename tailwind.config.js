/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        customGradient: 'linear-gradient(335deg, #15C5CE 31.01%, #0B5768 83.54%)',
        gradientToTop: 'linear-gradient(to top, #15C5CE, #0C677C)',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        elMessiri: ['El Messiri', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      screens: {
        tablet: { max: '1024px' },
        mobile: { max: '375px' },
        'customHover-gradient' : 'linear-gradient(0deg, rgb(12, 163, 171) 0%, rgb(5, 63, 75) 100%)' ,
        'login-registration-image': "url('@/assets/images/Auth/bg-image.jpg')" ,
      },
      backgroundPosition: {
        'right-top': 'right top',
      },
      textColor: {
        'basisText' : '#4B4B4B' ,
        'lightGrey' : '#8E8E8E' ,
      },
      boxShadow: {
        "custom": '0 5px 10px 4px rgb(0 0 0 / 0.3)'
      }
    },
  },
  plugins: [],
};
