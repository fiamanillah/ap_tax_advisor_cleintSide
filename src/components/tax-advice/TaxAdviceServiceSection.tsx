import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";
import TaxAdviceService from "../Shared/TaxAdviceService";

export default function TaxAdviceServiceSection({
  data,
}: TTaxAdviceServiceProps) {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          How Our <span className="text-yellow-500">Tax Advice service</span>
          works
        </h2>

        <TaxAdviceService data={data} lg={3} />
      </div>
    </section>
  );
}
