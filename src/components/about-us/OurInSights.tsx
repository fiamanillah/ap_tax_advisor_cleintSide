import { Fragment } from "react";
import VideoPlayer from "./VideoPlayer";

export default function OurInSights() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-6xl">
        <div className="max-w-5xl mx-auto">
          <VideoPlayer video="/videos/insights.mp4" />
          <div className="relative mt-4 sm:mt-6 lg:-top-8 xl:-top-10 bg-[#009900] rounded-lg sm:rounded-xl flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 md:p-8 max-w-4xl mx-auto gap-4 sm:gap-6 md:gap-8 shadow-lg">
            {insightsData.map((insight, index) => (
              <Fragment key={index}>
                <div className="flex flex-col items-center justify-center text-center h-full px-2 sm:px-4 py-2 sm:py-4">
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 leading-tight">
                    {insight.value}
                  </h2>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                    {insight.category}
                  </p>
                </div>
                {index !== insightsData.length - 1 && (
                  <>
                    {/* Vertical divider for desktop */}
                    <div className="w-0.5 bg-white/30 h-16 sm:h-20 md:h-24 hidden sm:block" />
                    {/* Horizontal divider for mobile */}
                    <div className="w-full h-0.5 bg-white/30 block sm:hidden" />
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const insightsData = [
  {
    category: "Team members",
    value: "50+",
  },
  {
    category: "Happy Clients",
    value: "1200+",
  },
  {
    category: "Clients Satisfaction",
    value: "99%",
  },
  {
    category: "Experience",
    value: "18+",
  },
];
