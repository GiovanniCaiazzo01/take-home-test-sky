import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    domains: ["is1-ssl.mzstatic.com"],
  },
};

module.exports = nextConfig;
