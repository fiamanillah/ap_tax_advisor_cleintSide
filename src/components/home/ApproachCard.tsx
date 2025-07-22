"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ApproachCardProps {
  title: string;
  description: string;
  index: number;
  icon?: string; // Optional icon prop, if needed
}

export default function ApproachCard({
  title,
  description,
  index,
  icon = "/assets/default-icon.svg", // Default icon if none provided
}: ApproachCardProps) {
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState<boolean>(false);

  useGSAP(() => {
    if (index === 0) {
      gsap.to(cardRef.current, {
        rotationY: 180,
        duration: 0.6,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "bottom 20%",
          once: true, // Animation will only happen once
        },
      });

      setFlipped(true);
    }
  }, []);

  const handleFlip = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === cardRef.current) return; // Prevent flipping when clicking on the card content
    if (flipped) {
      gsap.to(cardRef.current, {
        rotationY: 0,
        duration: 0.6,
      });
    } else {
      gsap.to(cardRef.current, {
        rotationY: 180,
        duration: 0.6,
      });
    }

    setFlipped(!flipped);
  };

  return (
    <>
      <div
        className={cn("thecard", { flipped })}
        ref={cardRef}
        onMouseEnter={handleFlip}
      >
        <div
          className={cn(
            "absolute top-2 left-2 h-fit w-fit transition delay-700",
            {
              "right-2 rotate-y-180": flipped,
            },
          )}
        >
          /{(index + 1).toString().padStart(2, "0")}
        </div>

        <div
          className="thefront inverted-radius flex flex-col items-center justify-center px-2 py-8"
          onMouseEnter={handleFlip}
        >
          <Image
            src={icon}
            alt={title}
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h3 className="text-background text-center text-lg font-semibold">
            {title}
          </h3>
        </div>

        <div
          className="theback inverted-radius-reverse flex flex-col items-start justify-center space-y-4 px-3"
          onMouseEnter={handleFlip}
        >
          <h3 className="text-background text-start text-lg font-semibold">
            📝 Get in touch
          </h3>
          <p className="text-muted-foreground text-start text-xs">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
