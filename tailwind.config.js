module.exports = {
  purge:  [
    "./build/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2ecc71",
        secondary: "#f18343",
        "primary-txt": "#434343",
        "secondary-txt": "#1f1f1f",
        reward: "#39ba70",
        "dark-bg": "#34495e",
        "refer-txt": "#b79e56",
        "refer-bg": "#f8edce" 
      }
    },
    fontFamily: {
      'primary': ['Montserrat', 'Roboto', 'sans-serif']
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
