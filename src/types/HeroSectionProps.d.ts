export interface THeroSectionProps {
  title: string | string[];
  description?: string[];
  video?: string;
  images?: string;
  features: string[];
  cta?: {
    text: string;
    link: string;
  };
}
