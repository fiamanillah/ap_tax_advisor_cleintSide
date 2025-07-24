"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/dist/gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const smoother = useRef<ScrollSmoother | null>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      smoother.current = ScrollSmoother.create({
        smooth: 0.5,
        effects: true,
      });
    },
    {
      dependencies: [pathname],
    },
  );

  return (
    <main
      id="smooth-wrapper"
      style={{ overflow: "hidden", margin: 0, padding: 0 }}
    >
      <div
        id="smooth-content"
        style={{ willChange: "transform", margin: 0, padding: 0 }}
      >
        {children}
      </div>
    </main>
  );
}
