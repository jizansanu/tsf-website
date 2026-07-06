import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a fully static site (used for the GitHub Pages
// preview). NEXT_PUBLIC_BASE_PATH is the sub-path the site is served from
// (e.g. /tsf-website on github.io). Production on a real domain uses neither.
const isExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isExport && {
    output: "export",
    trailingSlash: true,
    images: { loader: "custom" as const, loaderFile: "./lib/image-loader.ts" },
  }),
  ...(basePath && { basePath }),
};

export default nextConfig;
