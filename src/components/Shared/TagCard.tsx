import { cn } from "@/lib/utils";
import { Check, Plus } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface TagCardProps {
  title: string;
  checked: boolean;
  className?: string;
}
export default function TagCard({ title, checked, className }: TagCardProps) {
  return (
    <Card
      data-card
      className={cn(
        "absolute max-w-[200px] border-0 px-4 pt-4 pb-7 shadow-lg transition-shadow duration-300",
        {
          "bg-[#A4F4D3]": checked,
          "bg-[#FFF4A0]": !checked,
        },
        className,
      )}
    >
      <CardContent className="p-0">
        <div className="flex items-start gap-7">
          <span className="text-muted-foreground text-sm font-medium">
            {title}
          </span>
          <div className="shadow-muted-foreground/30 flex-shrink-0 rounded-full bg-white p-1 shadow-lg">
            {checked ? (
              <Check
                strokeWidth={4}
                className="text-muted-foreground h-4 w-4 font-semibold"
              />
            ) : (
              <Plus
                strokeWidth={4}
                className="text-muted-foreground h-3 w-3 sm:h-4 sm:w-4"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
