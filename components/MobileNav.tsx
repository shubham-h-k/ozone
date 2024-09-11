import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";

import useDetectOutsideClick from "../hooks/useDetectOutsideClick";

interface Props {
  isOpen: boolean;
  setShowMobileNav: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({ isOpen, setShowMobileNav }: Props) {
  const navEl = useDetectOutsideClick(() => setShowMobileNav(false));

  return (
    <nav
      ref={navEl}
      className={clsx(
        "fixed top-0 -right-80 transition-all duration-300 z-50 h-screen w-80 bg-[#fafafa] rounded-lg shadow-md",
        { "right-0": isOpen }
      )}
    >
      <button onClick={() => setShowMobileNav(false)}>
        <IoClose className="absolute top-8 right-10 w-8 h-8" />
      </button>
      <ul className="flex flex-col gap-8 pt-12 pl-12 text-xl font-bold [&_a:hover]:text-primary">
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/general-brands">Brands</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
