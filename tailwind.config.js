module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '500px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'peach': '#D87D4A',
      'peach-hover': '#FBAF85',
      'dark-gray': '#F1F1F1',
      'gray': '#FAFAFA',
      'white': '#FFFFFF',
      'black': '#000000',
      
    },

    fontFamily:{
      'manrope': ['Manrope']
    }
    
  },
  plugins: [],
}
