/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e9a33b",
        secondary: "#065d63",
        bgColor: "#FAFAFA",
      },
      screens: {
        "support-hover": { raw: "(hover: hover)" },
      },
    },
  },
  plugins: [],
};
