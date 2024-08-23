import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative h-11 md:h-12 aspect-square">
      <Image src="/images/logo.png" alt="A5 Logo" className="" fill />
    </Link>
  );
}
