/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        white2: 'var(--white2)',

        background: 'var(--background)',
        background2: 'var(--background2)',
        background3: 'var(--background3)',
        foreground: 'var(--foreground)',
        footerBG: 'var(--footerBG)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        colorParagraph: 'var(--color-paragraph)',
        colorCardParagraph: 'var(--color-card-paragraph)',
      },
      boxShadow: {
        card: "0 0 10px 0 rgba(0,0,0,.15)",
        card2: "0px 0px 13px -6px rgba(0,0,0,0.5)",
        cardHover: "0 0 30px 0 rgba(0, 0, 0, .15)",
        card2Hover: "-4px 0px 18px 3px rgba(0, 0, 0, 0.13)",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        firaSans: ['var(--font-fira-sans)']
      }
    },
  },
  plugins: [],
};
