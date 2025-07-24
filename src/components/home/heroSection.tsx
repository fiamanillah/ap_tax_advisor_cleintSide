import { list1, list2 } from "@/app/(root)/(home)/list";
import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import Icon from "../Shared/Icon";
import TagCard from "../Shared/TagCard";

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="main-gradient rounded-4xl py-20">
          {/* Text Section */}
          <div className="mx-auto flex max-w-7xl">
            <SlideIn className="w-full max-w-none space-y-4 sm:space-y-5 md:space-y-6 lg:max-w-[700px]">
              <h2 className="text-primary-foreground text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px]">
                Tax doesn&apos;t have to be taxing.
              </h2>
              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                You’ve got enough on your plate so let us take care of the
                numbers.
              </p>
              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                We’re not your average accountant. Instead of waiting for your
                paperwork, we’re proactive, personal, and by your side all year
                round. We don’t just meet HMRC’s expectations, we build our
                service around you.
              </p>
              <ul className="text-primary-foreground space-y-2 sm:space-y-3">
                {list1.map(({ icon, text }, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <Icon className="h-6 w-6" src={icon} />
                    <span className="text-sm sm:text-base md:text-lg">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-primary-foreground text-sm leading-relaxed sm:text-base md:text-lg">
                We specialise in tax so you don&apos;t have to! Our service is
                straightforward, stress-free, and even a little bit human.
              </p>

              <div className="max-w-2xl">
                <p className="text-primary-foreground border-primary-foreground mb-4 border-b-2 pb-2 text-sm leading-relaxed sm:text-base md:text-lg">
                  Accreditations
                </p>

                <ul className="text-primary-foreground grid grid-cols-1 items-start gap-2 sm:grid-cols-2 sm:gap-4">
                  {list2.map(({ icon, text }, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <Icon className="h-5 w-5" src={icon} />
                      <span className="text-muted-foreground text-sm">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideIn>
            {/* Image Section */}
            <SlideIn
              direction="right"
              className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
            >
              <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px]">
                <Image
                  src="/assets/girl.png"
                  alt="Professional tax advisor support"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 360px, 400px"
                />
              </div>

              {/* Floating Cards - Responsive positioning */}

              <TagCard
                title="Documents submitted"
                checked={true}
                className="top-20 left-20"
              />

              <TagCard
                title="Ready to approve"
                checked={false}
                className="right-0 bottom-20"
              />
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
