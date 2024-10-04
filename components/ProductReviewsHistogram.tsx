import React from "react";

function ProductReviewsHistogram({ reviews }) {
  const reviewsArr = reviews.map((review) => Number(review.review_star_rating));

  const totalReviews = reviewsArr.length;

  const calcPercentage = (rating: number) => {
    return Math.round(
      (reviewsArr.filter((r: number) => r === rating).length / totalReviews) *
        100
    );
  };

  const ratingsPercentage = [];

  for (let i = 5; i > 0; i--) {
    ratingsPercentage.push({
      label: `${i} star`,
      percentage: calcPercentage(i),
    });
  }

  return (
    <ul className="flex flex-col gap-[0.875rem]">
      {ratingsPercentage.map((rating) => (
        <li
          key={rating.label}
          className="grid grid-cols-[3rem_12rem_auto] items-center gap-x-3"
        >
          <span>{rating.label}</span>
          <div
            role="progressbar"
            aria-valuenow={rating.percentage}
            className="w-full h-6 border border-[#888] rounded-sm"
          >
            <div
              style={{ width: `${rating.percentage}%` }}
              className="h-full bg-star"
            ></div>
          </div>
          <span>{rating.percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

export default ProductReviewsHistogram;
