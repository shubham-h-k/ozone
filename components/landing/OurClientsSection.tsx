import Image from "next/image";

import Heading from "@/components/Heading";
import facebookLogo from "@/public/images/facebook-logo.png";
import pbsLogo from "@/public/images/pbs-logo.png";
import paypalLogo from "@/public/images/paypal-logo.png";
import xboxLogo from "@/public/images/xbox-logo.png";
import hiltonLogo from "@/public/images/hilton-logo.png";
import trumpLogo from "@/public/images/trump-logo.png";
import spacexLogo from "@/public/images/spacex-logo.png";
import playstationLogo from "@/public/images/playstation-logo.png";

export default function OurClientsSection() {
  return (
    <section className="margin-top-md">
      <Heading as="h2">Our Trusted Clients</Heading>
      <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8  gap-2 xs:gap-3 md:gap-4 mt-4 md:mt-10">
        <div className="flex items-center justify-center md:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={facebookLogo}
            alt="facebook-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={pbsLogo}
            alt="pbs-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={paypalLogo}
            alt="paypal-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={xboxLogo}
            alt="xbox-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={hiltonLogo}
            alt="hilton-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={trumpLogo}
            alt="trump-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-3 xl:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={spacexLogo}
            alt="spacex-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
        <div className="flex items-center justify-center md:col-span-3 xl:col-span-2 h-36 bg-white rounded-lg shadow-3xl">
          <Image
            src={playstationLogo}
            alt="playstation-logo"
            className="scale-75 sm:scale-100"
          />
        </div>
      </div>
    </section>
  );
}
