"use client";

import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export default function ButtonSaveProduct({ className }: Props) {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <button
      onClick={() => setIsSaved((is) => !is)}
      className={twMerge("cursor-pointer", className)}
    >
      <span className="sr-only">Save product</span>
      {isSaved ? (
        <FaHeart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 fill-[#EE0000]" />
      ) : (
        <FaRegHeart className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      )}
    </button>
  );
}
