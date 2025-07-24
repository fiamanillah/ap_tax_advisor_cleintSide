"use client";
import { list2 } from "@/app/(root)/(home)/list";
import Image from "next/image";

import { AppButton } from "../Shared/AppButton";
import Icon from "../Shared/Icon";
import SlideIn from "../animated/SlideIn";

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="main-gradient mx-auto flex items-center justify-center rounded-4xl py-20">
          {/* Text Section */}
          <SlideIn className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
            <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
              From compliance to strategy, <br /> we handle the detail so you{" "}
              <br /> can focus on growth.
            </h2>
            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              Running a company comes with complex tax responsibilities, but
              with the right support, it doesn’t have to be difficult. <br />
              <br /> At AP Tax Advisors, we take care of the compliance
              essentials and CFO-level support, while also helping directors,
              shareholders, and growing businesses plan ahead with confidence.{" "}
              <br />
              <br /> Whether you need a trusted compliance partner or strategic
              tax advice around structuring, profit extraction or future exit,
              we’ll make sure your business is fully supported and fully
              tax-efficient.
            </p>

            <div className="max-w-2xl">
              <p className="text-primary-foreground border-primary-foreground mb-4 border-b-2 pb-2 text-sm leading-relaxed sm:text-base md:text-lg">
                Accreditations
              </p>

              <ul className="text-primary-foreground grid grid-cols-1 items-start gap-2 sm:grid-cols-2 sm:gap-4">
                {list2.map(({ icon, text }, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Icon className="h-5 w-5" src={icon} />
                    <span className="text-muted-foreground text-sm">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <AppButton className="mt-8">Get started</AppButton>
            </div>
          </SlideIn>

          {/* Image Section */}
          <SlideIn
            direction="right"
            className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
          >
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px] xl:h-[520px] xl:w-[520px]">
              <Image
                src="/assets/corporate-tax-hero.png"
                alt="Professional tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 400px, (max-width: 1280px) 460px, 520px"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
