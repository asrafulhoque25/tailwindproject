/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "{html,js}", './index.html'
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '556px',
      'md': '768px',
      'lg': '991px',
      'xl': '1200px',
      'xxl': '1400px',
    },
    fontSize: {
      sm2: '14px',
      sm: '16px',
      base: '18px',
      xl: '21px',
      '2xl': '32px',
      '3xl': '40px',
    },
    fontFamily: {
      // 'poppins': ['poppins', 'sans-serif'],
      'body': ['"Montserrat", "sans-serif" '],
    },
    extend: {

      colors: {
        //Primary colors
        lightYellow: "#d1a572",
        purple: "#943B84",
        gray: "#E0E0E0",
    
      },
      letterSpacing: {
        normal2: '0.42px',
        normal3: '-0.22px',
        tight2: '-0.64px',
        tight3: '-0.18px',
        tight4: '-0.5px',
      },
      lineHeight: {
        '64': '66px',
        '40': '40px',
      }

    },
  },
  plugins: [],
}
