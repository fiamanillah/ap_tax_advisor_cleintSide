export interface THeroSectionProps {
  title: string;
  description: string[];
  video: string;
  features: string[];
  cta?: {
    text: string;
    link: string;
  };
}
