import Image from "next/image";

import StarRatingReadOnly from "@/components/StarRatingReadOnly";
import ProductReviewDescription from "@/components/shop/ProductReviewDescription";

import type { PropsProductVariation } from "@/types";
import { getProductDetails } from "@/lib/actions";

function ProductReviewsList({ reviews }) {
  return (
    <ul className="mt-4 space-y-[1.375rem]">
      {reviews.map(async (review) => {
        const {
          review_author_avatar,
          review_author,
          review_star_rating,
          review_title,
          review_date,
          is_verified_purchase,
          reviewed_product_asin,
          review_comment,
          review_images,
        } = review;

        const { product_variations } = await getProductDetails(
          reviewed_product_asin
        );

        const findProductVariation = function (prop: string) {
          return product_variations?.[prop]?.find(
            (variant: PropsProductVariation) =>
              variant.asin === reviewed_product_asin
          )?.value;
        };

        const productStyle = findProductVariation("style");
        const productSize = findProductVariation("size");
        const productColor = findProductVariation("color");

        return (
          <li key={review.review_id}>
            <div className="flex items-center gap-2">
              <span className="relative w-[1.875rem] h-[1.875rem] rounded-full overflow-hidden">
                <Image
                  src={review_author_avatar}
                  alt="author avatar"
                  fill
                  className="object-contain object-center"
                />
              </span>
              <span className="text-sm text-[#565959]">{review_author}</span>
            </div>
            <div className="flex flex-wrap items-center gap-1 mt-1">
              <StarRatingReadOnly
                rating={Number(review_star_rating)}
                className="w-4 h-4"
              />
              <span className="text-sm font-bold">{review_title}</span>
            </div>
            <p className="mt-1 text-sm text-[#565959]">{review_date}</p>
            <p className="flex flex-wrap gap-2 mt-1 text-xs lg:text-sm text-[#565959]">
              {productStyle && (
                <>
                  <span>Style name: {productStyle}</span>
                  <span className="opacity-60">|</span>
                </>
              )}
              {productSize && (
                <>
                  <span>Size: {productSize}</span>
                  <span className="opacity-60">|</span>
                </>
              )}
              {productSize && (
                <>
                  <span>Color: {productColor}</span>
                  <span className="opacity-60">|</span>
                </>
              )}
              {is_verified_purchase && (
                <span className="text-xs lg:text-sm text-[#c45500] font-bold">
                  Verified Purchase
                </span>
              )}
            </p>
            <ProductReviewDescription text={review_comment} />
            {review_images.length > 0 && (
              <div className="flex flex-wrap items-start gap-1">
                {review_images.map((image: string, i: number) => (
                  <div
                    key={image}
                    className="relative w-[5.5rem] h-[5.5rem] border"
                  >
                    <Image
                      src={image}
                      alt={`Review image ${i + 1}`}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default ProductReviewsList;
