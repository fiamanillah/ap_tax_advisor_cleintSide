import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaEarthAsia } from "react-icons/fa6";

import { format } from "date-fns";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "../ui/button";
import { CustomCalendar } from "./customCalendar";

export default function DateTimeCalendar() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="hover:text-muted-foreground flex h-auto w-full flex-wrap items-center justify-between font-normal"
        >
          <span className="max-2xs:text-xs text-wrap">
            {date
              ? format(date, "PPP")
              : "You can call a meeting for 30 mins in available time"}
          </span>
          <IoMdArrowDropdown className="max-2xs:hidden size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="flex h-100 w-full p-0 md:h-124" align="center">
        <div className="border-r border-gray-200">
          <p className="hover:text-muted-foreground px-4 pt-4 text-[20px] font-semibold">
            Select a Date & Time
          </p>
          <CustomCalendar
            mode="single"
            selected={date}
            onSelect={setDate}
            autoFocus
          />
          <div className="space-y-1 px-4 pb-4">
            <p className="hover:text-muted-foreground text-[16px] font-bold">
              Time zone
            </p>
            <div className="flex items-center gap-2">
              <FaEarthAsia className="size-4" />
              <span className="hover:text-muted-foreground text-sm font-normal">
                Central European Time (8:11pm)
              </span>
            </div>
          </div>
        </div>
        {/* Time Slots */}
        <div className="grid grid-cols-1 gap-2 overflow-y-auto p-4">
          {[
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
          ].map((time) => (
            <Button
              key={time}
              variant="outline"
              className="border border-[#0069FF]/50 text-[16px] text-[#0069FF] hover:bg-[#0069FF]/10 md:px-6"
            >
              {time}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
