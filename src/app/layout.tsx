import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import LoadingPage from "./loading";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add the desired font weights
});

export const metadata: Metadata = {
  title: "AP Tax Advisor - UK Tax Service Provider",
  description:
    "Professional tax services for individuals and businesses in the UK. Expert tax advice, returns, and consultation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Suspense fallback={<LoadingPage />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
