import React from "react";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface PropsStarRating {
  rating: number;
  maxRating?: number;
  className?: string;
}

function StarRatingReadOnly({
  rating,
  maxRating = 5,
  className,
}: PropsStarRating) {
  const intPart = Math.floor(rating);
  const fracPart = Number((rating - intPart).toFixed(1));

  return (
    <div className="flex items-center gap-[0px]">
      {Array.from({ length: maxRating }, (_, i) => i + 1).map((i) => {
        // 4.1-4.2 empty | 4.3-4.7 half | 4.8-5.0 full
        let type = "empty";
        if (rating >= i) {
          type = "full";
        }
        if (rating < i && i - rating < 1) {
          if (fracPart >= 0.3 && fracPart <= 0.7) {
            type = "half";
          }
          if (fracPart >= 0.8) {
            type = "full";
          }
        }

        return (
          <Star
            key={i}
            className={twMerge("w-5 h-5 text-star", className)}
            type={type}
          />
        );
      })}
    </div>
  );
}

interface PropsStar {
  // type: "half" | "full" | "empty";
  type: string;
  className: string;
}

function Star({ type, className }: PropsStar) {
  if (type === "half") return <FaRegStarHalfStroke className={className} />;
  if (type === "full") return <FaStar className={className} />;
  if (type === "empty") return <FaRegStar className={className} />;
}

export default StarRatingReadOnly;
