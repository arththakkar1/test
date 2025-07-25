import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint during build
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

export default nextConfig;
