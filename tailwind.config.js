/** @type {import('tailwindcss').Config} */ 

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#4CCD99",
        brandSecondary: "#E70FAA",
        brandTertirary: "#42446E",
        brandText: "#ffffff",
        brandBlack: "#000000",
        brandSucess: "#D7FFE0",
        brandProcess: "#FFE5D7",
        brandBack:"#191825",
      },
      padding: {
        "custom-v": "24px",
        "custom-h": "16px",
        "custom-v-md": "32px",
        "custom-h-md": "24x",
        "custom-v-lg": "48px",
        "custom-h-lg": "32px",
      },
    },
  },
  plugins: [],
};
