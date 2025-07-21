import { TTaxAdviceServiceProps } from "@/types/TaxAdviceService";
import TaxAdviceService from "./TaxAdviceService";

export default function TaxAdviceServiceSection({
  data,
  sectionMainTitle,
}: TTaxAdviceServiceProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-foreground mb-8 text-center text-2xl leading-tight font-medium sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl lg:mb-16 lg:text-[40px]">
          {sectionMainTitle}
        </h2>

        <TaxAdviceService data={data} lg={4} />
      </div>
    </section>
  );
}
