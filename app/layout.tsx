import type { Metadata } from "next";

import { manrope } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { template: "%s", default: "Home" },
  description:
    "Find, explore and buy products from different categories in this store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} text-black font-normal`}>
        {children}
      </body>
    </html>
  );
}
