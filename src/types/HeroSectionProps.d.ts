export interface THeroSectionProps {
  title: string | string[];
  description?: string[];
  cta?: {
    text: string;
    link: string;
  };
  features?: string[];
  image: string;
}
