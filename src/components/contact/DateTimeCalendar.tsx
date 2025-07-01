import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";
import { IoMdArrowDropdown } from "react-icons/io";
import { Button } from "../ui/button";
import { useState } from "react";

export default function DateTimeCalendar() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {date
            ? format(date, "PPP")
            : "You can call a meeting for 30 mins in available time"}
          <IoMdArrowDropdown className="ml-2 size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2">
        <p>Select a Date & Time</p>
        <Calendar mode="single" selected={date} onSelect={setDate} autoFocus />
        <div className="mt-2 grid grid-cols-2 gap-2">
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
            <Button key={time} variant="outline" className="text-xs">
              {time}
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Time zone: Central European Time (8:11pm)
        </p>
      </PopoverContent>
    </Popover>
  );
}
