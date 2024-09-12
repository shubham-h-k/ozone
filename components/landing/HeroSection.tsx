import Image from "next/image";

import hero from "@/public/images/hero.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative max-width mx-auto margin-top-sm padding-x">
      <div className="mb-4 flex flex-col gap-4 sm:absolute z-10 sm:top-1/2 sm:mb-0 sm:block sm:w-[40%] sm:-translate-y-1/2 sm:pl-5 mlg:w-[42%] xl:w-[45%]">
        <h1 className="sm:mb-6 md:mb-8 xl:mb-10 text-center sm:text-left text-2xl sm:text-xl md:text-3xl xl:text-4xl 2xl:text-[2.5rem] font-bold text-[#111] xl:leading-[1.2] 2xl:leading-tight">
          Fulfilling all your Hardware, Software and Service Needs at your
          finger tips
        </h1>
        <Link
          href="/shop"
          className="inline-block sm:hover:-translate-y-1 duration-300 px-6 xl:px-8 py-3 xl:py-4 text-center sm:text-sm md:text-base font-semibold text-white bg-[#444] rounded-full"
        >
          Explore all Products
        </Link>
      </div>

      <Image
        src={hero}
        alt=""
        className="w-full rounded-[2rem]"
        priority={true}
      />
    </section>
  );
}
