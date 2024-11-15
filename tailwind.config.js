/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "backGroundDeskop" : "url('/img/backgroundPortfolio.png')",
        "backGroundMobile" : "url('/img/backgroundMobile.png')"
      },
      colors:{
        "primary":"#FF5722",
        "background" : "#F5F5F5",
        "bleuFonce" : "#1C2541",
        "surlignage" : "#6E6A6F",
        "primaryLight" : "#fff3b0",
        "grisFonce" : "#c0c0c0",
        "beigeDoux" : "#e6d8b8",
        "jaunePale" : "#e0dbcc"
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'], // Par défaut, pour le texte
        title: ['Montserrat', 'sans-serif'], // Pour les titres
        raleway: ['Raleway', 'sans-serif'], // Pour utiliser Raleway dans les éléments
      },
    },
  },
  plugins: [],
};
