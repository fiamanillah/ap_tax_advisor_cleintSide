"use client";
import SlideIn from "@/components/animated/SlideIn";
import QueryForm from "@/components/contact/QueryForm";
import Image from "next/image";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <main className="space-y-16 px-2 lg:space-y-32">
      <section className="container mx-auto">
        <div className="main-gradient w-full py-20 max-lg:rounded-2xl max-sm:rounded-tr-2xl md:flex-row lg:rounded-tl-4xl lg:rounded-b-4xl">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 max-lg:items-center lg:flex-row">
            <SlideIn className="w-full min-w-0 flex-1" scroll={false}>
              <QueryForm />
            </SlideIn>
            <SlideIn
              direction="right"
              className="flex w-full flex-1 flex-col items-center space-y-6"
              scroll={false}
            >
              <h2 className="text-muted-foreground text-2xl font-medium">
                Next Steps:
              </h2>
              <Image
                src="/assets/query-flow.png"
                alt="Next Steps Flow"
                width={500}
                height={500}
                className="w-full max-w-[300px]"
              />
            </SlideIn>
          </div>
        </div>
      </section>
      <Toaster position="top-center" />
    </main>
  );
}
