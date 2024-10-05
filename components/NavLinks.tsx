"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Brands",
    href: "/brands",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

interface PropsNavLinks {
  onClick?: (curPath: string) => void;
}

function NavLinks({ onClick = () => {} }: PropsNavLinks) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={() => onClick(link.href)}
            className={clsx("pb-1 hover:text-primary border-b-2", {
              "border-b-transparent": pathname !== link.href,
              "border-b-current": pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
