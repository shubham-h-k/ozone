import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";

import Heading from "@/components/Heading";

function ProcessSection() {
  return (
    <section className="margin-top-md">
      <Heading as="h2">
        Seamless Experience Package: Shipping, Support, Returns, and Rewards
      </Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:justify-items-center sm:gap-x-10 gap-y-10 mt-4 md:mt-8 px-6 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 xl:py-16 bg-[#7676ff1b] rounded-[2rem]">
        <div className="flex flex-col items-center  sm:items-start">
          <div className="inline-block p-2 bg-primary rounded-xl">
            <FaShippingFast className="w-12 h-12" />
          </div>
          <h3 className="mt-4 md:mt-9 md:text-xl font-bold text-center sm:text-start">
            Free Shipping
          </h3>
          <p className="mt-3 text-sm text-[#4D4D4D] font-semibold text-center sm:text-start">
            Nationwide delivery at no extra cost.
          </p>
        </div>

        <div className="flex flex-col items-center  sm:items-start">
          <div className="inline-block p-2 bg-primary rounded-xl">
            <BiSupport className="w-12 h-12" />
          </div>
          <h3 className="mt-4 md:mt-9 md:text-xl font-bold text-center sm:text-start">
            End-to-End Support
          </h3>
          <p className="mt-3 text-sm text-[#4D4D4D] font-semibold text-center sm:text-start">
            Quick one-to-one assistance with our experts
          </p>
        </div>

        <div className="flex flex-col items-center  sm:items-start">
          <div className="inline-block p-2 bg-primary rounded-xl">
            <RiRefund2Line className="w-12 h-12" />
          </div>
          <h3 className="mt-4 md:mt-9 md:text-xl font-bold text-center sm:text-start">
            Easy Refund Policy
          </h3>
          <p className="mt-3 text-sm text-[#4D4D4D] font-semibold text-center sm:text-start">
            Hassle-free 30-day return policy
          </p>
        </div>

        <div className="flex flex-col items-center  sm:items-start">
          <div className="inline-block p-2 bg-primary rounded-xl">
            <MdDiscount className="w-12 h-12" />
          </div>
          <h3 className="mt-4 md:mt-9 md:text-xl font-bold text-center sm:text-start">
            Exclusive Offers
          </h3>
          <p className="mt-3 text-sm text-[#4D4D4D] font-semibold text-center sm:text-start">
            Enjoy exciting offers and hampers as our valued client
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
