module.exports = {
  mode:"jit",
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: 'red'
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
