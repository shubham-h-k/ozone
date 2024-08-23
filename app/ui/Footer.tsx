import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import logoFooter from "@/public/images/logo-footer.png";
import maestro from "@/public/images/maestro-logo.png";
import paypal from "@/public/images/paypal-logo-footer.png";
import visa from "@/public/images/visa-logo.png";
import discover from "@/public/images/discover-logo.png";
import americanExpress from "@/public/images/american-express-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#060127]">
      <div className="grid grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-x-12 gap-y-12 md:gap-y-9 max-width mx-auto padding-x py-8 md:py-12 xl:py-14 text-white border-t border-[#fafafa]">
        <div>
          <Image width={48} height={48} src={logoFooter} alt="A5 Logo" />
          <p className="max-w-[27rem] md:max-w-64 xl:max-w-80 mt-4 xl:mt-6 font-medium">
            With full-stack expertise, A5 IT helps you design, orchestrate and
            manage technologies that drive business success.
          </p>
          <section className="mt-6 xl:mt-4 ">
            <h2 className="text-lg font-bold">We Accept</h2>
            <ul className="flex gap-6 items-center mt-2 xl:mt-4">
              <li>
                <Image
                  src={maestro}
                  width={40}
                  height={28}
                  alt="Maestro Logo"
                />
              </li>
              <li>
                <Image src={paypal} width={40} height={28} alt="Paypal Logo" />
              </li>
              <li>
                <Image src={visa} width={40} height={28} alt="Visa Logo" />
              </li>
              <li>
                <Image
                  src={discover}
                  width={40}
                  height={28}
                  alt="Discover Logo"
                />
              </li>
              <li>
                <Image
                  src={americanExpress}
                  width={40}
                  height={28}
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
                <a className="font-semibold" href="/about-us">
                  Why us?
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/about-us">
                  About Us
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/insights">
                  Insights
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/brands">
                  Brands
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Help</h2>
            <ul className="flex flex-col gap-4 mt-4 xl:mt-5">
              <li>
                <a className="font-semibold" href="/contact-us">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/#faqssection">
                  FAQs
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/shop">
                  Product Finder
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/get-a-quote">
                  Get a quote
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold">Important Links</h2>
            <ul className="flex flex-col gap-4 mt-4 xl:mt-5">
              <li>
                <a className="font-semibold" href="/dashboard">
                  Account
                </a>
              </li>
              <li>
                {" "}
                <a className="font-semibold" href="/insights">
                  Blog
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/shop">
                  Products
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/our-team">
                  Our Team
                </a>
              </li>
            </ul>
          </section>
        </nav>

        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 pt-4 border-t border-[#a1a1a1]">
          <ul className="flex self-center gap-6">
            <li>
              <a href="#">
                <FaFacebook className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center w-6 h-6 bg-white rounded-full"
              >
                <FaXTwitter className="w-4 h-4 fill-black" />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className="w-6 h-6" />
              </a>
            </li>
          </ul>
          <p className="xs:hidden text-xs font-semibold">
            2023 A5 IT All Rights Reserved <br />
            8231 Bay Colony Dr, #1401, Naples, Florida, 34108 United States
          </p>
          <p className="hidden xs:block text-xs font-semibold">
            2023 A5 IT All Rights Reserved - 8231 Bay Colony Dr, #1401, Naples,
            Florida, 34108 United States
          </p>
        </div>
      </div>
    </footer>
  );
}
