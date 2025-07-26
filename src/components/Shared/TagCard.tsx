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
        "absolute max-w-[230px] border-0 px-4 pt-4 pb-5 shadow-lg transition-shadow duration-300 lg:pb-7",
        {
          "bg-[#A4F4D3]": checked,
          "bg-[#FFF4A0]": !checked,
        },
        className,
      )}
    >
      <CardContent className="p-0">
        <div className="flex items-start gap-2 sm:gap-7">
          <span className="text-muted-foreground text-xs font-medium sm:text-sm">
            {title}
          </span>
          <div className="shadow-muted-foreground/30 flex-shrink-0 rounded-full bg-white p-1 shadow-lg">
            {checked ? (
              <Check
                strokeWidth={4}
                className="text-muted-foreground ms:h-3 h-2 w-2 font-semibold sm:w-3"
              />
            ) : (
              <Plus
                strokeWidth={4}
                className="text-muted-foreground h-2 w-2 sm:h-3 sm:w-3"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
