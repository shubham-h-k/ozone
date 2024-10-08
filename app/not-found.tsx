import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-4 sm:gap-6 max-width mx-auto mt-24 mb-52 padding-x">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Page is under construction!
        </h1>
        <Link
          href="/"
          className="px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg text-white font-semibold bg-primary hover:bg-primary-hover rounded-full"
        >
          Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
