/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('galaxy.png')",
        'nlw-gradient':
          'linear-gradient(89.6deg,#9572FC 27%,#43E7AD 40.94%,#E1D55D 80.57%)',
        'game-gradient':
          'linear-gradient(180deg,rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67%)',
      },
      colors: {},
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
