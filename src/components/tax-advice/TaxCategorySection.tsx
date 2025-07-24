"use client";
import { TTaxCategoryProps } from "@/types/TaxCategoryProps";
import gsap, { ScrollTrigger } from "gsap/all";
import TaxCategories from "./TaxCategories";

gsap.registerPlugin(ScrollTrigger);

export default function TaxCategorySection({
  taxCategories,
}: TTaxCategoryProps) {
  return (
    <section>
      <div className="container mx-auto flex max-w-6xl flex-col items-center">
        <h2 className="mb-4 text-center text-[40px] font-medium">
          Need clarity on your tax situation?
        </h2>

        <p className="mb-8 max-w-xl text-center text-base font-normal">
          We&apos;re here to help. These are just a few of the common questions
          clients bring to us – and we’ve got answers.
        </p>

        <TaxCategories taxCategories={taxCategories} />
      </div>
    </section>
  );
}
