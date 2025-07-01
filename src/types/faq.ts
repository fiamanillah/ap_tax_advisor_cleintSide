export interface TFAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface TFAQSectionProps {
    faqs: TFAQItem[];
    title?: string;
    description?: string;
    contactEmail?: string;
    contactText?: string;
}
