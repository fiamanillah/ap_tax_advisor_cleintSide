"use client";
import { list1, list2 } from "@/app/(root)/(home)/list";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, Plus } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Icon from "../Shared/Icon";
import { Card, CardContent } from "../ui/card";

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
              Tax doesn&apos;t have to be taxing.
            </h2>
            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              You’ve got enough on your plate so let us take care of the
              numbers.
            </p>
            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              We’re not your average accountant. Instead of waiting for your
              paperwork, we’re proactive, personal, and by your side all year
              round. We don’t just meet HMRC’s expectations, we build our
              service around you.
            </p>
            <ul className="text-primary-foreground space-y-2 sm:space-y-3">
              {list1.map(({ icon, text }, idx) => (
                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                  <Icon className="h-6 w-6" src={icon} />
                  <span className="text-sm sm:text-base md:text-lg">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
              We specialise in tax so you don&apos;t have to! Our service is
              straightforward, stress-free, and even a little bit human.
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
            </div>
          </div>

          {/* Image Section */}
          <div
            ref={imageRef}
            className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
          >
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
              <Image
                src="/assets/girl.png"
                alt="Professional tax advisor support"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
              />
            </div>

            {/* Floating Cards - Responsive positioning */}
            <Card
              data-card
              className="absolute top-8 -left-2 max-w-[140px] bg-[#A4F5D3] shadow-lg transition-shadow duration-300 hover:shadow-xl sm:top-10 sm:left-2 sm:max-w-[160px] md:top-12 md:left-4 md:max-w-[380px] lg:top-14 lg:left-6"
            >
              <CardContent className="px-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="max-w-[140px] text-xs font-medium text-gray-800 sm:text-sm md:text-base">
                    Documents submitted
                  </span>
                  <div className="flex-shrink-0 rounded-full bg-white p-1">
                    <Check className="h-3 w-3 text-green-600 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              data-card
              className="absolute -right-2 bottom-8 max-w-[140px] bg-[#FFF4A0] shadow-lg transition-shadow duration-300 hover:shadow-xl sm:right-2 sm:bottom-10 sm:max-w-[160px] md:right-8 md:bottom-12 md:max-w-[180px] lg:right-12 lg:bottom-12"
            >
              <CardContent className="px-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="max-w-[140px] text-xs font-medium text-gray-800 sm:text-sm md:text-base">
                    Ready to approve
                  </span>
                  <div className="flex-shrink-0 rounded-full bg-white p-1">
                    <Plus className="h-3 w-3 text-blue-600 sm:h-4 sm:w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

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
