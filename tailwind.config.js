/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#E63F3A08",
        secondryPurple: "#E63F3A4D",
        textPurple: "#E63F3A",
        buttonbg: "#E63F3A",
        subText: "#475467",
        subTextBold: "#344054",
        headingFont: "#101828",
        feedBackBg: "#F9FAFB",
        borderGray: "#D0D5DD",
        footerText: "#667085",
        arrow: "#E63F3A99",
      },
    },
  },
  plugins: [],
};
