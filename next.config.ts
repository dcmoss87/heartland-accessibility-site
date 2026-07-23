import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export — required for GitHub Pages (no Node server available)
  output: "export",

  // next/image's optimization API needs a server, which GitHub Pages doesn't have
  images: { unoptimized: true },

  // Deploying to the default github.io/repo-name subpath — remove this
  // once you switch to serving from the custom domain root.
  basePath: isProd ? "/heartland-accessibility-site" : "",
  trailingSlash: true,
};

export default nextConfig;
