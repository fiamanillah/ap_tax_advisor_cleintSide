import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "transition-all duration-200 ease-in-out btn-shadow",
  {
    variants: {
      variant: {
        default: "text-black bg-white border border-gray-200",
        primary: "text-white bg-blue-600 hover:bg-blue-700",
        secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200",
        destructive: "text-white bg-red-600 hover:bg-red-700",
        outline:
          "text-gray-700 bg-transparent border border-gray-300 hover:bg-gray-50",
        ghost: "text-gray-700 bg-transparent hover:bg-gray-100",
        link: "text-blue-600 bg-transparent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-5",
        sm: "h-8 px-4 py-1.5 has-[>svg]:px-3 text-sm",
        lg: "h-12 px-8 py-3 has-[>svg]:px-6 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
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

export { Button, buttonVariants };
