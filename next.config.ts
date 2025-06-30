import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://placehold.co/40x40/000000/FFFFFF?text=AD"),
      new URL("https://placehold.co/400x400/F0F0F0/2C3E50?text=Smiling+Woman"),
      new URL("https://placehold.co/100x150/D1E7DD/2C3E50?text=Plant"),
    ],
  },
};

export default nextConfig;
