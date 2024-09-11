import { Suspense } from "react";
import type { Metadata } from "next";

import Header from "@/components/Header";
import DualRangeSlider from "@/components/DualRangeSlider";
import ColorSelector from "@/components/ColorSelector";
import HorizontalRule from "@/components/HorizontalRule";
import SortMobile from "@/components/shop/SortMobile";
import FilterCheckbox from "@/components/shop/FilterCheckbox";
import Sort from "@/components/shop/Sort";
import Product from "@/components/shop/Product";

import { getProducts } from "@/lib/data-service";

export const metadata: Metadata = {
  title: "Shop",
};

const categories = [
  "Accessories",
  "Digital Products",
  "Network Hardware",
  "Power Equipment",
  "Printers",
  "Services",
];

const brands = [
  "Apple",
  "Samsung",
  "Sony",
  "Network Hardware",
  "Power Equipment",
  "Printers",
  "Services",
];

export default async function Shop() {
  const products = await getProducts();

  return (
    <>
      <Header />

      <div className="max-width mx-auto mt-4 padding-x mb-[300px]">
        <HorizontalRule />

        <div className="lg:grid lg:grid-cols-[16rem_auto] lg:gap-x-6">
          <aside className="hidden lg:block mt-[1.125rem]">
            <h2 className="mb-4 text-lg font-semibold">Filters</h2>

            <HorizontalRule />

            <div className="flex flex-col gap-6 mt-10">
              <Suspense>
                <SortMobile />
              </Suspense>

              <Suspense>
                <FilterCheckbox
                  field="category"
                  label="Categories"
                  data={categories}
                />
              </Suspense>

              <Suspense>
                <FilterCheckbox field="brand" label="Brands" data={brands} />
              </Suspense>

              <div className="p-6 border border-[#d9d9d9] rounded">
                <label htmlFor="price" className="block mb-4 font-semibold">
                  Price
                </label>
                <DualRangeSlider />
              </div>

              <Suspense>
                <ColorSelector />
              </Suspense>
            </div>
          </aside>

          <main>
            <div className="flex items-center justify-between py-2">
              <button>Filters</button>
              {/* <p className="text-sm font-semibold text-[#909090]">
                Showing 12 results of 24
              </p> */}
              <div className="">
                <Suspense>
                  <Sort />
                </Suspense>
              </div>
            </div>
            <HorizontalRule />
            <ul className="mt-6 sm:mt-10 space-y-6 sm:space-y-10">
              {products?.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </ul>
          </main>
        </div>
      </div>
    </>
  );
}
