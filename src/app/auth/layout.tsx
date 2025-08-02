import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-background flex h-screen w-full flex-col items-center justify-center">
      <div className="container mx-auto flex items-stretch">
        <div className="h-full w-7/12 max-lg:hidden">
          <Image
            src="/assets/auth.png"
            alt="Authentication Illustration"
            width={1280}
            height={720}
            className="h-auto w-full rounded-l-4xl object-contain"
          />
        </div>
        {children}
      </div>
    </main>
  );
}
