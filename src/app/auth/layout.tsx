import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-background flex h-screen w-full flex-col items-center justify-center">
      <div className="container mx-auto flex h-full p-4">
        <div className="h-full w-7/12">
          <Image
            src="/assets/auth.png"
            alt="Authentication Illustration"
            width={1280}
            height={720}
            className="mb-4 h-full w-full rounded-l-4xl object-cover"
          />
        </div>
        {children}
      </div>
    </main>
  );
}
