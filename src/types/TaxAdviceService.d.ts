export interface TTaxAdviceServiceProps {
  data: {
    id: number;
    icon: string;
    title: string;
    cta: string;
    description: string;
  }[];
  sectionMainTitle: string;
  colorTitle?: string;
}
