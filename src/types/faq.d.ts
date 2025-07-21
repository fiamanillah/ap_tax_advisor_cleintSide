import { ReactNode } from "react";

export interface TFAQItem {
  id: string;
  question: string;
  answer: ReactNode;
}

export interface TFAQSectionProps {
  faqs: TFAQItem[];
  title?: string;
  description?: string;
  contactEmail?: string;
  contactText?: string;
}
