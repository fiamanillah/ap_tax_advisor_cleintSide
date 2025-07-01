import { TApproach } from "@/types/ourApproach";
import TaxAdviceService from "./TaxAdviceService";

interface OurApproachProps {
  OurApproachData: TApproach;
}

export default function OurApproach({ OurApproachData }: OurApproachProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Approach</h2>

        <TaxAdviceService data={OurApproachData} lg={4} />
      </div>
    </section>
  );
}
