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
      borderRadius: {
        "10": "0.625rem",
      },
      colors: {
        primary: "#3D3BDD", // #7676FF PROCESS, #a5a6f61a Faq, #cfcaca Faq, #060127 Consultation ContactForm
        "primary-opacity": "#F5F7FF",
        "primary-hover": "#3e3bddd7",
        black: "#000000",
        white: "#ffffff",
        "white-hover": "#f3f3f3",
        red: "#FF0505", // #EE0000 shop/Product.tsx
        borderColor: "#d9d9d9",
        borderColor2: "#eaeaea",
        star: "#de7921",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "28": ["1.75rem", { lineHeight: "2.125rem" }],
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

// #0191da ozone-logo color
// #3D3BDD, Primary
// #7676FF PROCESS,
// #a5a6f61a Faq,
// #9ca3af -  Promotion Code
// #cfcaca Faq,
// #060127 Consultation, ContactForm
// #1c1b1f /shop
// #2d2f31 /cart
// #4D4D4D - InfoSection | WhyWorkWithUsSection | Process | Faq | Product | /shop
// #676767 - Product
// #666666
// #6a6f73 - /cart
// #565959
// #909090 - /shop
// #a1a1a1 - FooterSection
// #D9D9D9 - OurClients | /shop
// #e4e4e7 - ContactForm
// #EAEAEA - Product
// #eaeaea
// #efefef - Faq
// #f4f4f4 - WhyWorkWithUsSection
// #f3f3f3 - Faq
// #f9fafb - Promotion Code
// #fafafa - Body, ContactForm-border-bottom

//#c45500
//#007195

// xs: 576px
// sm: 768px
// md: 900px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
