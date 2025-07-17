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
  reverseLayout = false,
}: TCompanyTaxReturnProps) {
  return (
    <section>
      <div
        className={cn(
          "container mx-auto flex flex-col items-center gap-8 py-8 text-center sm:gap-10 sm:py-10 md:gap-12 md:py-12 lg:flex-row lg:items-start lg:gap-16 lg:py-16 lg:text-left",
          {
            "lg:flex-row-reverse": !hint,
          },
        )}
      >
        <div
          className={cn("section-inverted-radius flex w-full", {
            "flex-row-reverse": reverseLayout,
          })}
        >
          {/* Left Content */}
          <div className="order-2 flex w-full flex-col items-center justify-center lg:order-1 lg:w-2/3 lg:items-start">
            <h2 className="mb-4 text-2xl leading-tight font-medium text-gray-800 sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl">
              {title}
            </h2>
            <p className="mb-4 max-w-md text-sm leading-relaxed text-gray-600 sm:mb-5 sm:text-base md:mb-6 md:text-lg lg:max-w-none lg:text-xl">
              {description}
            </p>
            <ul className="mb-6 w-full max-w-md space-y-3 text-left text-sm text-gray-700 sm:mb-8 sm:space-y-4 sm:text-base md:text-lg lg:max-w-none">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                  >
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
              <p className="mb-6 max-w-md text-xs leading-relaxed text-gray-600 sm:mb-8 sm:text-sm md:text-base lg:max-w-none">
                {hint}
              </p>
            )}
            <AppButton
              className={cn(
                "px-6 py-3 text-base font-semibold sm:px-8 sm:py-4 sm:text-lg md:px-10",
                {
                  "mt-2 sm:mt-4": hint,
                },
              )}
            >
              {buttonText}
            </AppButton>
          </div>

          {/* Right Image */}
          <div className="order-1 flex w-full items-center justify-center lg:order-2 lg:w-1/2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <Image
                src={image}
                alt={title}
                className="h-auto w-full rounded-lg object-cover sm:rounded-xl"
                width={500}
                height={350}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
