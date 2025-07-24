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

      // Kill previous instance if exists
      if (smoother.current) {
        smoother.current.kill();
        smoother.current = null;
      }

      smoother.current = ScrollSmoother.create({
        smooth: 0.8, // less aggressive, less shaking
        effects: true,
      });

      return () => {
        if (smoother.current) {
          smoother.current.kill();
          smoother.current = null;
        }
      };
    },
    { dependencies: [pathname] },
  );

  return (
    <main id="smooth-wrapper" style={{ overflow: "hidden" }}>
      <div id="smooth-content" style={{ willChange: "transform" }}>
        {children}
      </div>
    </main>
  );
}
