import { getUser } from "@/lib/data-service";
import React, { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

import { addToCart } from "@/lib/actions";

interface Props {
  productId: string;
}

function ButtonAddToCart({ productId = 1, user = {} }) {
  // function handleAddToCart() {
  //   addToCart({
  //     product_item_id: productItemId,
  //     cart_id: user.shopping_cart[0].id,
  //     qty: 4,
  //   });
  // }
  return (
    <button
      // onClick={handleAddToCart}
      className="flex gap-2 sm:gap-3 items-center duration-300 px-2 py-[6px] sm:px-4 sm:py-2 md:px-6 md:py-3 bg-primary hover:bg-primary-hover rounded-lg"
    >
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
