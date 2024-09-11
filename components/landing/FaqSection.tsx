"use client";

import { useState } from "react";
import Image from "next/image";
import { GrAdd } from "react-icons/gr";
import { GrSubtract } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

import messageLogo from "@/public/images/message-logo.png";

const faqs = [
  {
    id: "00",
    question:
      "Can you assist in selecting the right IT hardware services for my business?",
    answer:
      "Absolutely, we offer expert consultation to help you choose IT hardware services that aligns  with your specific needs, ensuring optimal functionality and cost-effectiveness.",
  },
  {
    id: "01",
    question:
      "How can I inquire about and purchase new hardware with our existing systems?",
    answer:
      "Visit our online store to explore a wide range of IT hardware Services, from routers and switches to other networking products. Easily make purchases that fit your requirements.",
  },
  {
    id: "02",
    question:
      "Can you seamlessly integrate new hardware with our existing systems?",
    answer:
      "Definitely, we specialize in smooth integration of new hardware components with your current infrastructure, minimizing disruption to your operations.",
  },
  {
    id: "03",
    question:
      "Can I find specialized industry-specific software services in Chicago?",
    answer:
      "Absolutely, A5 IT's software services Chicago offers solutions for various industries, such as finance, healthcare, manufacturing, and more, ensuring tailored software solutions for your specific business needs.",
  },
  {
    id: "04",
    question: "How do I choose the right software service provider in Chicago?",
    answer:
      "When selecting a software service Chicago, consider their expertise, portfolio, client reviews, and the ability to align their solutions with your business goals and industry requirements.",
  },
];

export default function FaqSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleSelection(id: string) {
    setSelectedId(id === selectedId ? null : id);
  }

  return (
    <section
      id="faqssection"
      className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-8 max-width mx-auto margin-top-md padding-x"
    >
      <ul className="flex flex-col gap-5 md:pt-12">
        {faqs.map((el) => (
          <Accordian
            key={el.question}
            id={el.id}
            question={el.question}
            answer={el.answer}
            selectedId={selectedId}
            onSelection={handleSelection}
          />
        ))}
      </ul>
      <div className="flex flex-col md:col-start-1 md:row-start-1 items-center gap-6  md:max-w-96  p-10 bg-[#f3f3f3] border border-[#efefef] rounded-[2rem]">
        <div className="w-[5.25rem]">
          <Image src={messageLogo} alt="Message logo" className="w-full" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-center">
            Have other questions?
          </h2>
          <p className="mt-2 text-sm text-[#4d4d4d] text-center">
            Our team will answer all your questions. We ensure a quick response.
          </p>
        </div>
        <button className="flex items-center gap-2 hover:-translate-y-1 duration-300 px-6 py-3 text-sm font-bold text-white bg-primary rounded-full">
          <span>
            <FaPhoneAlt className="w-4 h-4 fill-white" />
          </span>
          Contact Support Team
        </button>
      </div>
    </section>
  );
}

interface PropsAccordian {
  id: string;
  question: string;
  answer: string;
  selectedId: string | null;
  onSelection: (id: string) => void;
}

function Accordian({
  id,
  question,
  answer,
  selectedId,
  onSelection,
}: PropsAccordian) {
  const selected = id === selectedId;

  return (
    <li className="grid grid-cols-[1fr_auto] gap-3">
      <h3 className="text-sm sm:text-base md:text-sm lg:text-base font-semibold">
        {question}
      </h3>
      <button className="self-start" onClick={() => onSelection(id)}>
        {selected ? (
          <>
            <span className="sr-only">Collapse content</span> <GrSubtract />
          </>
        ) : (
          <>
            {" "}
            <span className="sr-only">Expand content</span>
            <GrAdd />
          </>
        )}
      </button>

      <p
        className={`${
          selected ? "block" : "hidden"
        } col-span-2 p-3 text-sm lg:text-base text-[#4d4d4d] bg-[#a5a6f61a] border border-[#cfcaca] rounded-xl`}
      >
        {answer}
      </p>
    </li>
  );
}
