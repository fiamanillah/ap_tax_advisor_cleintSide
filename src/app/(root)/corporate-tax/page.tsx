import SubscriptionPlan from "@/components/corporate-tax/SubscriptionPlan";
import ServicesSection from "@/components/home/servicesSection";
import { FAQSection } from "@/components/Shared/FAQSection";
import GetStarted from "@/components/Shared/GetStarted";
import Hero from "@/components/Shared/Hero";
import TaxAdviceServiceSection from "@/components/Shared/TaxAdviceServiceSection";
import TestimonialSection from "@/components/Shared/TestimonialSection";
import CompanyTaxReturn from "@/components/tax-advice/CompanyTaxReturn";
import { companyTaxReturnProps } from "./companyTaxReturnData";
import { FAQSectionProps } from "./faqdata";
import { heroSectionProps } from "./heroData";
import { serviceSectionProps } from "./servicesData";
import { subscriptionProps } from "./subscriptionData";
import { TaxAdviceServiceProps } from "./taxAdviceServices";

export default function page() {
  return (
    <main className="space-y-8">
      <Hero {...heroSectionProps} />
      <TestimonialSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
      <ServicesSection {...serviceSectionProps} />
      <GetStarted
        title="Ready to file"
        description={["Let’s get your corporate tax return sorted today."]}
        buttonText="Get Started"
        classNames="bg-[#FFF6BD]"
      />
      <FAQSection {...FAQSectionProps} />
      <CompanyTaxReturn {...companyTaxReturnProps} />
      <SubscriptionPlan {...subscriptionProps} />
      <GetStarted
        title="Why choose AP Tax Advisor?"
        description={[
          "No matter how complicated it gets or why you need to do a return,it’ll cost £169.",
          "That includes VAT, last-minute changes and all the support you may need.",
        ]}
        buttonText="Get Started"
        classNames="bg-[#FFF6BD]"
      />
    </main>
  );
}
