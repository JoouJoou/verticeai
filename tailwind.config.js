/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshiRegular: ['"Satoshi-Regular"', "sans-serif"],
        satoshiBold: ['"Satoshi-Bold"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
