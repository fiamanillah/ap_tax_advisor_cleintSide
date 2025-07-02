import HeroSection from "@/components/home/heroSection";
import ServicesSection from "@/components/home/servicesSection";
import SupportHighlights from "@/components/home/SupportHighlights";
import Testimonials from "@/components/home/testimonial";
import { FAQSection } from "@/components/Shared/FAQSection";
import OurApproach from "@/components/Shared/OurApproach";
import { delay } from "@/lib/utils";
import { FAQSectionProps } from "./faqdata";
import { OurApproachData } from "./ourApproachData";
import { serviceSectionProps } from "./servicesData";

export default async function Home() {
  // Simulate a delay to show the loading state
  await delay(1000); // Adjust the delay as needed

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
