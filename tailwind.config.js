module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgba(45, 45, 45, 1)',
          500: 'rgba(32, 32, 32, 1)',
          900: 'rgba(28, 28, 28, 1)'
        }
      },
      fontFamily: {
        'sans': 'Amiri, Roboto'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
