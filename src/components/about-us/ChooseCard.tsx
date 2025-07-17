import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ChooseCard({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-1 flex-col gap-4 p-6 transition-all duration-300 sm:flex-row sm:items-start sm:gap-6 sm:p-8",
        className,
      )}
    >
      <div className="flex flex-shrink-0 justify-center sm:justify-start">
        <div className="flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />
        </div>
      </div>
      <div className="space-y-3 text-center sm:space-y-4 sm:text-left">
        <h3 className="text-muted-foreground text-lg font-bold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed font-medium text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
