/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — required for GitHub Pages (no Node server available)
  output: "export",

  // next/image's optimization API needs a server, which GitHub Pages doesn't have
  images: { unoptimized: true },

  // Not using basePath/assetPrefix here because we're deploying to the
  // custom domain (heartlandaccessibility.llc) at the root, not to
  // username.github.io/repo-name. If you ever deploy to the default
  // github.io subpath instead, add:
  //   basePath: "/heartland-accessibility-site",
};

module.exports = nextConfig;