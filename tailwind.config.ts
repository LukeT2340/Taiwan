export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1025px',
        xl: '1600px',
        '2xl': '1800px',
        '3xl': '2200px',
      },
      colors: {
        'bright-cyan': '#58F6F4',
        'dark-blue': '#192958',
        orange: '#FF5629',
        yellow: '#FFB42E',
        blue: '#C7E5D1',
        'dark-green': '#004740',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        taiwan: ['Taiwan'],
      },

      fontSize: {
        clampHeading: 'clamp(48px, 6vw, 92px)',
        clampHeading2: 'clamp(30px, 5vw, 54px)',
        '19': ['19px', '36px'],
        '78': ['78px', '100px'],
        '100': ['100px', '135px'],
      },
      lineHeight: {
        tight: '1.00',
        normal: '1.35',
        custom: '1.5',
      },
      backgroundImage: {
        footer: "url('/assets/images/desktop/footer-background.jpg')",
      },
    },
  },
  plugins: [],
};
