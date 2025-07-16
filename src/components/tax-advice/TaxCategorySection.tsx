import { TTaxCategoryProps } from "@/types/TaxCategoryProps";
import TaxCategories from "./TaxCategories";

export default function TaxCategorySection({
  taxCategories,
}: TTaxCategoryProps) {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-8 lg:max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-semibold">
          Need clarity on your tax situation?
        </h2>

        <p className="mb-8 max-w-xl text-center">
          We&apos;re here to help. These are just a few of the common questions
          clients bring to us – and we’ve got answers.
        </p>

        <TaxCategories taxCategories={taxCategories} />
      </div>
    </section>
  );
}
