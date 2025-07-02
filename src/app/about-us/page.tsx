import OurMission from "@/components/about-us/OurMission";
import Hero from "@/components/Shared/Hero";
import { heroSectionProps } from "./heroData";

export default function page() {
  return (
    <main>
      <Hero {...heroSectionProps} />
      <OurMission />
    </main>
  );
}
