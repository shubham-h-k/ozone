import type { Metadata } from "next";

import Header from "@/components/Header";
import MainContainerShopPage from "@/components/shop/MainContainerShopPage";

import type { productProps } from "@/types";
import { getProducts } from "@/lib/data-service";

export const metadata: Metadata = {
  title: "Shop",
};

export default async function Shop() {
  const products: productProps[] = await getProducts();

  return (
    <>
      <Header />
      <MainContainerShopPage products={products} />
    </>
  );
}
