import React from "react";
import Link from "next/link";
import Image from "next/image";

import emptyCart from "@/public/images/emptyCart.png";
import Header from "@/components/Header";
import PromotionCode from "@/components/PromotionCode";
import Footer from "@/components/Footer";

import { formatCurrency } from "@/lib/utils";

async function Page() {
  const totalCartItems = 0;
  return (
    <>
      <Header />
      <main className="max-width padding-x mx-auto margin-top-sm margin-bottom-md">
        {totalCartItems > 0 && (
          <>
            <p className="flex items-center gap-2">
              <span className="text-[#6a6f73] font-bold">Total: </span>
              <span className="text-[2rem] font-bold">
                {formatCurrency(549)}
              </span>
              <span className="text-[#6a6f73] line-through">
                {formatCurrency(3699)}
              </span>
              <span className="text-[#2d2f31]">85% off</span>
            </p>
            <PromotionCode />
          </>
        )}
        <section className="mt-8">
          <h2 className="font-semibold">
            {/* {totalCartItems} {totalCartItems === 1 ? "Item" : "Items"} in Cart */}
          </h2>

          {totalCartItems === 0 && (
            <div className="flex flex-col items-center mt-2  p-6 border border-borderColor rounded">
              <figure>
                <figcaption>
                  <a
                    href="https://www.flaticon.com/free-icons/empty-cart"
                    title="empty cart icons"
                    className="text-xs text-center underline"
                    target="_blank"
                  >
                    Attribution: Icon created by kerismaker - Flaticon
                  </a>
                </figcaption>

                <Image src={emptyCart} alt="Empty cart" />
              </figure>

              <p className="mt-8 text-center">
                Your cart is empty. Continue shopping to find an item!
              </p>
              <Link
                href="/shop"
                className="mt-4 px-4 py-2 font-bold text-white bg-primary rounded-full"
              >
                Continue shopping
              </Link>
            </div>
          )}

          {totalCartItems > 0 && (
            <ul className="mt-2">
              <li className="p-4 border-t border-t-borderColor">1</li>
              <li className="p-4 border-t border-t-borderColor">2</li>
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Page;
