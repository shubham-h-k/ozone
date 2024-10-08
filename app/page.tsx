import Header from "@/components/Header";
import HeroSection from "@/components/landing/HeroSection";
import ExploreSection from "@/components/landing/ExploreSection";
import CategoriesSection from "@/components/landing/CategoriesSection";
import InfoSection from "@/components/landing/InfoSection";
import WhyWorkWithUsSection from "@/components/landing/WhyWorkWithUsSection";
import OurClientsSection from "@/components/landing/OurClientsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ConsultationSection from "@/components/landing/ConsultationSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-[#FAFAFA]">
      <Header />

      <main>
        <div className="max-width mx-auto padding-x">
          <HeroSection />
          <ExploreSection />
          <CategoriesSection />
          <InfoSection />
          <WhyWorkWithUsSection />
          <OurClientsSection />
          <ProcessSection />
        </div>
        <ConsultationSection />
        <FaqSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
}
