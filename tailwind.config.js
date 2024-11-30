/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white2: 'var(--white2)',

        background: 'var(--background)',
        foreground: 'var(--foreground)',
        footerBG: 'var(--footerBG)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        colorParagraph: 'var(--color-paragraph)',
      },
      boxShadow: {
        card: "0 0 10px 0 rgba(0,0,0,.15)",
        cardHover: "0 0 30px 0 rgba(0, 0, 0, .15)",
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      }
    },
  },
  plugins: [],
};
