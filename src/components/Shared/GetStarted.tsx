import { cn } from "@/lib/utils";
import { AppButton } from "./AppButton";

interface GetStartedProps {
  title: string;
  description: string[];
  buttonText: string;
  classNames?: string;
}

export default function GetStarted({
  title,
  description,
  buttonText,
  classNames,
}: GetStartedProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl flex flex-col items-center">
        {/* New Call to Action Section */}
        <div
          className={cn(
            "w-full bg-[#A4F5D3] rounded-lg sm:rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center shadow-lg",
            classNames
          )}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 leading-tight">
            {title}
          </h2>
          <div className="text-gray-700 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl space-y-2 sm:space-y-3">
            {description.map((line, index) => (
              <p
                key={index}
                className="text-sm sm:text-base md:text-lg leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <AppButton className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold">
            {buttonText}
          </AppButton>
        </div>
      </div>
    </section>
  );
}
