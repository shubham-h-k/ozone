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
        <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#EE0000]" />
      ) : (
        <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5" />
      )}
    </button>
  );
}
