import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brands",
};

export default async function Brands() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
