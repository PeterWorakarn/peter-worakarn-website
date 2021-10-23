module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {'raw' : 'print'}
      },
      colors: {
        app_white: '#F7FBFE',
        app_dark: '#333333',
        typo: {
          main: '#2D2D2D',
          minor: '#CBCBCB',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
