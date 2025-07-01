import TaxCategories from "./TaxCategories";

export default function TaxCategorySection() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Need clarity on your tax situation?
        </h2>

        <p className="text-center max-w-xl">
          We&apos;re here to help. These are just a few of the common questions
          clients bring to us – and we’ve got answers.
        </p>

        <TaxCategories />
      </div>
    </section>
  );
}
