import TaxQueryForm from "@/components/contact/taxQueryForm";
import { delay } from "@/lib/utils";
import Image from "next/image";

export default async function page() {
  await delay(1000);
  return (
    <main>
      <section className="container mx-auto -mt-1">
        {/* Form Section */}
        <div className="main-gradient flex flex-col items-center justify-around gap-10 rounded-tl-xl rounded-b-xl px-4 py-10 md:flex-row">
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
        </div>
      </section>
    </main>
  );
}
