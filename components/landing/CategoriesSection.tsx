import Heading from "@/components/Heading";
import CategoriesList from "@/components/landing/CategoriesList";
import Image from "next/image";

function CategoriesSection() {
  return (
    <section className="max-width mx-auto margin-top-md padding-x">
      <Heading as="h2">Shop all our latest products and prices</Heading>

      <div className="flex justify-center mt-6 mb-6 scrollbar-none overflow-x-auto ">
        <CategoriesList />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-3 md:gap-x-4 xl:gap-x-5 gap-y-2 sm:gap-y-3 md:gap-y-4 xl:gap-y-5">
        <li className="flex flex-col items-center gap-8 px-4 py-8 bg-[#f4f4f4] rounded-2xl">
          <div className="relative h-[7.25rem] aspect-square cursor-pointer">
            <Image src="/images/ipad.png" alt="apple ipad" fill />
          </div>
          <h3 className="text-sm font-semibold text-center cursor-pointer">
            Logitech Combo Touch keyboard case with trackpad for iPad Pro
            11-inch
          </h3>
        </li>

        <li className="flex flex-col items-center gap-8 py-8 bg-[#f4f4f4] rounded-2xl">
          <div className="relative h-[7.25rem] aspect-square cursor-pointer">
            <Image src="/images/headphone.png" alt="apple ipad" fill />
          </div>
          <h3 className="text-sm font-semibold text-center cursor-pointer">
            JBL CLUB 700BT Wireless On-Ear Headphones
          </h3>
        </li>

        <li className="flex flex-col items-center gap-8 py-8 bg-[#f4f4f4] rounded-2xl">
          <div className="relative h-[7.25rem] aspect-square cursor-pointer">
            <Image src="/images/light-bulb.png" alt="light bulb" fill />
          </div>
          <h3 className="text-sm font-semibold text-center cursor-pointer">
            Nanoleaf Essentials Matter A60 | E27 Smart Bulb (Each)
          </h3>
        </li>

        <li className="flex flex-col items-center gap-8 py-8 bg-[#f4f4f4] rounded-2xl">
          <div className="relative h-[7.25rem] aspect-square cursor-pointer">
            <Image src="/images/ipad.png" alt="apple ipad" fill />
          </div>
          <h3 className="text-sm font-semibold text-center cursor-pointer">
            Logitech Combo Touch keyboard case with trackpad for iPad Pro
            11-inch
          </h3>
        </li>

        <li className="flex flex-col items-center gap-8 py-8 bg-[#f4f4f4] rounded-2xl">
          <div className="relative h-[7.25rem] aspect-square cursor-pointer">
            <Image src="/images/ipad.png" alt="apple ipad" fill />
          </div>
          <h3 className="text-sm font-semibold text-center cursor-pointer">
            Apple iPad Pro 12.9&rdquo; 256GB WiFi
          </h3>
        </li>

        <li className="flex flex-col items-center gap-8 py-8 bg-[#f4f4f4] rounded-2xl">
          <div className="relative h-[7.25rem] aspect-square cursor-pointer">
            <Image src="/images/ipad.png" alt="apple ipad" fill />
          </div>
          <h3 className="text-sm font-semibold text-center cursor-pointer">
            Apple iPad Pro 12.9&rdquo; 256GB WiFi
          </h3>
        </li>
      </ul>
    </section>
  );
}

export default CategoriesSection;
