"use client";

import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";

import useDetectOutsideClick from "@/hooks/useDetectOutsideClick";
import { usePathname } from "next/navigation";
import NavLinks from "./NavLinks";

interface Props {
  isOpen: boolean;
  setShowMobileNav: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({ isOpen, setShowMobileNav }: Props) {
  const navEl = useDetectOutsideClick(() => setShowMobileNav(false));

  const pathname = usePathname();

  function handleNavigation(curPath: string) {
    if (curPath === pathname) {
      setShowMobileNav(false);
    }
  }

  return (
    <nav
      ref={navEl}
      className={clsx(
        "fixed top-0 -right-80 transition-all duration-300 z-[11] h-screen w-80 bg-[#fafafa] rounded-lg shadow-md",
        { "right-0": isOpen }
      )}
    >
      <button
        onClick={() => setShowMobileNav(false)}
        className="absolute top-8 right-10"
      >
        <span className="sr-only">Close navigation menu</span>
        <IoClose className="w-8 h-8" />
      </button>
      <ul className="flex flex-col gap-8 pt-12 pl-12 text-xl font-bold [&_a:hover]:text-primary">
        <NavLinks onClick={handleNavigation} />
        {/* <li>
          <Link href="/shop" onClick={() => handleNavigation("/shop")}>
            Shop
          </Link>
        </li>
        <li>
          <Link
            href="/general-brands"
            onClick={() => handleNavigation("/general-brands")}
          >
            Brands
          </Link>
        </li>
        <li>
          <Link href="/about-us" onClick={() => handleNavigation("/about-us")}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            onClick={() => handleNavigation("/contact-us")}
          >
            Contact Us
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
