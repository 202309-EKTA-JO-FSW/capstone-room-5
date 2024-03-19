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
      },
      fontFamily: {
        boston: "var(--font-boston)",
        Roboto: "__Roboto_a2ea95",
      },
      colors: {
        "red-YUMFINITY": "#C20114",
        "yellow-YUMFINITY": "#F18805",
        "black-YUMFINITY": "#02020A",
        "white-YUMFINITY": "#F1F2EB",
      },
    },
  },
  plugins: [],
};
