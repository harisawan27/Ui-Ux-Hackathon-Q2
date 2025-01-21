import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // Leave empty if no specific port is needed
        pathname: "/images/**", // Matches all paths under /images/
      },
    ],
  },
};

export default nextConfig;
