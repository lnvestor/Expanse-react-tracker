module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

      spacing : {
        md:'40rem'
        
            },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
