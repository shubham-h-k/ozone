import Image from "next/image";
import Link from "next/link";

import card1 from "@/public/images/card1.png";
import card2 from "@/public/images/card2.png";
import card3 from "@/public/images/card3.png";

function ExploreSection() {
  return (
    <section className="grid grid-cols-[21rem] xs:grid-cols-[27rem] sm:grid-cols-2 items-center justify-center sm:gap-x-3 md:gap-x-4 xl:gap-x-5 gap-y-4 md:gap-y-5 xl:gap-y-6 mt-12">
      <div className="sm:row-span-2 relative aspect-square rounded-2xl overflow-hidden">
        <div className="img-gradient"></div>
        <Image
          src={card1}
          alt=""
          fill
          priority={true}
          sizes="(max-width: 576px) 100vw, 50vw"
          className="object-cover"
        />
        <Link
          href="/shop"
          className="absolute z-20 left-1/2 -translate-x-1/2 bottom-[6%] text-xl xs:text-2xl sm:text-xl md:text-2xl font-semibold text-white border-b border-transparent hover:border-current whitespace-nowrap "
        >
          Shop Products
        </Link>
      </div>
      <div className="relative rounded-2xl aspect-[2.15] overflow-hidden">
        <div className="img-gradient"></div>
        <Image
          src={card2}
          alt=""
          fill
          priority={true}
          sizes="(max-width: 576px) 100vw, 50vw"
          className="object-cover"
        />
        <Link
          href="/brands"
          className="absolute z-20 left-1/2 -translate-x-1/2 bottom-[8%] text-xl xs:text-2xl sm:text-xl md:text-2xl font-semibold text-white border-b border-transparent hover:border-current whitespace-nowrap "
        >
          Shop Brands
        </Link>
      </div>
      <div className="relative rounded-2xl aspect-[2.15] overflow-hidden">
        <div className="img-gradient"></div>
        <Image
          src={card3}
          alt=""
          fill
          priority={true}
          sizes="(max-width: 576px) 100vw, 50vw"
          className="object-cover"
        />
        <Link
          href="/about-us"
          className="absolute z-20 left-1/2 -translate-x-1/2 bottom-[8%] text-xl xs:text-2xl sm:text-xl md:text-2xl font-semibold text-white border-b border-transparent hover:border-current whitespace-nowrap "
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
}

export default ExploreSection;
