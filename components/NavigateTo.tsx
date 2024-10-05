"use client";

import { useState } from "react";
import Link from "next/link";

import OverlaySpinner from "@/components/OverlaySpinner";
import { usePathname } from "next/navigation";

interface PropsNavigateTo {
  href: string;
  label: string;
  className?: string;
}

function NavigateTo({ href, label, className }: PropsNavigateTo) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {isLoading && <OverlaySpinner />}

      <Link
        href={href}
        onClick={() => {
          if (href === pathname) return;
          setIsLoading(true);
        }}
        className={className}
      >
        {label}
      </Link>
    </>
  );
}

export default NavigateTo;
