"use client";
import { list2 } from "@/app/(root)/(home)/list";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { AppButton } from "../Shared/AppButton";
import Icon from "../Shared/Icon";
import TagCard from "../Shared/TagCard";

export default function HeroSection() {
  const container = useRef(null);
  useGSAP(
    () => {
      const cards = gsap.utils.toArray<Element>("[data-card]");

      cards.forEach((card) => {
        gsap
          .timeline({
            repeat: -1,
            yoyo: true,
          })
          .to(card, {
            y: -10,
            duration: 1,
            ease: "power1.inOut",
          })
          .to(card, {
            y: 0,
            duration: 1,
            ease: "power1.inOut",
          });
      });
    },
    { scope: container },
  );

  const textRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
      },
    );
  }, []);

  const imageRef = useRef<HTMLDivElement>(null);

  // Image section animation (from right)
  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <section className="">
      <div className="container mx-auto" ref={container}>
        <div className="main-gradient flex flex-col items-center justify-center gap-8 rounded-3xl py-6 sm:gap-10 sm:py-8 lg:flex-row lg:gap-12 lg:p-10 xl:gap-16 xl:p-20">
          {/* Text Section */}
          <div
            ref={textRef}
            className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]"
          >
            <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
              Protect, grow and preserve your wealth
            </h2>

            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              We work closely with you to build a proactive tax strategy that
              aligns with your goals, ensures your affairs are structured
              efficiently, and helps you retain more of your wealth. From
              optimising your current position to planning for the long term,
              our advice is designed to support growth, protection, and smart
              succession... whatever your ambitions.
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

              <AppButton className="mt-10">Get started</AppButton>
            </div>
          </div>

          {/* Image Section */}
          <div
            ref={imageRef}
            className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
          >
            <div className="relative h-[250px] w-[250px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
              <Image
                src="/assets/tax-advice-hero.png"
                alt="Professional tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              />
            </div>

            {/* Floating Cards - Responsive positioning */}

            <TagCard
              title="Childcare"
              checked={true}
              className="top-0 left-20"
            />

            <TagCard
              title="Profit Extraction"
              checked={false}
              className="top-0 right-20"
            />

            <TagCard
              title="Pensions"
              checked={false}
              className="top-30 left-0"
            />

            <TagCard
              title="Trusts"
              checked={true}
              className="top-45 right-10"
            />

            <TagCard
              title="Tax Residency"
              checked={true}
              className="bottom-10 left-10"
            />

            <TagCard
              title="Property Incorporation"
              checked={false}
              className="right-10 bottom-12 pb-5"
            />
            <TagCard
              title="Legacy Planning"
              checked={true}
              className="-bottom-10"
            />

            {/* Additional mobile-friendly floating elements */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 transform sm:-right-6 md:-right-8 lg:hidden">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-400 sm:h-4 sm:w-4"></div>
            </div>
            <div className="absolute top-1/4 -left-4 sm:-left-6 md:-left-8 lg:hidden">
              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400 sm:h-3 sm:w-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
