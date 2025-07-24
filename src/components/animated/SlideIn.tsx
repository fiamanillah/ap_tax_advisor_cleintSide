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
};

export default function SlideIn({
  children,
  direction = "left",
  repeat = false,
  yoyo = false,
  duration = 1.2,
  className = "",
  section = false,
}: SlideInProps) {
  const container = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const xFrom = direction === "left" ? -80 : 80;
    gsap.fromTo(
      container.current,
      { opacity: 0, x: xFrom },
      {
        opacity: 1,
        x: 0,
        duration,
        ease: "power2.out",
        repeat: repeat ? -1 : 0,
        yoyo,
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: repeat
            ? "play reverse play reverse"
            : "play none none none",
        },
      },
    );
  }, [direction, repeat, yoyo, duration, pathname]);

  return section ? (
    <section ref={container} className={className}>
      {children}
    </section>
  ) : (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
