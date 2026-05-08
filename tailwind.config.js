/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004785",
        admin: "#1A1A1A",
        success: "#2D6A4F",
        warning: "#FBC02D", 
        danger: "#9B2226",
        dangerAdmin: "#CC0000",
        dangerBorder: "#FFEEEE",
        surface: "#FFFFFF",
        bodyCustomer: "#F5F5F6",
        bodyAdmin: "#FAFAFA",
        textMain: "#1C1C1C",
        textAdmin: "#333333",
        placeholder: "#6E6E73",
        borderLight: "#D1D1D1",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        customer: "4px", 
        admin: "2px",    
      },
      letterSpacing: {
        btn: "0.5px",
      }
    },
  },
  plugins: [],
}