"use client";
import { TApproach } from "@/types/ourApproach";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import TaxAdviceService from "./TaxAdviceService";

interface OurApproachProps {
  OurApproachData: TApproach;
}

export default function OurApproach({ OurApproachData }: OurApproachProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 }, // increased distance (was 50)
      {
        opacity: 1,
        y: 0,
        duration: 1.5, // slower animation (was 1)
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // reveal a bit later (was 80%)
        },
      },
    );
  }, []);

  return (
    <section className="py-12" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-foreground mx-auto mb-8 w-fit pb-8 text-center text-xl font-medium md:text-3xl lg:text-[40px]">
          Our Approach
        </h2>
        <TaxAdviceService data={OurApproachData} lg={3} xl={4} />
      </div>
    </section>
  );
}
