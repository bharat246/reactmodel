/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14213d',
        sand: '#f8f5f0',
        sun: '#fca311',
        mist: '#e5e5e5',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(20, 33, 61, 0.12)',
      },
    },
  },
  plugins: [],
};
