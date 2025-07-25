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

      // Kill previous instance to avoid duplicate smoothers and hidden content
      if (smoother.current) {
        smoother.current.kill();
        smoother.current = null;
      }

      smoother.current = ScrollSmoother.create({
        smooth: 0.7, // slightly smoother, less shaking
        effects: true,
      });

      // Ensure content is always visible
      const content = document.getElementById("smooth-content");
      if (content) {
        content.style.opacity = "1";
        content.style.transform = "none";
      }

      return () => {
        if (smoother.current) {
          smoother.current.kill();
          smoother.current = null;
        }
      };
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
        style={{ willChange: "transform", margin: 0, padding: 0, opacity: 1 }}
      >
        {children}
      </div>
    </main>
  );
}
