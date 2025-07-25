"use client";

import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import { useRef } from "react";

type SlideInProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  repeat?: boolean;
  yoyo?: boolean;
  duration?: number;
  className?: string;
  section?: boolean;
  scroll?: boolean; // <-- add scroll prop
};

export default function SlideIn({
  children,
  direction = "left",
  repeat = false,
  yoyo = false,
  duration = 1.2,
  className = "",
  section = false,
  scroll = true, // <-- default to true
}: SlideInProps) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const xFrom = direction === "left" ? -80 : 80;

      const animationProps = {
        opacity: 1,
        x: 0,
        duration,
        ease: "power2.out",
        repeat: repeat ? -1 : 0,
        yoyo,
        onComplete: () => {
          if (container.current) {
            container.current.style.opacity = "1";
            container.current.style.transform = "none";
          }
        },
      };

      if (scroll) {
        gsap.fromTo(
          container.current,
          { opacity: 0, x: xFrom },
          {
            ...animationProps,
            scrollTrigger: {
              trigger: container.current,
              start: "top 85%",
              toggleActions: repeat
                ? "play reverse play reverse"
                : "play none none none",
            },
          },
        );
      } else {
        gsap.fromTo(
          container.current,
          { opacity: 0, x: xFrom },
          animationProps,
        );
      }
    },

    {
      dependencies: [direction, repeat, yoyo, duration, pathname, scroll],
    },
  );

  const baseStyle = { opacity: 1, transform: "none" };

  return section ? (
    <section ref={container} className={className} style={baseStyle}>
      {children}
    </section>
  ) : (
    <div ref={container} className={className} style={baseStyle}>
      {children}
    </div>
  );
}
