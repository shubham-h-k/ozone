import type { Metadata } from "next";

import "@/app/ui/globals.css";
import { manrope } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: { template: "%s - A5IT", default: "Home - A5IT" },
  description:
    "With full-stack expertise, A5IT helps you design, orchestrate and manage technologies that drive business success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} text-black font-normal bg-[#FAFAFA]`}
      >
        {children}
      </body>
    </html>
  );
}
