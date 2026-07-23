import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — required for GitHub Pages (no Node server available)
  output: "export",

  // next/image's optimization API needs a server, which GitHub Pages doesn't have
  images: { unoptimized: true },

  // Deploying to the default github.io/repo-name subpath — remove this
  // once you switch to serving from the custom domain root.
  basePath: "/heartland-accessibility-site",
};

export default nextConfig;
