"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Check, Plus } from "lucide-react";
import { useRef } from "react";
import { Card, CardContent } from "../ui/card";

interface TagCardProps {
  title: string;
  checked: boolean;
  axis?: "y" | "x";
  distance?: number;
  duration?: number;
  repeat?: boolean;
  yoyo?: boolean;
  className?: string;
}
export default function TagCard({
  title,
  checked,
  axis = "y",
  distance = 10,
  duration = 1,
  repeat = true,
  yoyo = true,
  className = "",
}: TagCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(ref.current, {
      [axis]: distance,
      duration,
      repeat: repeat ? -1 : 0,
      yoyo,
      ease: "power1.inOut",
    });
  }, [axis, distance, duration, repeat, yoyo]);

  return (
    <Card
      ref={ref}
      className={cn(
        // Responsive max-width and padding for all screen sizes
        "absolute border-0 px-2 pt-3 pb-5 shadow-lg transition-shadow duration-300",
        "max-w-[180px] sm:max-w-[200px] md:max-w-[230px] lg:max-w-[260px]",
        "px-2 sm:px-3 md:px-4 lg:px-6",
        "pt-3 sm:pt-4 md:pt-5 lg:pt-7",
        "pb-5 sm:pb-6 md:pb-7 lg:pb-8",
        {
          "bg-[#A4F4D3]": checked,
          "bg-[#FFF4A0]": !checked,
        },
        className,
      )}
    >
      <CardContent className="p-0">
        <div className="flex items-start gap-4 sm:gap-5 md:gap-7">
          <span className="text-muted-foreground text-xs font-medium sm:text-sm md:text-base">
            {title}
          </span>
          <div className="shadow-muted-foreground/30 flex-shrink-0 rounded-full bg-white p-1 shadow-lg">
            {checked ? (
              <Check
                strokeWidth={4}
                className="text-muted-foreground h-3 w-3 font-semibold sm:h-4 sm:w-4 md:h-5 md:w-5"
              />
            ) : (
              <Plus
                strokeWidth={4}
                className="text-muted-foreground h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
