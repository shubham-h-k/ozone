import React, { Suspense } from "react";

import StarRatingReadOnly from "@/components/StarRatingReadOnly";
import ProductReviewsHistogram from "@/components/ProductReviewsHistogram";
import HorizontalRule from "@/components/HorizontalRule";

import { getProductReviews } from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import ProductReviewsList from "./ProductReviewsList";
import Spinner from "@/components/Spinner";

async function ProductReviews({ productDetails }) {
  const { asin, product_star_rating, product_num_ratings, customers_say } =
    productDetails;
  const { reviews } = await getProductReviews(asin);

  const totalReviews = reviews.length;

  return (
    <aside className="md:grid md:grid-cols-[18.75rem_auto] md:gap-x-12 lg:gap-x-20 xl:gap-x-28 mt-8 md:mt-4">
      <div>
        <h2 className="text-xl font-bold">Customer reviews</h2>
        <div className="flex items-center gap-2">
          <StarRatingReadOnly rating={product_star_rating} />
          <span className="text-lg font-medium">
            {product_star_rating} out of 5{" "}
            <span className="ml-1 text-xs text-[#007195]">
              ({formatNumber(product_num_ratings)} ratings)
            </span>
          </span>
        </div>
        <p className="mt-2 text-sm text-[#565959]">
          Histogram is based on top {totalReviews} reviews, as I don&apos;t have
          data for all the {formatNumber(product_num_ratings)} ratings.
        </p>
        <div className="mt-4">
          <ProductReviewsHistogram reviews={reviews} />
        </div>
      </div>
      <div className="pt-4">
        <h2 className="font-bold">Customer say</h2>
        <p className="mt-2 text-sm">{customers_say}</p>
        <HorizontalRule className="hidden md:block mt-4" />
        <h2 className="mt-4 text-lg font-bold">Top {totalReviews} reviews</h2>
        <Suspense fallback={<Spinner />}>
          <ProductReviewsList reviews={reviews} />
        </Suspense>
      </div>
    </aside>
  );
}

export default ProductReviews;
