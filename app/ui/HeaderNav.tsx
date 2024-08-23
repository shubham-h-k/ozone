import Link from "next/link";

export default function HeaderNav() {
  return (
    <nav className="col-span-full hidden md:flex gap-10 justify-self-center text-sm font-bold  xl:col-span-1 xl:col-start-2 xl:row-start-1 xl:translate-x-[10%] [&_a:hover]:text-primary">
      <ul className="flex gap-6">
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
