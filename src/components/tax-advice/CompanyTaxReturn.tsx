import { taxList } from "@/data/tax-advisor";
import Image from "next/image";
import { Button } from "../ui/button";

export default function CompanyTaxReturn() {
  return (
    <section>
      <div className="container mx-auto lg:max-w-6xl p-8 md:p-12 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            File your company tax return too
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-4">
            We can now help LTD companies file their tax return.
          </p>
          <ul className="space-y-3 text-gray-700 text-base md:text-lg w-full max-w-md lg:max-w-none text-left">
            {taxList.map((item) => (
              <li key={item.id} className="flex items-center">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" viewBox="0 0 20 20">
                  <circle cx="12" cy="12" r="8" fill="#A4F5D3" />
                  <path
                    d="M16 10l-5 5-3-3"
                    stroke="black"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item.title}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm md:text-base mt-6 mb-8">
            Same easy AP Tax Advisors, brand new service.
          </p>
          <Button>Learn more</Button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image
            src="/assets/tax-return.png" // Placeholder for the business meeting image
            alt="Business meeting"
            className="rounded-xl w-full h-auto object-cover max-w-md lg:max-w-full"
            width={500}
            height={350}
            priority
          />
        </div>
      </div>
    </section>
  );
}
