"use client";
import { list2 } from "@/app/(root)/(home)/list";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

import { useRef } from "react";
import { AppButton } from "../Shared/AppButton";
import Icon from "../Shared/Icon";
import SlideIn from "../animated/SlideIn";

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<Element>(
        "[data-card]",
        container.current,
      );
      cards.forEach((card) => {
        gsap
          .timeline({ repeat: -1, yoyo: true })
          .to(card, { y: -10, duration: 1, ease: "power1.inOut" })
          .to(card, { y: 0, duration: 1, ease: "power1.inOut" });
      });
    },
    { scope: container },
  );

  return (
    <section className="">
      <div className="container mx-auto" ref={container}>
        <div className="main-gradient flex flex-col items-center justify-center gap-8 rounded-3xl py-6 sm:gap-10 sm:py-8 lg:flex-row lg:gap-12 lg:p-10 xl:gap-16 xl:p-20">
          {/* Text Section */}
          <SlideIn repeat>
            <div className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
              <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
                From compliance to strategy, we handle the detail so you can
                focus on growth.
              </h2>
              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                Running a company comes with complex tax responsibilities, but
                with the right support, it doesn’t have to be difficult.
              </p>
              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                At AP Tax Advisors, we take care of the compliance essentials
                and CFO-level support, while also helping directors,
                shareholders, and growing businesses plan ahead with confidence.
              </p>

              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                Whether you need a trusted compliance partner or strategic tax
                advice around structuring, profit extraction or future exit,
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
            </div>
          </SlideIn>

          {/* Image Section */}
          <SlideIn direction="right" repeat>
            <div className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]">
              <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
                <Image
                  src="/assets/corporate-tax-hero.png"
                  alt="Professional tax advisor support"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
                />
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
