import TaxQueryForm from "@/components/contact/taxQueryForm";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main>
      <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-around items-center gap-10">
        {/* Form Section */}
        <div className="w-full md:w-[50%]">
          <TaxQueryForm />
        </div>

        {/* Next Steps Flow */}
        <div>
          <Image
            src="/assets/query-flow.png"
            alt="Next Steps Flow"
            width={500}
            height={500}
            className="w-[300px]"
          />
        </div>
      </section>
    </main>
  );
}
