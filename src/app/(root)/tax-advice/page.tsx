import { FAQSection } from "@/components/Shared/FAQSection";
import GetStarted from "@/components/Shared/GetStarted";
import CompanyTaxReturn from "@/components/tax-advice/CompanyTaxReturn";

import ServicesSection from "@/components/home/servicesSection";
import TaxAdviceServiceSection from "@/components/Shared/TaxAdviceServiceSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import ConsultantSection from "@/components/tax-advice/ConsultantSection";
import HowItWorksSection from "@/components/tax-advice/HowItWorksSection";
import TaxCategorySection from "@/components/tax-advice/TaxCategorySection";
import { delay } from "@/lib/utils";
import Hero from "../../../components/Shared/Hero";
import { companyTaxReturnProps } from "./companyTaxReturnData";
import { FAQSectionProps } from "./faqdata";
import { HowItWorksProps } from "./howItWorkData";
import { serviceSectionProps } from "./servicesData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";
import { taxCategoryProps } from "./taxCategoryData";

export default async function page() {
  await delay(1000);
  return (
    <main className="space-y-8">
      <Hero />
      <TestimonialSection />
      <TaxCategorySection {...taxCategoryProps} />
      <ConsultantSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <ServicesSection {...serviceSectionProps} />
      <GetStarted
        title="Get Started with Your Taxes"
        description={["Let us help you with your tax return process."]}
        buttonText="Get Started"
        classNames="bg-[#FFF6BD]"
      />
      <FAQSection {...FAQSectionProps} />
      <CompanyTaxReturn {...companyTaxReturnProps} />
      <HowItWorksSection {...HowItWorksProps} />
    </main>
  );
}
