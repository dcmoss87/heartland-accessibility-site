import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — required for GitHub Pages (no Node server available)
  output: "export",
  // next/image's optimization API needs a server, which GitHub Pages doesn't have
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
