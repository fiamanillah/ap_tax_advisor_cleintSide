import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";

type DateTimePopupProps = {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

type TimeState = {
  hours: string;
  minutes: string;
};

const DateTimePopup = ({
  value,
  onChange,
  placeholder = "Select date and time",
  className = "",
}: DateTimePopupProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined,
  );
  const [selectedTime, setSelectedTime] = useState<TimeState>(
    value
      ? {
          hours: new Date(value).getHours().toString().padStart(2, "0"),
          minutes: new Date(value).getMinutes().toString().padStart(2, "0"),
        }
      : {
          hours: "03",
          minutes: "10",
        },
  );

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      updateDateTime(date, selectedTime);
    }
  };

  const handleTimeChange = (type: keyof TimeState, value: string) => {
    const newTime = { ...selectedTime, [type]: value };
    setSelectedTime(newTime);
    if (selectedDate) {
      updateDateTime(selectedDate, newTime);
    }
  };

  const updateDateTime = (date: Date, time: TimeState) => {
    const newDateTime = new Date(date);
    newDateTime.setHours(parseInt(time.hours), parseInt(time.minutes), 0, 0);
    onChange(newDateTime.toISOString());
  };

  const handleNow = () => {
    const now = new Date();
    setSelectedDate(now);
    const nowTime: TimeState = {
      hours: now.getHours().toString().padStart(2, "0"),
      minutes: now.getMinutes().toString().padStart(2, "0"),
    };
    setSelectedTime(nowTime);
    updateDateTime(now, nowTime);
  };

  const handleOK = () => {
    setOpen(false);
  };

  const formatDate = (date: Date): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getDate().toString().padStart(2, "0")}, ${date.getFullYear()}`;
  };

  const displayValue = selectedDate
    ? `${formatDate(selectedDate)} at ${selectedTime.hours}:${selectedTime.minutes}`
    : "";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`text-muted-foreground !border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 placeholder:text-muted-foreground/50 hover:text-muted-foreground flex w-full items-center justify-between !border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 ${className}`}
        >
          {displayValue || (
            <span className="text-muted-foreground/50">{placeholder}</span>
          )}
          <CalendarIcon className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="bg-foreground w-auto p-0" align="end">
        <div className="flex flex-col md:flex-row">
          {/* Calendar Section */}
          <div className="border-r">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              autoFocus
              className="text-muted-foreground p-0"
            />
          </div>

          {/* Time Picker Section */}
          <div className="max-md:hidden md:w-40">
            <div className="text-muted-foreground border-b py-3 text-center">
              {selectedTime.hours}:{selectedTime.minutes}:00
            </div>

            <div className="flex gap-2">
              {/* Hours */}
              <div className="w-1/2 border-r">
                <ScrollArea className="h-70">
                  <div className="p-1">
                    {Array.from({ length: 24 }, (_, i) =>
                      i.toString().padStart(2, "0"),
                    ).map((hour) => (
                      <button
                        key={hour}
                        type="button"
                        onClick={() => handleTimeChange("hours", hour)}
                        className={`w-full rounded px-2 py-1 text-center text-xs hover:bg-gray-100 ${
                          selectedTime.hours === hour
                            ? "bg-blue-100 font-medium text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        {hour}
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Minutes */}
              <div className="w-1/2 border-r">
                <ScrollArea className="h-64">
                  <div className="p-1">
                    {Array.from({ length: 60 }, (_, i) =>
                      i.toString().padStart(2, "0"),
                    ).map((minute) => (
                      <button
                        key={minute}
                        type="button"
                        onClick={() => handleTimeChange("minutes", minute)}
                        className={`w-full rounded px-2 py-1 text-center text-xs hover:bg-gray-100 ${
                          selectedTime.minutes === minute
                            ? "bg-blue-100 font-medium text-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        {minute}
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>

          <div className="mx-auto my-2 md:hidden">
            <Input
              type="time"
              id="time-picker"
              step="1"
              defaultValue="10:30:00"
              className="text-muted-foreground appearance-none border-0 shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t bg-gray-50 p-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNow}
            className="text-blue-500 hover:bg-blue-50 hover:text-blue-600"
          >
            Now
          </Button>
          <Button
            size="sm"
            onClick={handleOK}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            OK
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateTimePopup;
