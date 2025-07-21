import { TApproach } from "@/types/ourApproach";
import TaxAdviceService from "./TaxAdviceService";

interface OurApproachProps {
  OurApproachData: TApproach;
}

export default function OurApproach({ OurApproachData }: OurApproachProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-foreground mx-auto mb-8 w-fit pb-8 text-center text-xl font-medium md:text-3xl lg:text-[40px]">
          Our Approach
        </h2>
        <TaxAdviceService data={OurApproachData} lg={3} xl={4} />
      </div>
    </section>
  );
}
