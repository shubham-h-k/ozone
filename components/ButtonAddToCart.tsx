import React from "react";
import { LuShoppingCart } from "react-icons/lu";

function ButtonAddToCart() {
  return (
    <button className="flex gap-2 sm:gap-3 items-center duration-300 px-2 py-[6px] sm:px-4 sm:py-2 md:px-6 md:py-3 bg-primary hover:bg-primary-hover rounded-lg">
      <span className="font-inter text-[0.625rem] sm:text-xs font-bold text-white">
        ADD
      </span>
      <span>
        <LuShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
      </span>
    </button>
  );
}

export default ButtonAddToCart;
