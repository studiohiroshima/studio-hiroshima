/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '12/13': '95%'
      },
      fontFamily: {
        lineto: ["--var(-font-lineto)"]
      },
      fontSize: {
        xxl: '22px'
      },
      colors: {
        'whitish': '#f8f9fa'
      }
    },
  },
  plugins: [],
};
