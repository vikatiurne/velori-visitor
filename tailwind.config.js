/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        customGradient:
          'linear-gradient(335deg, #15C5CE 31.01%, #0B5768 83.54%)',
        gradientToTop: 'linear-gradient(to top, #15C5CE, #0C677C)',
      },
      colors: {
        'green-chat': 'rgba(152, 248, 204, 0.27)',
      },
      textColor: {
        gradientToTop: 'transparent',
        basisText: '#4B4B4B',
        lightGrey: '#8E8E8E',
      },

      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        elMessiri: ['El Messiri', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sansation: ['Sansation', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        tablet: { max: '1024px' },
        mobile: { max: '375px' },
        'customHover-gradient':
          'linear-gradient(0deg, rgb(12, 163, 171) 0%, rgb(5, 63, 75) 100%)',
      },
      backgroundPosition: {
        'right-top': 'right top',
      },

      boxShadow: {
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 2px rgba(0, 0, 0, 0.25)',
        },
        '.btn-shadow': {
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
        },
        '.scrollbar-hidden': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};
