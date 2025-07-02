import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// A timeout function to show the loading state
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
