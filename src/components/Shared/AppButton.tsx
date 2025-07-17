import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "btn-shadow bg-white text-black hover:bg-gray-50",
      },
      size: {
        default:
          "h-9 px-4 py-2 sm:h-10 sm:px-5 sm:py-2 lg:h-11 lg:px-6 lg:py-2 has-[>svg]:px-3",
        sm: "h-8 px-3 py-1.5 sm:h-9 sm:px-4 sm:py-1.5 has-[>svg]:px-2.5",
        lg: "h-10 px-6 py-2 sm:h-11 sm:px-8 sm:py-2.5 lg:h-12 lg:px-10 lg:py-3 has-[>svg]:px-4",
        icon: "size-8 sm:size-9 lg:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function AppButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { AppButton, buttonVariants };
