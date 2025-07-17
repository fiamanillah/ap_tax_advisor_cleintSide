// import { THeroSectionProps } from "@/types/HeroSectionProps";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AppButton } from "./AppButton";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="main-gradient flex flex-col items-center justify-center gap-8 rounded-xl py-6 sm:gap-10 sm:py-8 lg:flex-row lg:gap-12 lg:p-10 xl:gap-16 xl:p-20">
          {/* Text Section */}
          <div className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
            <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
              Your company accounts & tax return sorted, for less
            </h2>

            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              Professional help, simple tech. Let us sort your small business
              accounts without the stress.
            </p>

            <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
              {[
                "Sorted by an accredited accountant",
                "Easy, online and always jargon-free",
                "One-off, affordable price",
              ].map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <AppButton className="mt-8">Get Started</AppButton>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]">
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
              <Image
                src="/assets/corporate-hero.png"
                alt=" corporate tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
