import Hero from "@/components/Shared/Hero";
import { heroSectionProps } from "./heroData";

export default function page() {
  return (
    <main>
      <Hero {...heroSectionProps} />
    </main>
  );
}
