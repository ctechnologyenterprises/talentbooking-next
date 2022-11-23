/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "250px": "250px",
        "60%": "60%",
      },
      padding: {
        "5rem": "5rem",
        "3rem": "3rem",
      },
      zIndex: {
        90: "90",
        100: "100",
        999: "999",
      },
      backgroundImage: {
        "common-head": "url('/img/structure/actionsbar-bg.jpg')",
      },
    },
  },
  plugins: [],
};
