import { THeroSectionProps } from "@/types/HeroSectionProps";

export const heroData = {
  title: [
    "Get to Know Us:",
    "AP Tax Advisor is a UK Based Tax Service Provider.",
  ],

  features: [
    "Sorted by an accredited accountant",
    "Easy, online and always jargon-free",
    "One-off, affordable price",
  ],
  cta: {
    text: "Get Started",
    link: "/get-started",
  },

  images: "/assets/about-us-hero.png",
};

export const heroSectionProps: THeroSectionProps = {
  ...heroData,
};
