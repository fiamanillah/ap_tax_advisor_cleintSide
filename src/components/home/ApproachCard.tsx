"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface ApproachCardProps {
  title: string;
  description: string;
  index: number;
  icon?: string;
}

export default function ApproachCard({
  title,
  description,
  index,
  icon = "/assets/default-icon.svg",
}: ApproachCardProps) {
  return (
    <div className="group h-72 w-60 cursor-pointer [perspective:1000px]">
      <div
        className={cn(
          "thecard relative h-full w-full rounded-lg transition-transform duration-700",
          "[transform-style:preserve-3d] group-hover:rotate-y-180",
        )}
      >
        <div
          className={cn(
            "absolute top-2 left-2 z-20 h-fit w-fit text-white",
            "transition-all duration-700",
            "group-hover:text-white group-hover:left-2 group-hover:rotate-y-180 ",
          )}
        >
          /{(index + 1).toString().padStart(2, "0")}
        </div>

        {/* Front Face of the Card */}
        <div
          className={cn(
            "thefront inverted-radius absolute inset-0 flex flex-col items-center justify-center px-2 py-8",
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
          <h3 className="text-center text-[17px] font-semibold text-white">
            {title}
          </h3>
        </div>

        {/* Back Face of the Card */}
        <div
          className={cn(
            "theback inverted-radius-reverse absolute inset-0 flex flex-col items-start justify-center space-y-4 px-3",
            "[backface-visibility:hidden] rotate-y-180",
          )}
        >
          <h3 className="text-start text-lg font-semibold text-background">
            📝 Get in touch
          </h3>
          <p className="text-start text-xs text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}