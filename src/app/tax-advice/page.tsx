import { FAQSection } from "@/components/Shared/FAQSection";
import GetStarted from "@/components/Shared/GetStarted";
import CompanyTaxReturn from "@/components/tax-advice/CompanyTaxReturn";

import ServicesSection from "@/components/home/servicesSection";
import ConsultantSection from "@/components/tax-advice/ConsultantSection";
import HowItWorksSection from "@/components/tax-advice/HowItWorksSection";
import TaxAdviceServiceSection from "@/components/tax-advice/TaxAdviceServiceSection";
import TaxCategorySection from "@/components/tax-advice/TaxCategorySection";
import TestimonialSection from "@/components/tax-advice/TestimonialSection";
import { FAQSectionProps } from "./faqdata";
import Hero from "./Hero";
import { HowItWorksProps } from "./howItWorkData";
import { serviceSectionProps } from "./servicesData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";
import { taxCategoryProps } from "./taxCategoryData";

export default function page() {
  return (
    <main className="space-y-8">
      <Hero />
      <TestimonialSection />
      <TaxCategorySection {...taxCategoryProps} />
      <ConsultantSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <ServicesSection {...serviceSectionProps} />
      <GetStarted />
      <FAQSection {...FAQSectionProps} />
      <CompanyTaxReturn />
      <HowItWorksSection {...HowItWorksProps} />
    </main>
  );
}
