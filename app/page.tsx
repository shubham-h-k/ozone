import Header from "@/app/ui/Header";
import HeroSection from "@/app/ui/landing/HeroSection";
import ExploreSection from "@/app/ui/landing/ExploreSection";
import CategoriesSection from "@/app/ui/landing/CategoriesSection";
import InfoSection from "@/app/ui/landing/InfoSection";
import WhyWorkWithUsSection from "@/app/ui/landing/WhyWorkWithUsSection";
import OurClientsSection from "@/app/ui/landing/OurClientsSection";
import ProcessSection from "@/app/ui/landing/ProcessSection";
import ConsultationSection from "@/app/ui/landing/ConsultationSection";
import FaqSection from "@/app/ui/landing/FaqSection";
import ContactFormSection from "@/app/ui/landing/ContactFormSection";
import Footer from "@/app/ui/Footer";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ExploreSection />
        <CategoriesSection />
        <InfoSection />
        <WhyWorkWithUsSection />
        <OurClientsSection />
        <ProcessSection />
        <ConsultationSection />
        <FaqSection />
        <ContactFormSection />
      </main>

      <Footer />
    </>
  );
}
