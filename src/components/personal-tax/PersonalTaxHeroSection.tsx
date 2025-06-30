import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PersonalTaxHeroSection() {
  return (
    <section className="bg-[#E5D4F7] py-16 relative">
      <div className="mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10 container">
        {/* Text Section */}
        <div className="max-w-[700px] w-full space-y-6">
          <h2 className="text-[40px] font-semibold text-[#141414]">
            Self assessment,
            <p>stress-free tax</p>
          </h2>
          <p className="text-gray-700 max-w-[400px]">
            Tax returns don’t need to be painful. well sort your self assessment
            for you.
          </p>
          <ul className="text-gray-800 space-y-2">
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
          <p className="text-gray-700">Excellent reviews in</p>
        </div>

        {/* Image Section */}
        <div className=" w-full max-w-[600px] flex justify-center items-center">
          <div className="relative rounded-full overflow-hidden w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
            <Image
              src="/assets/man.png"
              alt="Support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Icon */}
      <a
        href="#"
        className="absolute bottom-6 right-6 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/whatsapp.svg"
          alt="WhatsApp"
          width={48}
          height={48}
        />
      </a>
    </section>
  );
}
