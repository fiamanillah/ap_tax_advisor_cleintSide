import ServicesSection from "@/components/home/servicesSection";
import TaxAdviceServiceSection from "@/components/Shared/TaxAdviceServiceSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import ConsultantSection from "@/components/tax-advice/ConsultantSection";
import Feature from "@/components/tax-advice/Feature";
import TaxCategorySection from "@/components/tax-advice/TaxCategorySection";
import { delay } from "@/lib/utils";
import Hero from "../../../components/Shared/Hero";
import { heroSectionProps } from "./heroData";
import { serviceSectionProps } from "./servicesData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";
import { taxCategoryProps } from "./taxCategoryData";

export default async function page() {
  await delay(1000);
  return (
    <main className="space-y-8">
      <Hero {...heroSectionProps} />
      <TestimonialSection />
      <TaxCategorySection {...taxCategoryProps} />
      <ConsultantSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <ServicesSection {...serviceSectionProps} />
      {/* <GetStarted
        title="Get Started with Your Taxes"
        description={["Let us help you with your tax return process."]}
        buttonText="Get Started"
        classNames="bg-[#FFF6BD]"
      /> */}
      <Feature />
      {/* <FAQSection {...FAQSectionProps} />
      <CompanyTaxReturn {...companyTaxReturnProps} /> */}
      {/* <HowItWorksSection {...HowItWorksProps} /> */}
    </main>
  );
}
