"use client";
import FooterSection from "@/components/home/footerSection";
import HeaderSection from "@/components/home/headerSection";
import SmoothScroll from "@/components/Shared/SmoothScroll";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SmoothScroll>
        <HeaderSection />
        {children}
        <FooterSection />
      </SmoothScroll>

      {/* <FloatingIcon /> */}
    </>
  );
}
