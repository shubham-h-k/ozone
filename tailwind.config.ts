import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 20px 10px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        primary: "#3D3BDD", // #7676FF PROCESS, #a5a6f61a Faq, #cfcaca Faq, #060127 Consultation ContactForm
        "primary-opacity": "#F5F7FF",
        "primary-hover": "#3e3bddd7",
        black: "#000000",
        white: "#FFFFFF",
        "white-hover": "#f3f3f3",
        red: "#FF0505", // #FF0000 <Product />
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "462px",
      sm: "576px",
      md: "768px",
      lg: "900px",
      xl: "1024px",
      "2xl": "1280px",
    },
  },
  plugins: [tailwindScrollbar],
};
export default config;

// #3D3BDD, Primary
// #7676FF PROCESS,
// #a5a6f61a Faq,
// #cfcaca Faq,
// #060127 Consultation, ContactForm

// #4D4D4D - InfoSection / WhyWorkWithUsSection / Process / Faq / Product
// #676767 - Product
// #a1a1a1 - FooterSection
// #D9D9D9 - OurClients
// #e4e4e7 - ContactForm
// #EAEAEA - Product
// #efefef - Faq
// #f4f4f4 - WhyWorkWithUsSection
// #f3f3f3 - Faq
// #fafafa - Body, ContactForm-border-bottom

// xs: 576px
// sm: 768px
// md: 900px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
