import type { Metadata } from "next";

import Header from "@/components/Header";
import MainContainerShopPage from "@/components/shop/MainContainerShopPage";
import Footer from "@/components/Footer";

import { getAllProducts, getUser } from "@/lib/actions";

export const metadata: Metadata = {
  title: "Shop",
};

export const revalidate = 0;

export default async function Shop() {
  const allProducts = await getAllProducts();
  const user = await getUser("shk");

  return (
    <>
      <Header />
      <MainContainerShopPage products={allProducts} user={user} />
      <Footer />
    </>
  );
}
