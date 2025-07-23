import ServicesSection from "@/components/home/servicesSection";
import { FAQSection } from "@/components/Shared/FAQSection";
import TaxAdviceServiceSection from "@/components/Shared/TaxAdviceServiceSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import ConsultantSection from "@/components/tax-advice/ConsultantSection";
import Feature from "@/components/tax-advice/Feature";
import HeroSection from "@/components/tax-advice/heroSection";
import TaxCategorySection from "@/components/tax-advice/TaxCategorySection";
import { delay } from "@/lib/utils";
import { FAQSectionProps } from "./faqdata";
import { serviceSectionProps } from "./servicesData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";
import { taxCategoryProps } from "./taxCategoryData";

export default async function page() {
  await delay(1000);
  return (
    <main className="space-y-8">
      <HeroSection />
      <TestimonialSection />
      <TaxCategorySection {...taxCategoryProps} />
      <ConsultantSection buttonText="Book now" />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <ServicesSection {...serviceSectionProps} />
      {/* <GetStarted
        title="Get Started with Your Taxes"
        description={["Let us help you with your tax return process."]}
        buttonText="Get Started"
        classNames="bg-[#FFF6BD]"
      /> */}
      <Feature />
      <FAQSection {...FAQSectionProps} />
      {/* 
      <CompanyTaxReturn {...companyTaxReturnProps} /> */}
      {/* <HowItWorksSection {...HowItWorksProps} /> */}
    </main>
  );
}
