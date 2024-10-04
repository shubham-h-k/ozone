"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { FaMinus, FaPlus } from "react-icons/fa6";

import StarRatingReadOnly from "@/components/StarRatingReadOnly";
import HorizontalRule from "@/components/HorizontalRule";
import ButtonAddToCart from "@/components/ButtonAddToCart";
import SelectProductVariant from "@/components/shop/SelectProductVariant";
import ButtonUpdateCount from "@/components/ButtonUpdateCount";

import { formatCurrency, formatNumber } from "@/lib/utils";

function ProductDetails({ productDetails }) {
  const {
    asin,
    product_photo,
    product_title,
    product_photos,
    product_star_rating,
    product_num_ratings,
    product_price,
    product_original_price,
    product_details,
    about_product,
    product_variations,
  } = productDetails || {};

  const productDetailsArr = Object.entries(product_details);

  const [selectedPhoto, setSelectedPhoto] = useState(product_photo);

  return (
    <>
      <main className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-12">
        <div className="md:hidden">
          <h1 className="text-lg xs:text-xl sm:text-2xl medium">
            {product_title}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <span className="pt-[2px] text-sm xs:text-base font-semibold">
              {product_star_rating}
            </span>
            <StarRatingReadOnly
              className="max-xs:w-4 max-xs:h-4"
              rating={product_star_rating}
            />
            <span className="ml-2 xs:ml-6 text-sm xs:text-base text-primary">
              {formatNumber(product_num_ratings)} ratings
            </span>
          </div>
        </div>

        <div className="flex flex-col self-center md:self-start gap-4 lg:gap-6 pt-2">
          <div className="relative w-80 h-80 xs:w-[25rem] xs:h-[25rem]  md:max-lg:w-80 md:max-lg:h-80 xl:w-[32.5rem] xl:h-[32.5rem] border border-borderColor2 rounded-10 overflow-hidden">
            <Image
              src={selectedPhoto}
              alt={product_title}
              fill
              priority={true}
              className="object-contain object-center"
            />
          </div>

          <ul className="flex flex-wrap items-center gap-2 xs:gap-3 md:max-lg:gap-2">
            {product_photos.map((photo: string, i: number) => (
              <li key={photo}>
                <button
                  onMouseOver={() => setSelectedPhoto(photo)}
                  onClick={() => setSelectedPhoto(photo)}
                  className={clsx(
                    "relative block w-11 h-11 xs:w-14 xs:h-14 md:max-lg:w-11 md:max-lg:h-11 xl:w-[4.375rem] xl:h-[4.125rem] border border-borderColor2 rounded-10 overflow-hidden",
                    {
                      "ring-2 ring-primary": selectedPhoto === photo,
                    }
                  )}
                >
                  <Image
                    src={photo}
                    alt={`Photo-${i + 1}`}
                    fill
                    sizes="12vw"
                    className="object-contain object-center"
                  />
                  <span className="sr-only">Select photo-{i + 1}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="hidden md:block">
            <h1 className="text-xl lg:text-2xl medium">{product_title}</h1>
            <div className="flex items-center gap-1 mt-2">
              <span className="pt-[2px] font-semibold">
                {product_star_rating}
              </span>
              <StarRatingReadOnly rating={product_star_rating} />
              <span className="ml-6 text-primary">
                {formatNumber(product_num_ratings)} ratings
              </span>
            </div>
          </div>

          <HorizontalRule className="hidden md:block mt-4 mb-4" />
          <p className="flex items-center gap-3 mt-4 md:mt-0">
            <span className="text-28 text-primary font-semibold">
              {formatCurrency(product_price)}
            </span>
            <span className="self-end text-sm text-[#666666] line-through">
              {formatCurrency(product_original_price)}
            </span>
          </p>

          <div className="flex items-center gap-8 mt-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <ButtonUpdateCount>
                <span className="sr-only">Decrease count by one</span>
                <FaMinus className="w-3 h-3 fill-[#676767]" />
              </ButtonUpdateCount>
              <span className="flex items-center justify-center w-10 sm:w-12 md:w-16 h-6 sm:h-8 md:h-10 text-sm sm:text-base font-bold border border-[#EAEAEA] rounded-md sm:rounded-lg">
                5
              </span>
              <ButtonUpdateCount>
                <span className="sr-only">Increase count by one</span>
                <FaPlus className="w-3 h-3 fill-[#4D4D4D]" />
              </ButtonUpdateCount>
            </div>
            <ButtonAddToCart />
          </div>
          <HorizontalRule className="hidden md:block mt-4" />
          {product_variations?.style && (
            <SelectProductVariant
              label="Style name"
              asin={asin}
              data={product_variations.style}
            />
          )}

          {product_variations?.size && (
            <SelectProductVariant
              label="Size"
              asin={asin}
              data={product_variations.size}
            />
          )}

          {product_variations?.color && (
            <SelectProductVariant
              label="Color"
              asin={asin}
              data={product_variations.color}
            />
          )}
          <section className="mt-6">
            <h2 className="text-lg font-semibold">Details</h2>
            <table className="mt-1">
              <tbody className="flex flex-col gap-3">
                {productDetailsArr.map((detail, i) => (
                  <tr key={i} className="flex gap-2">
                    <td className="w-40">
                      <span className="font-medium">{detail[0]}</span>
                    </td>
                    <td>
                      <span>{String(detail[1])}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <HorizontalRule className="hidden md:block mt-4" />
          <section className="md:max-w-[400px] mt-4">
            <h2 className="text-lg font-semibold">About this item</h2>
            <ul className="mt-1 pl-5 space-y-2 list-disc">
              {about_product.map((content: string) => (
                <li key={content}>
                  <p className="text-sm font-medium">{content}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <HorizontalRule className="hidden md:block mt-4" />
      </main>
    </>
  );
}

export default ProductDetails;
