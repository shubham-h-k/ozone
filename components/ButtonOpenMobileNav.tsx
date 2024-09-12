"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import MobileNav from "@/components/MobileNav";
import Overlay from "@/components/Overlay";

export default function ButtonOpenMobileNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowMobileNav(true)}
        className="justify-self-end md:hidden"
      >
        <span className="sr-only">Open navigation menu</span>
        <IoMenu className="h-10 w-10 text-primary" />
      </button>

      <Overlay isVisible={showMobileNav}>
        <MobileNav isOpen={showMobileNav} setShowMobileNav={setShowMobileNav} />
      </Overlay>
    </>
  );
}
