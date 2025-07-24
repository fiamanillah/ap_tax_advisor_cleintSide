import { cn } from "@/lib/utils";
import React from "react";

export default function SectionInvert({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("section-inverted-radius", className)}>{children}</div>
  );
}
