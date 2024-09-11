import { Inter, Lusitana, Manrope, Roboto, Archivo } from "next/font/google";

export const manrope = Manrope({ subsets: ["latin"] });
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const archivo = Archivo({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
