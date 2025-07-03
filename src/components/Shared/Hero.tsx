import { cn } from "@/lib/utils";
import { THeroSectionProps } from "@/types/HeroSectionProps";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AppButton } from "./AppButton";

export default function Hero({
  title,
  description,
  video,
  images,
  features,
  cta,
}: THeroSectionProps) {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      {video && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline>
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div
        className={cn("relative z-10 min-h-[calc(100vh-64px)] flex flex-col", {
          "bg-[#CFEDC7]": !video,
          "bg-black/30": video,
        })}>
        {/* Announcement Bar */}
        <div className="bg-[#A4F5D3] py-2 px-4">
          <p className="text-center text-black text-sm sm:text-base font-medium">
            New tax year, new return! File for 24/25 today🧑‍🚀
          </p>
        </div>

        {/* Main Hero Content */}
        <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 max-w-7xl">
          <div className="min-h-[calc(100vh-64px-80px)] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex flex-col lg:items-start justify-center w-full lg:w-1/2 lg:max-w-2xl lg:text-left order-2 lg:order-1">
              <h1
                className={cn(
                  "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6",
                  {
                    "text-black": !video,
                    "text-white": video,
                  }
                )}>
                {Array.isArray(title)
                  ? title.map((line, index) => (
                      <span key={index} className="block">
                        {line}
                      </span>
                    ))
                  : title}
              </h1>

              {description && (
                <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                  {description.map((line, index) => (
                    <p
                      key={index}
                      className={cn(
                        "text-base sm:text-lg md:text-xl leading-relaxed",
                        {
                          "text-black/80": !video,
                          "text-white/90": video,
                        }
                      )}>
                      {line}
                    </p>
                  ))}
                </div>
              )}

              {features && features.length > 0 && (
                <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 w-full max-w-md lg:max-w-none">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex gap-2 sm:gap-3 text-sm sm:text-base md:text-lg",
                        {
                          "text-black/80": !video,
                          "text-white/90": video,
                        }
                      )}>
                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="flex-shrink-0 sm:w-5 sm:h-5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {cta && (
                <div className="w-full sm:w-auto">
                  <AppButton className="w-full sm:w-auto lg:mr-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                    {cta.text}
                  </AppButton>
                </div>
              )}
            </div>

            {/* Image Content */}
            {images && (
              <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <Image
                    src={images}
                    alt="Hero illustration"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    width={600}
                    height={400}
                    loading="eager"
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
