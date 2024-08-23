import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function CartButton() {
  return (
    <Link href="/account">
      <IoPersonCircleOutline className="w-9 h-9" />
    </Link>
  );
}
