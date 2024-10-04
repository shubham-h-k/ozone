import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { archivo } from "@/styles/fonts";
import ButtonSaveProduct from "@/components/shop/ButtonSaveProduct";
import ButtonAddToCart from "@/components/ButtonAddToCart";
import ButtonUpdateCount from "../ButtonUpdateCount";

// import { productProps } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { truncateTitle } from "@/lib/utils";

export default function ProductItem({ product, user }) {
  // const [itemCount, setItemCount] = useState(1);
  const itemCount = 0;

  const {
    asin,
    product_title,
    product_price,
    product_original_price,
    product_photo,
  } = product;

  console.log(product);

  const productDiscount = Math.round(
    ((product_original_price - product_price) * 100) / product_original_price
  );

  return (
    <li className="relative flex border border-[#e4e4e7] rounded-md overflow-hidden">
      <ButtonSaveProduct className="absolute z-10 top-2 right-2 bg-[#FAFAFA]" />
      <div className="flex items-start justify-center p-2 bg-[#f4f4f4]">
        <Link
          href={`/shop/${asin}`}
          className="relative block w-20 h-20 sm:w-40 sm:h-40 md:w-[13.75rem] md:h-[13.75rem] "
        >
          <Image
            src={product_photo}
            alt={truncateTitle(product_title, 20)}
            fill
            className="object-contain object-center"
          />
        </Link>
      </div>

      <div className="flex flex-col flex-1 px-4 sm:px-6 py-2  sm:py-2 ">
        <Link href={`/shop/${asin}`}>
          <p className="sm:hidden text-sm xl:text-lg font-semibold cursor-pointer">
            {truncateTitle(product_title, 60)}
          </p>
        </Link>
        <p className="hidden sm:block md:hidden xl:text-lg font-semibold cursor-pointer">
          {truncateTitle(product_title, 120)}
        </p>
        <p className="hidden md:block text-lg font-semibold cursor-pointer">
          {truncateTitle(product_title, 190)}
        </p>
        <p className="mt-1 sm:mt-2 mb-4">
          <span className="text-xl sm:text-2xl font-bold text-primary">
            {formatCurrency(Math.round(product_price))}
          </span>
          {productDiscount > 0 && (
            <span className="ml-2 text-xs sm:text-base text-[#4d4d4d] align-baseline">
              <span className="line-through">
                {formatCurrency(Math.round(product_original_price))}
              </span>
              <span className="ml-1">
                ({formatCurrency(productDiscount)}% off)
              </span>
            </span>
          )}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-2 mt-auto">
          <div className="flex items-center gap-1 sm:gap-2">
            <ButtonUpdateCount>
              <span className="sr-only">Decrease count by one</span>
              <FaMinus className="w-3 h-3 fill-[#676767]" />
            </ButtonUpdateCount>
            <span className="flex items-center justify-center w-10 sm:w-12 md:w-16 h-6 sm:h-8 md:h-10 text-sm sm:text-base font-bold border border-[#EAEAEA] rounded-md sm:rounded-lg">
              {itemCount}
            </span>
            <ButtonUpdateCount>
              <span className="sr-only">Increase count by one</span>
              <FaPlus className="w-3 h-3 fill-[#4D4D4D]" />
            </ButtonUpdateCount>
          </div>
          <ButtonAddToCart productId={asin} user={user} />
        </div>
      </div>
    </li>
  );
}
