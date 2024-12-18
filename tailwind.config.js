const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
      fontSize: {
        // base: '20px',
      },
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
        firaSans: ['var(--font-fira-sans)'],
        rajdhani: ['var(--font-rajdhani)'],
        poppins: ['var(--font-poppins)'],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}