import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",  // Required for static export to GitHub Pages
  // Local serve at root. When deploying to GitHub Pages project site,
  // set basePath to "/YOUR_REPO_NAME" (and mirror it in app/page.tsx).
  basePath: "",
  images: {
    unoptimized: true, // Required for Next.js Image component on GitHub Pages
  },
};

export default nextConfig;
