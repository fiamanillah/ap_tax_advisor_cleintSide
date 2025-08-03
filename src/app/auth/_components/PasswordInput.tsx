import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function PasswordInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true);
  return (
    <div className="relative">
      <input
        type={isShowPassword ? "password" : "text"}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-ring",
          className,
        )}
        {...props}
      />

      <Button
        type="button"
        variant="outline"
        className="absolute top-1.5 right-1 cursor-pointer"
        onClick={() => setIsShowPassword(!isShowPassword)}
      >
        {!isShowPassword ? (
          <Eye size={16} strokeWidth={1.5} className="text-[#7D7F82]" />
        ) : (
          <EyeOff size={16} strokeWidth={1.5} className="text-[#7D7F82]" />
        )}
      </Button>
    </div>
  );
}
