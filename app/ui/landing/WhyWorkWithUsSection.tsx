import Heading from "@/app/ui/Heading";
import { FaLaptop } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function WhyWorkWithUsSection() {
  return (
    <section className="max-width mx-auto margin-top-md padding-x">
      <Heading as="h2">Why work with A5 IT?</Heading>
      <p className="max-w-[50rem] mx-auto mt-2 md:mt-3 mb-8 md:mb-11 text-sm md:text-base md:font-semibold text-[#4D4D4D] text-center">
        A5 IT, a world-renowned network hardware supplier, is committed to
        catering to clients of various scales, encompassing resellers, system
        integrators, and end-users.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-3 md:gap-x-4 xl:gap-x-5 gap-y-4">
        <div className="flex flex-col items-center gap-4 px-5 md:px-6 py-10 bg-[#f4f4f4] rounded-[2rem]">
          <FaLaptop className="w-16 h-16 md:mb-2 xl:mb-6 fill-primary" />
          <h3 className="xl:text-xl font-bold text-center">
            Expertise and Experience
          </h3>
          <p className="text-sm text-[#4d4d4d] text-center">
            Partner with A5 IT, a global network hardware supplier, for tailored
            solutions backed by unmatched industry expertise. Elevate your
            network infrastructure with confidence.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 px-5 md:px-6 py-10 bg-[#f4f4f4] rounded-[2rem]">
          <FaHandshake className="w-16 h-16 md:mb-2 xl:mb-6 fill-primary" />
          <h3 className="xl:text-xl font-bold text-center">
            Industry Leading Partnership
          </h3>
          <p className="text-sm text-[#4d4d4d] text-center">
            Choose A5 IT for more than products – choose a dynamic partnership.
            Collaborate with industry leaders to stay ahead in an ever-evolving
            landscape. Success is our shared journey.
          </p>
        </div>

        <div className="flex flex-col items-center sm:col-span-2 md:col-auto sm:justify-self-center gap-4 px-5 md:px-6 py-10 bg-[#f4f4f4] rounded-[2rem]">
          <BiSupport className="w-16 h-16 md:mb-2 xl:mb-6 fill-primary" />
          <h3 className="xl:text-xl font-bold text-center">
            24/7 End to End Support
          </h3>
          <p className="text-sm text-[#4d4d4d] text-center">
            With A5 IT, support never sleeps. Enjoy peace of mind with 24/7
            end-to-end support. Whether you&apos;re a reseller, integrator, or
            end-user, we&apos;ve got your back, ensuring your network runs
            seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
}
