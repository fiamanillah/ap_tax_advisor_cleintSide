import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <div className="">
        <h1>Authentication</h1>
        {children}
      </div>
    </main>
  );
}
