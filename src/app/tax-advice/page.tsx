import Testimonial from "@/components/tax-advice/Testimonial";
import { ArrowRight } from "lucide-react";

export default function page() {
  return (
    <main>
      {/* reserve 64px for the fixed header */}
      <section className="relative min-h-[calc(100vh-64px)]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted>
          <source src="/videos/tax-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 min-h-[calc(100vh-64px)] bg-black/30">
          <div className="bg-[#A4F5D3]">
            <p className="text-center text-black text-base">
              New tax year, new return! File for 24/25 today🧑‍🚀
            </p>
          </div>
          <div className="container mx-auto px-4 py-8 lg:max-w-6xl min-h-[calc(100vh-64px-40px)] flex items-center">
            <div className="flex flex-col items-start justify-center h-full max-w-lg">
              <h2 className="text-4xl font-semibold mb-4 text-white">
                Tax advice, made simple :)
              </h2>
              <p className="text-xl mb-8 text-white">
                For tax-based problem? Get simple, one-off tax advice from an
                accredited accountant. 139, all in.
              </p>
              <ul className="">
                <li className="mb-2 flex items-center gap-2 text-white">
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>We match you with an accredited accountant. </span>
                </li>
                <li className="mb-2 flex items-center gap-2 text-white">
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>Professional support with your tax situation</span>
                </li>
                <li className="mb-2 flex items-center gap-2 text-white">
                  <ArrowRight size={16} strokeWidth={1.5} />
                  <span>1-1 consultation by phone or video call</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            What are people saying
          </h2>
          <Testimonial />
        </div>
      </section>
    </main>
  );
}
