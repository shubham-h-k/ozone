"use client";

import React, { useState } from "react";
import { Suspense } from "react";
import clsx from "clsx";

import DualRangeSlider from "@/components/DualRangeSlider";
import ColorSelector from "@/components/ColorSelector";
import HorizontalRule from "@/components/HorizontalRule";
import SortMobile from "@/components/shop/SortMobile";
import FilterCheckbox from "@/components/shop/FilterCheckbox";
import Sort from "@/components/shop/Sort";
import Product from "@/components/shop/Product";
import ButtonShowFilters from "@/components/shop/ButtonShowFilters";

import type { productProps } from "@/types";
import { productBrands, productCategories } from "@/constants";
import Overlay from "../Overlay";
import { IoClose } from "react-icons/io5";

function MainContainerShopPage({ products }: { products: productProps[] }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-width mx-auto mt-4 padding-x mb-[300px]">
      <HorizontalRule />
      <main className="lg:grid lg:grid-cols-[16rem_auto] lg:gap-x-6">
        <Overlay isVisible={showFilters}>
          <aside
            // lg:block lg:mt-[1.125rem]
            className={clsx(
              "fixed -bottom-full left-0 transition-all duration-300 z-50 h-screen w-screen bg-[#fafafa] shadow-md overflow-scroll rounded-lg",
              { "bottom-0": showFilters }
            )}
          >
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden absolute top-4 right-4"
            >
              <span className="sr-only">Close Filters</span>
              <IoClose className="w-8 h-8" />
            </button>

            <h2 className="lg:mb-4 mt-6 lg:mt-0 px-6 lg:px-0 lg:text-lg lg:font-semibold">
              Filters
            </h2>

            <HorizontalRule className="hidden lg:block" />

            <div className="flex flex-col lg:gap-6 lg:mt-10">
              <Suspense>
                <FilterCheckbox
                  field="category"
                  label="Categories"
                  data={productCategories}
                />
              </Suspense>

              <Suspense>
                <FilterCheckbox
                  field="brand"
                  label="Brands"
                  data={productBrands}
                />
              </Suspense>

              <div className="p-6 border-b lg:border border-[#d9d9d9] lg:rounded">
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
        </Overlay>

        <div>
          <div className="flex items-center justify-between py-2">
            <ButtonShowFilters setShowFilters={setShowFilters} />
            {/* <p className="text-sm font-semibold text-[#909090]">
        Showing 12 results of 24
      </p> */}

            <Suspense>
              <Sort />
            </Suspense>
          </div>
          <HorizontalRule />
          <ul className="mt-6 sm:mt-10 space-y-6 sm:space-y-10">
            {products?.map((product: productProps) => (
              <Product product={product} key={product.id} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default MainContainerShopPage;
