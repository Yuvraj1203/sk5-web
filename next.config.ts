import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "sk5marketing.com",
          },
        ],
        destination: "https://sk5marketing.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
