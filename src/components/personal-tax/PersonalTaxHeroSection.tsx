import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { AppButton } from "../Shared/AppButton";

export default function PersonalTaxHeroSection() {
  return (
    <section className="bg-[#CFEDC7]">
      <div className="bg-[#A4F5D3] p-1">
        <p className="text-center text-[16px]">
          New tax year, new return! File for 24/25 today🧑‍🚀
        </p>
      </div>

      <div className="mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10 container py-16">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-[40px] font-semibold">
            Self assessment,
            <p>stress-free tax</p>
          </h2>
          <p className="">
            Tax returns don’t need to be painful. well sort your self assessment
            for you.
          </p>
          <ul className="space-y-2">
            {[
              "Simple, fast, all online",
              "Sorted by an accredited accountant",
              "Field in as little as 48 hours",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <ArrowRight className=" mt-1 w-4 h-4" />
                {text}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span>Excellent reviews in</span>
            <FaStar className="text-[#00B67A]" />
            <span className="font-semibold">Trustpilot</span>
          </div>

          <AppButton>Get started</AppButton>
        </div>

        {/* Image Section */}
        <div className=" w-full max-w-[600px] flex justify-center items-center">
          <div className="relative rounded-full overflow-hidden w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
            <Image
              src="/assets/man.png"
              alt="Support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
