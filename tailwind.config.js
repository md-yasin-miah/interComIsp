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
        primary: 'var(--primary)'
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      }
    },
  },
  plugins: [],
};
