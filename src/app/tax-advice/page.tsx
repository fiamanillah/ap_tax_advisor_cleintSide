import { FAQSection } from "@/components/Shared/FAQSection";
import GetStarted from "@/components/Shared/GetStarted";
import CompanyTaxReturn from "@/components/tax-advice/CompanyTaxReturn";

import ServicesSection from "@/components/home/servicesSection";
import ConsultantSection from "@/components/tax-advice/ConsultantSection";
import TaxAdviceServiceSection from "@/components/tax-advice/TaxAdviceServiceSection";
import TaxCategorySection from "@/components/tax-advice/TaxCategorySection";
import TestimonialSection from "@/components/tax-advice/TestimonialSection";
import { FAQSectionProps } from "./faqdata";
import Hero from "./Hero";
import { serviceSectionProps } from "./servicesData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";

export default function page() {
  return (
    <main className="space-y-8">
      <Hero />
      <TestimonialSection />
      <TaxCategorySection />
      <ConsultantSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <ServicesSection {...serviceSectionProps} />
      <GetStarted />
      <FAQSection {...FAQSectionProps} />
      <CompanyTaxReturn />
    </main>
  );
}
