import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";

interface SelectItemData {
  value: string;
  label: string;
}

interface SelectInputProps {
  placeholder?: string;
  groupLabel?: string;
  items: SelectItemData[];
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
  contentClassName?: string;
}
const SelectInput: React.FC<SelectInputProps> = ({
  placeholder = "Select an option",
  groupLabel,
  items = [],
  onValueChange,
  defaultValue,
  className,
  contentClassName,
}) => {
  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger
        className={cn(
          className,
          "text-muted-foreground border-muted-foreground/20 focus:border-muted-foreground/20 focus-visible:border-muted-foreground/20 placeholder:text-muted-foreground/50 border !bg-white focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0",
        )}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        className={cn(contentClassName, "bg-gray-50")}
        align="end"
        side="bottom"
      >
        <SelectGroup className="px-2 py-1">
          {groupLabel ? <SelectLabel>{groupLabel}</SelectLabel> : undefined}
          {items.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="text-muted-foreground hover:text-muted-foreground data-[highlighted]:text-muted-foreground rounded-none border-b last:border-b-0 hover:bg-gray-100 data-[highlighted]:bg-gray-100"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectInput;
