"use client";

import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function ButtonSaveProduct() {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <button onClick={() => setIsSaved((is) => !is)} className="cursor-pointer">
      {isSaved ? (
        <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF0000]" />
      ) : (
        <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5" />
      )}
    </button>
  );
}
