import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function ContactFormSection() {
  return (
    <section className="margin-top-md bg-[#060127]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40fr_60fr] gap-6 md:gap-10 lg:gap-20 xl:gap-40 max-width mx-auto padding-x py-10 md:py-20  border-b border-[#fafafa] text-white">
        <div>
          <h2 className="text-2xl xl:text-[2rem] font-bold">
            Let our specialists help you!
          </h2>
          <p className="mt-4 text-sm md:text-base">
            For general questions, contact us at{" "}
          </p>
          <address className="mt-6">
            <div className="flex gap-3 items-center">
              <FaPhoneAlt className="w-5 h-5" />
              <a href="tel:+918800405240" className="not-italic underline">
                +91 8800405240
              </a>
            </div>

            <div className="flex gap-3 items-center mt-4">
              <IoMail className="w-5 h-5" />
              <a
                className="not-italic underline"
                href="mailto:shubham1235813@gmail.com"
              >
                shubham1235813@gmail.com
              </a>
            </div>
          </address>
          <p className="mt-6 md:mt-12 text-sm md:text-lg">
            or fill in the form and our team will quickly get in contact with
            you.
          </p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-4 md:gap-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="font-semibold">
              First name
            </label>
            <input
              id="firstName"
              className="p-3 bg-transparent border border-[#e4e4e7] rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="font-semibold">
              Last name
            </label>
            <input
              id="lastName"
              className="p-3 bg-transparent border border-[#e4e4e7] rounded"
            />
          </div>
          <div className="flex flex-col md:col-span-2 gap-2">
            <label htmlFor="message" className="font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="p-3 bg-transparent border border-[#e4e4e7] rounded"
            />
          </div>
          <button className="md:col-span-2 hover:-translate-y-1 duration-300 p-4 font-bold bg-primary rounded-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
