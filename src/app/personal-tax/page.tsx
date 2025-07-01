import PersonalTaxHeroSection from "@/components/personal-tax/PersonalTaxHeroSection";
import TaxAdviceServiceSection from "@/components/tax-advice/TaxAdviceServiceSection";
import TestimonialSection from "@/components/tax-advice/TestimonialSection";
import { TaxAdviceServiceProps } from "./taxAdviceServices";

export default function PersonalTaxPage() {
  return (
    <main>
      <PersonalTaxHeroSection />
      <TestimonialSection />
      <TaxAdviceServiceSection {...TaxAdviceServiceProps} />
    </main>
  );
}
