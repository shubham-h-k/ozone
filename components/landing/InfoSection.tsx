import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";

import Heading from "@/components/Heading";
import infoSection1 from "@/public/images/info-section-1.png";
import infoSection2 from "@/public/images/info-section-2.png";

export default function InfoSection() {
  return (
    <section className="margin-top-md">
      <Heading as="h2">Unlock Your Business Potential with Ozone</Heading>
      <p className="max-w-[50rem] mx-auto mt-2 md:mt-4 mb-8 md:mb-16 text-sm md:text-base md:font-semibold text-[#4D4D4D] text-center">
        In today&apos;s dynamic market, finding a reliable IT partner is key to
        overcoming challenges and maximizing your business potential. At Ozone,
        we are your go-to full-service technology solutions provider, offering
        deep industry expertise across various technology domains.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-x-6 gap-y-6 md:gap-y-16">
        <div className="md:col-start-2 md:row-start-1 rounded-[2rem] overflow-hidden">
          <Image
            src={infoSection1}
            alt="Woman listening on headphone"
            className="w-full"
            placeholder="blur"
          />
        </div>

        <div className="md:col-start-1 md:row-start-1 md:max-w-[30rem] mb-6 md:mb-0">
          <h3 className="mb-4 xl:mb-10 text-xl lg:text-2xl xl:text-[2rem] font-bold text-primary">
            What Sets Us Apart?
          </h3>
          <ul className="flex flex-col gap-4 xl:gap-6">
            <li className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <IoCheckmarkCircle className="xl:w-5 xl:h-5 fill-primary " />
              <h4 className="xl:text-lg font-semibold">
                Comprehensive Services:
              </h4>
              <p className="col-start-2 text-sm">
                From security to networking and storage, we cover it all.
              </p>
            </li>
            <li className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <IoCheckmarkCircle className="md:w-5 md:h-5 fill-primary " />
              <h4 className="font-semibold">Expert Guidance:</h4>
              <p className="col-start-2 text-sm">
                Let our team assist you in choosing, deploying, and managing the
                right solutions tailored to your needs.
              </p>
            </li>
            <li className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <IoCheckmarkCircle className="md:w-5 md:h-5 fill-primary " />
              <h4 className="font-semibold">Digital Transformation:</h4>
              <p className="col-start-2 text-sm">
                Ozone specializes in elevating your business to a digital
                enterprise, exceeding traditional IT boundaries.
              </p>
            </li>
          </ul>
        </div>

        {/* <div className=" overflow-hidden"> */}
        <Image
          src={infoSection2}
          alt="two customers checking phones in the store"
          className="w-full rounded-[2rem]"
          placeholder="blur"
        />
        {/* </div> */}

        <div className="md:justify-self-center md:max-w-[30rem]">
          <h3 className="mb-4 xl:mb-10 text-xl lg:text-2xl xl:text-[2rem] font-bold text-primary">
            Why choose Ozone?
          </h3>
          <div className="flex flex-col gap-4 xl:gap-6">
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <IoCheckmarkCircle className="xl:w-5 xl:h-5 fill-primary " />
              <h4 className="xl:text-lg font-semibold">
                End-to-End Solutions:
              </h4>
              <p className="col-start-2 text-sm">
                Seamlessly integrated solutions for optimized performance.
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <IoCheckmarkCircle className="md:w-5 md:h-5 fill-primary " />
              <h4 className="font-semibold">Value Driven:</h4>
              <p className="col-start-2 text-sm">
                Get the most value from your technology investments.
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1">
              <IoCheckmarkCircle className="md:w-5 md:h-5 fill-primary " />
              <h4 className="font-semibold">Mission-focused:</h4>
              <p className="col-start-2 text-sm">Our mission is your success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
