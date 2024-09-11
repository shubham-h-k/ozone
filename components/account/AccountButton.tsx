import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function AccountButton() {
  return (
    <Link href="/account" aria-label="Go to user account page">
      <IoPersonCircleOutline className="w-9 h-9" />
    </Link>
  );
}
