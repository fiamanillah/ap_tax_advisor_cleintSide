"use client";
import { list2 } from "@/app/(root)/(home)/list";
import Image from "next/image";

import Link from "next/link";
import SlideIn from "../animated/SlideIn";
import Accreditation from "../Shared/Accreditation";
import { AppButton } from "../Shared/AppButton";

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="main-gradient rounded-2xl py-10 md:py-20 lg:rounded-4xl">
          <div className="mx-auto flex flex-col-reverse gap-10 max-xl:items-center max-md:px-10 max-sm:px-5 md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:flex-row 2xl:max-w-7xl">
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
                <br /> Whether you need a trusted compliance partner or
                strategic tax advice around structuring, profit extraction or
                future exit, we’ll make sure your business is fully supported
                and fully tax-efficient.
              </p>

              <Accreditation list={list2} />
              <Link href="/auth/login">
                <AppButton className="w-fit max-sm:w-full">
                  Get started
                </AppButton>
              </Link>
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
      </div>
    </section>
  );
}
