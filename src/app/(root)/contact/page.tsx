"use client";
import SlideIn from "@/components/animated/SlideIn";
import QueryForm from "@/components/contact/QueryForm";
import Image from "next/image";
import { Toaster } from "sonner";

export default function Page() {
  return (
    <main>
      <section className="container mx-auto">
        <div className="main-gradient flex flex-col items-center justify-around gap-10 rounded-tl-4xl rounded-b-4xl py-20 md:flex-row lg:px-40">
          <SlideIn className="w-full self-start md:w-[50%]" scroll={false}>
            <QueryForm />
          </SlideIn>
          <SlideIn direction="right" className="space-y-6" scroll={false}>
            <h2 className="text-muted-foreground text-2xl font-medium">
              Next Steps:
            </h2>
            <Image
              src="/assets/query-flow.png"
              alt="Next Steps Flow"
              width={500}
              height={500}
              className="w-[300px]"
            />
          </SlideIn>
        </div>
      </section>
      <Toaster position="top-center" />
    </main>
  );
}
