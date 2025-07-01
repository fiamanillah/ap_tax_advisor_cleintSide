import TaxQueryForm from "@/components/contact/taxQueryForm";
import React from "react";

export default function page() {
  return (
    <section>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center">
        {/* Form Section */}
        <div>
          <TaxQueryForm />
        </div>

        {/* Next Steps Flow */}
        <div>next steps flow</div>
      </div>
    </section>
  );
}
