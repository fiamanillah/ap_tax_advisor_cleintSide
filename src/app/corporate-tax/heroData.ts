import { THeroSectionProps } from "@/types/HeroSectionProps";

export const heroData = {
  title: "Your company accounts & tax return sorted, for less",
  description: [
    "Professional help, simple tech. Let us sort your small business accounts without the stress.",
  ],

  video: "/videos/corporate-tax.mp4",

  features: [
    "Sorted by an accredited accountant",
    "Easy, online and always jargon-free",
    "One-off, affordable price",
  ],
  cta: {
    text: "Get Started",
    link: "/get-started",
  },
};

export const heroSectionProps: THeroSectionProps = {
  ...heroData,
};
