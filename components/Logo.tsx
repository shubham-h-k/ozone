import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/ozone-logo-black.svg";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Website Logo" className="h-7 sm:h-8 w-auto" />
    </Link>
  );
}
