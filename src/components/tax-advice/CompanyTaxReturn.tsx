import { cn } from "@/lib/utils";
import { TCompanyTaxReturnProps } from "@/types/TCompanyTaxReturn";
import Image from "next/image";
import { AppButton } from "../Shared/AppButton";

export default function CompanyTaxReturn({
  title,
  description,
  buttonText,
  features,
  image,
  hint,
}: TCompanyTaxReturnProps) {
  return (
    <section
      className={cn("py-8 sm:py-12 md:py-16 lg:py-20", {
        "bg-[#CFEDC7]": !hint,
      })}>
      <div
        className={cn(
          "container mx-auto lg:max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-8 sm:gap-10 md:gap-12 lg:gap-16",
          {
            "lg:flex-row-reverse": !hint,
          }
        )}>
        {/* Left Content */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:items-start order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed max-w-md lg:max-w-none">
            {description}
          </p>
          <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg w-full max-w-md lg:max-w-none text-left mb-6 sm:mb-8">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0"
                  viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#A4F5D3" />
                  <path
                    d="M8 12l2 2 4-4"
                    stroke="black"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          {hint && (
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md lg:max-w-none">
              {hint}
            </p>
          )}
          <AppButton
            className={cn(
              "px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold",
              {
                "mt-2 sm:mt-4": hint,
              }
            )}>
            {buttonText}
          </AppButton>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <Image
              src={image}
              alt={title}
              className="rounded-lg sm:rounded-xl w-full h-auto object-cover shadow-lg"
              width={500}
              height={350}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
