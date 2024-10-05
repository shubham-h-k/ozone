"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

import type { PropsProductVariation } from "@/types";

interface PropsSelectProductVariant {
  label: string;
  asin: string;
  data: PropsProductVariation[];
}

function SelectProductVariant({
  label,
  asin,
  data,
}: PropsSelectProductVariant) {
  const curProductVariant = data.find(
    (variant: PropsProductVariation) => variant.asin === asin
  )?.value;

  const [hoverVariant, setHoverVariant] = useState(curProductVariant);

  function handleMouse(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    type: "over" | "out"
  ) {
    if (!(e.target instanceof HTMLAnchorElement)) {
      return;
    }
    if (type === "over") setHoverVariant(e.target.dataset.variant);
    if (type === "out") setHoverVariant(curProductVariant);
  }

  return (
    <section className="mt-4">
      <h2>
        {label}: <strong>{hoverVariant}</strong>
      </h2>
      <div className="flex items-center gap-3 mt-2 ">
        {data.map((variant: PropsProductVariation) => (
          <Link
            href={
              variant.is_available ? `/shop/${variant.asin}` : `/shop/${asin}`
            }
            scroll={false}
            data-variant={variant.value}
            onMouseOver={(e) => {
              if (!variant.is_available) return;
              handleMouse(e, "over");
            }}
            onMouseOut={(e) => {
              if (!variant.is_available) return;
              handleMouse(e, "out");
            }}
            className={
              label === "Color"
                ? clsx("relative block w-9 h-9 rounded overflow-hidden", {
                    "ring-2 ring-primary": variant.value === curProductVariant,
                    "ring-1 ring-borderColor":
                      variant.value !== curProductVariant,
                    "cursor-not-allowed": !variant.is_available,
                    hidden: !variant.is_available,
                  })
                : clsx("px-[10px] py-[6px] text-sm rounded", {
                    "ring-2 ring-primary font-bold":
                      variant.value === curProductVariant,
                    "font-medium hover:bg-[#eaeaea] ring-1 ring-borderColor":
                      variant.value !== curProductVariant,
                    "cursor-not-allowed line-through hover:bg-transparent":
                      !variant.is_available,
                  })
            }
            key={variant.asin}
          >
            {label === "Color" ? (
              <>
                {variant.is_available ? (
                  <Image
                    src={variant.photo}
                    alt={variant.value}
                    fill
                    sizes="10vw"
                    className="object-contain object-center pointer-events-none"
                  />
                ) : null}
              </>
            ) : (
              variant.value
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SelectProductVariant;
