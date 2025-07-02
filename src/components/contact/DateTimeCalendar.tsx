import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { FaEarthAsia } from "react-icons/fa6";

import { format } from "date-fns";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";

export default function DateTimeCalendar() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full flex justify-between items-center font-normal"
        >
          {date
            ? format(date, "PPP")
            : "You can call a meeting for 30 mins in available time"}
          <IoMdArrowDropdown className="size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 flex h-100 md:h-124" align="center">
        <div className="border-r border-gray-200">
          <p className="text-[20px] font-semibold px-4 pt-4">
            Select a Date & Time
          </p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="md:[--cell-size:--spacing(12)]"
            autoFocus
          />
          <div className="space-y-1 px-4 pb-4">
            <p className="text-[16px] font-bold">Time zone</p>
            <div className="flex items-center gap-2">
              <FaEarthAsia className="size-4" />
              <span className="font-normal text-sm">
                Central European Time (8:11pm)
              </span>
            </div>
          </div>
        </div>
        {/* Time Slots */}
        <div className="grid grid-cols-1 gap-2 p-4 overflow-y-auto">
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
              className="md:px-6 text-[16px] text-[#0069FF] border border-[#0069FF]/50 hover:bg-[#0069FF]/10"
            >
              {time}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
