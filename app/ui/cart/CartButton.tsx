import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function CartButton() {
  return (
    <Link href="/cart" className="relative">
      <IoCartOutline className="w-8 h-8" />
      <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red text-xs text-white">
        0
      </span>
    </Link>
  );
}
