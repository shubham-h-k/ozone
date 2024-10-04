import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>This product can not be found!</p>
      <Link href="/shop">Continue shopping</Link>
    </div>
  );
}
