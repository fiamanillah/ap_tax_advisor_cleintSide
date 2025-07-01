import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";
import TaxAdviceService from "../Shared/TaxAdviceService";

export default function TaxAdviceServiceSection({
  data,
  sectionMainTitle,
}: TTaxAdviceServiceProps) {
  const titles = sectionMainTitle.split("@");

  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          {titles[0]} <span className="text-yellow-500">{titles[1]}</span>
          {titles[2]}
        </h2>

        <TaxAdviceService data={data} lg={3} />
      </div>
    </section>
  );
}
