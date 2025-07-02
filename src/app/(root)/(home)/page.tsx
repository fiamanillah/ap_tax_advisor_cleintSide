import HeroSection from "@/components/home/heroSection";
import ServicesSection from "@/components/home/servicesSection";
import SupportHighlights from "@/components/home/SupportHighlights";
import Testimonials from "@/components/home/testimonial";
import { FAQSection } from "@/components/Shared/FAQSection";
import OurApproach from "@/components/Shared/OurApproach";
import { FAQSectionProps } from "./faqdata";
import { OurApproachData } from "./ourApproachData";
import { serviceSectionProps } from "./servicesData";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <OurApproach OurApproachData={OurApproachData} />
      <SupportHighlights />
      <ServicesSection {...serviceSectionProps} />
      <FAQSection {...FAQSectionProps} />
    </>
  );
}
