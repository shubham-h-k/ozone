import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";

import { archivo } from "@/styles/fonts";
import ButtonSaveProduct from "@/components/shop/ButtonSaveProduct";
import ButtonAddToCart from "@/components/ButtonAddToCart";
import ButtonUpdateCount from "../ButtonUpdateCount";

import { productProps } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { truncateTitle } from "@/lib/utils";

export default function Product({ product }: { product: productProps }) {
  // const [itemCount, setItemCount] = useState(1);
  const itemCount = 0;

  const { thumbnail, title, price, discount } = product;

  return (
    <li className="flex border border-[#e4e4e7] rounded-md overflow-hidden">
      <div className="flex flex-col gap-4 p-2 sm:p4 bg-[#f4f4f4]">
        <div className="flex items-center justify-between">
          <span
            className={`${archivo.className} px-2 py-1 text-[0.5rem] sm:text-[0.625rem] font-bold text-white bg-[#EE0000] rounded-full`}
          >
            Sale
          </span>
          <ButtonSaveProduct />
        </div>

        <Link
          href="/shop"
          className="relative block self-center w-20 h-20 sm:w-40 sm:h-40 md:w-[13.75rem] md:h-[13.75rem] "
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-contain object-center"
          />
        </Link>
      </div>

      <div className="flex flex-col flex-1 py-2 px-4 sm:py-4 sm:px-6">
        <p className="sm:hidden text-sm xl:text-lg font-semibold cursor-pointer">
          {truncateTitle(title, 60)}
        </p>

        <p className="hidden sm:block md:hidden xl:text-lg font-semibold cursor-pointer">
          {truncateTitle(title, 120)}
        </p>

        <p className="hidden md:block text-lg font-semibold cursor-pointer">
          {truncateTitle(title, 190)}
        </p>

        {discount ? (
          <p className="mt-2 sm:mt-4">
            <span className="text-xl sm:text-2xl font-bold text-primary">
              {formatCurrency(Math.round(price - (discount / 100) * price))}
            </span>
            <span className="ml-2 text-xs sm:text-base text-[#4d4d4d] align-baseline">
              <span className="line-through">
                {formatCurrency(Math.round(price))}
              </span>
              <span className="ml-1">({discount}% off)</span>
            </span>
          </p>
        ) : null}

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
          <ButtonAddToCart />
        </div>
      </div>
    </li>
  );
}
