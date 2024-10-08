import Heading from "@/components/Heading";
import CategoriesList from "@/components/landing/CategoriesList";
import Image from "next/image";

const latestProducts = [
  {
    title: "Apple iPad Pro 12.9' 256GB WiFi",
    image: "/images/ipad.png",
  },
  {
    title: "JBL CLUB 700BT Wireless On-Ear Headphones",
    image: "/images/headphone.png",
  },
  {
    title: "Nanoleaf Essentials Matter A60 | E27 Smart Bulb (Each)",
    image: "/images/light-bulb.png",
  },
  {
    title:
      "Logitech Combo Touch keyboard case with trackpad for iPad Pro 11-inch",
    image: "/images/mechanical-keyboard.png",
  },
  {
    title: "JINYA Type C Magnet Cable",
    image: "/images/hdtv-hdmi-cable.png",
  },
  {
    title: "Insta360 Ace Action Camera",
    image: "/images/sony-camera-5-56880.png",
  },
];

function CategoriesSection() {
  return (
    <section className="margin-top-md">
      <Heading as="h2">Shop all our latest products and prices</Heading>

      <div className="flex justify-center mt-6 mb-6 scrollbar-none overflow-x-auto ">
        <CategoriesList />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-3 md:gap-x-4 xl:gap-x-5 gap-y-2 sm:gap-y-3 md:gap-y-4 xl:gap-y-5">
        {latestProducts.map((product) => (
          <li
            key={product.title}
            className="flex flex-col items-center gap-8 px-4 py-8 bg-[#f4f4f4] rounded-2xl"
          >
            <div className="relative h-[7.25rem] aspect-square cursor-pointer">
              <Image src={product.image} alt={product.title} fill />
            </div>
            <h3 className="text-sm font-semibold text-center cursor-pointer">
              {product.title}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoriesSection;
