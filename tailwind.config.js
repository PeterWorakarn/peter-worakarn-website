module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' }
      },
      fontFamily: {
        'head_english': ['NotoSerifDisplay', 'serif'],
        'head_thai': ['ThaiSansNeue', 'serif'],
        'sans_english': ['Inter', 'sans-serif'],
        'sans_thai': ['Sarabun', 'sans-serif'],
      },
      colors: {
        app_white: '#F7FBFE',
        app_dark: '#282828',
        skeletons: '#E3E3E3',
        primary_pink:'#E26A9A',
        primary_blue:'#274CD7',
        primary_yellow:'#CD8B0F',
        primary_orange:'#C44F34',
        typo: {
          main: '#2D2D2D',
          minor: '#6E7278',
        },
      },
    },
    variants: {
      extend: {
        textColor: [
          "selection"
        ],
        backgroundColor: [
          "selection"
        ],
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require("tailwindcss-selection-variant"),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
}
