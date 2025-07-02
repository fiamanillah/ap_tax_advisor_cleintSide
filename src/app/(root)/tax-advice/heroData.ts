import { THeroSectionProps } from "@/types/HeroSectionProps";

export const heroData = {
  title: "Tax advice, made simple :)",
  description: [
    "For tax-based problem? Get simple, one-off tax advice from an accredited accountant. 139, all in.",
  ],
  video: "/videos/tax-hero.mp4",
  features: [
    "We match you with an accredited accountant.",
    "Professional support with your tax situation",
    "1-1 consultation by phone or video call",
  ],
};

export const heroSectionProps: THeroSectionProps = {
  ...heroData,
};
