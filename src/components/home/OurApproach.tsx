// components/OurApproach.tsx
import { steps } from "@/data/home";
import TaxAdviceService from "../tax-advice/TaxAdviceService";

export default function OurApproach() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>
        <TaxAdviceService data={steps} lg={3} xl={4} />
      </div>
    </section>
  );
}
