import { list1, list2 } from "@/app/(root)/(home)/list";
import Image from "next/image";
import SlideIn from "../animated/SlideIn";
import Accreditation from "../Shared/Accreditation";
import Icon from "../Shared/Icon";
import TagCard from "../Shared/TagCard";

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="main-gradient rounded-2xl py-10 md:py-20 lg:rounded-4xl">
          <div className="mx-auto flex flex-col-reverse gap-10 max-xl:items-center max-md:px-10 max-sm:px-5 md:max-w-xl lg:max-w-3xl xl:max-w-5xl xl:flex-row 2xl:max-w-7xl">
            {/* Text Section */}
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

              <Accreditation list={list2} />
            </SlideIn>
            {/* Image Section */}
            <SlideIn
              direction="right"
              className="relative mt-8 flex w-full max-w-[400px] items-center justify-center sm:max-w-[450px] md:max-w-[500px] lg:mt-0 lg:max-w-[600px]"
            >
              <div className="relative h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px] xl:h-[520px] xl:w-[520px]">
                <Image
                  src="/assets/girl.png"
                  alt="Professional tax advisor support"
                  fill
                  className="object-fill"
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 340px, (max-width: 1024px) 400px, (max-width: 1280px) 460px, 520px"
                />

                {/* Floating Cards - Responsive positioning */}

                <TagCard
                  title="Documents submitted"
                  checked={true}
                  className="top-0 left-0 z-10 sm:top-20 sm:-left-15"
                />

                <TagCard
                  title="Ready to approve"
                  checked={false}
                  className="right-0 bottom-0 transform sm:-right-10 sm:bottom-36"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
