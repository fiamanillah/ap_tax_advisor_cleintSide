import Image from "next/image";

export default function OurMission() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-10">
        <Image
          src="/assets/our-mission.png"
          alt="Our Mission"
          className="rounded-lg lg:max-w-sm"
          width={600}
          height={400}
          loading="lazy"
          quality={90}
          style={{ objectFit: "cover" }}
        />

        <div className="">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To make tax simple, personal, and empowering. We provide trusted,
            tailored advice that helps individuals and businesses stay
            compliant, maximize their income, and plan for the future with
            confidence. Through expert guidance and proactive support, we turn
            tax from a burden into a tool for growth.
          </p>
        </div>
      </div>
    </section>
  );
}
