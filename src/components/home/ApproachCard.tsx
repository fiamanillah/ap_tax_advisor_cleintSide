"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

interface ApproachCardProps {
  title: string;
  description: string;
  index: number;
  icon: string;
  cta?: string;
}

export default function ApproachCard({
  title,
  description,
  index,
  icon,
  cta,
}: ApproachCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered rotation only for the first card
  useGSAP(() => {
    if (index === 0) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        cardRef.current,
        { rotateY: 0 },
        {
          rotateY: 180,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );

      gsap.fromTo(
        indexRef.current,
        { rotateY: 0 },
        {
          rotateY: 180,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: indexRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }
  }, [index]);

  // Hover rotation for all cards
  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      rotateY: 180,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(indexRef.current, {
      rotateY: 180,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      duration: 0.7,
      ease: "power2.inOut",
    });

    gsap.to(indexRef.current, {
      rotateY: 0,
      duration: 0.7,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      className="h-72 w-60 cursor-pointer [perspective:1000px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={cn(
          "thecard relative h-full w-full rounded-lg transition-transform duration-700",
          "[transform-style:preserve-3d]",
        )}
      >
        <div
          ref={indexRef}
          className={cn(
            "absolute top-2 left-2 z-20 h-fit w-fit text-white",
            "transform transition-all delay-100 duration-700",
            "[transform-style:preserve-3d]",
          )}
        >
          /{(index + 1).toString().padStart(2, "0")}
        </div>

        {/* Front Face */}
        <div
          className={cn(
            "thefront inverted-radius absolute inset-0 flex flex-col items-center justify-center px-4 py-8",
            "[backface-visibility:hidden]",
          )}
        >
          <Image
            src={icon}
            alt={title}
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h3 className="text-foreground mt-3 text-center text-lg font-medium">
            {title}
          </h3>
        </div>

        {/* Back Face */}
        <div
          className={cn(
            "theback inverted-radius-reverse absolute inset-0 flex flex-col items-start justify-center space-y-4 px-3",
            "[backface-visibility:hidden]",
          )}
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-background text-start text-lg font-semibold">
            {cta}
          </h3>
          <p className="text-muted-foreground text-start text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
