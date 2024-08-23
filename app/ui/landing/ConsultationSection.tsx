export default function ConsultationSection() {
  return (
    <section className="margin-top-md bg-[#060127]">
      <div className="flex flex-col items-center gap-3 md:gap-6 padding-x py-20 md:py-[7.5rem] xl:py-40">
        <h2 className="text-3xl xs:text-[2rem] md:text-[2.5rem] lg:text-5xl xl:text-[3.5rem] font-semibold text-white text-center">
          Need a Consultation?
        </h2>
        <p className="md:text-xl xl:text-2xl text-white text-center">
          We&apos;re here to answer you 24/7
        </p>
        <button className="hover:-translate-y-1 duration-300 mt-3 md:mt-4 xl:mt-6 px-6 md:px-9 xl:px-12 py-3 md:py-[1.125rem] xl:py-6 text-sm md:text-base xl:text-lg font-semibold text-primary bg-white rounded-full">
          Contact us
        </button>
      </div>
    </section>
  );
}
