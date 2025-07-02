import { Fragment } from "react";
import VideoPlayer from "./VideoPlayer";

export default function OurInSights() {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
        <div className="max-w-5xl mx-auto">
          <VideoPlayer video="/videos/insights.mp4" />
          <div className="relative max-lg:mt-5 lg:-top-10 bg-[#009900] rounded-xl flex flex-col lg:flex-row items-center justify-between p-4 max-w-4xl mx-auto gap-y-4">
            {insightsData.map((insight, index) => (
              <Fragment key={index}>
                <div className="flex flex-col items-center justify-center text-center h-full px-4">
                  <h2 className="text-white text-4xl font-bold">
                    {insight.value}
                  </h2>
                  <p className="text-white text-lg">{insight.category}</p>
                </div>
                {index !== insightsData.length - 1 && (
                  <div className="w-0.5 bg-white h-20 max-lg:hidden" />
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
