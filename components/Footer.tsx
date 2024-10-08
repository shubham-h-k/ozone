import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import logo from "@/public/images/ozone-logo-white.svg";
import maestro from "@/public/images/maestro-logo.png";
import paypal from "@/public/images/paypal-logo-footer.png";
import visa from "@/public/images/visa-logo.png";
import discover from "@/public/images/discover-logo.png";
import americanExpress from "@/public/images/american-express-logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060127]">
      <div className="grid grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-x-12 gap-y-12 md:gap-y-9 max-width mx-auto padding-x py-8 md:py-12 xl:py-14 text-white">
        <div>
          <Image src={logo} alt="Website Logo" className="h-8 w-auto" />
          <p className="max-w-[27rem] md:max-w-64 xl:max-w-80 mt-4 xl:mt-6 font-medium">
            With full-stack expertise, Ozone helps you design, orchestrate and
            manage technologies that drive business success.
          </p>
          <section className="mt-6 xl:mt-4 ">
            <h2 className="text-lg font-bold">We Accept</h2>
            <ul className="flex gap-6 items-center mt-2 xl:mt-4">
              <li>
                <Image src={maestro} className="w-10" alt="Maestro Logo" />
              </li>
              <li>
                <Image src={paypal} className="w-10" alt="Paypal Logo" />
              </li>
              <li>
                <Image src={visa} className="w-10" alt="Visa Logo" />
              </li>
              <li>
                <Image src={discover} className="w-10" alt="Discover Logo" />
              </li>
              <li>
                <Image
                  src={americanExpress}
                  className="w-10"
                  alt="American Express Logo"
                />
              </li>
            </ul>
          </section>
        </div>

        <nav className="grid grid-cols-2 xs:grid-cols-3 gap-y-8 max-w-[44rem]">
          <section>
            <h2 className="text-lg font-semibold">About</h2>
            <ul className="flex flex-col gap-4 mt-4 xl:mt-5">
              <li>
                <Link className="font-semibold" href="/about-us">
                  Why us?
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/insights">
                  Insights
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/brands">
                  Brands
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Help</h2>
            <ul className="flex flex-col gap-4 mt-4 xl:mt-5">
              <li>
                <Link className="font-semibold" href="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="#faqssection">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/shop">
                  Product Finder
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/get-a-quote">
                  Get a quote
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Important Links</h2>
            <ul className="flex flex-col gap-4 mt-4 xl:mt-5">
              <li>
                <Link className="font-semibold" href="/dashboard">
                  Account
                </Link>
              </li>
              <li>
                {" "}
                <Link className="font-semibold" href="/insights">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/shop">
                  Products
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/our-team">
                  Our Team
                </Link>
              </li>
            </ul>
          </section>
        </nav>

        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 pt-4 border-t border-[#a1a1a1]">
          <ul className="flex self-center gap-6">
            <li>
              <Link href="/" scroll={false}>
                <span className="sr-only">Facebook page</span>
                <FaFacebook className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                scroll={false}
                className="flex items-center justify-center w-6 h-6 bg-white rounded-full"
              >
                <span className="sr-only">Twitter page</span>
                <FaXTwitter className="w-4 h-4 fill-black" />
              </Link>
            </li>
            <li>
              <Link href="/" scroll={false}>
                <span className="sr-only">Youtube page</span>
                <FaYoutube className="w-6 h-6" />
              </Link>
            </li>
          </ul>
          {/* <p className="xs:hidden text-xs font-semibold">
            2024 Ozone All Rights Reserved
          </p> */}
          <p className="text-xs font-semibold text-center">
            2024 Ozone All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
