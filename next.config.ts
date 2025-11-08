import path from "path";
import type { NextConfig } from "next";

// Ensure Next knows the correct workspace root for output tracing.
// This avoids Next inferring a parent directory when multiple lockfiles exist
// (Netlify's build environment relies on the plugin writing output into
// the correct project root). Setting `outputFileTracingRoot` prevents
// the plugin from searching in the wrong place.
const nextConfig: NextConfig & { experimental?: Record<string, unknown> } = {
  outputFileTracingRoot: path.resolve(__dirname),
  // Produce a fully static export (`next export`) so we can publish
  // the site as static files on Netlify without using server functions.
  output: "export",
  reactStrictMode: true,
  // Avoid enabling Next's built-in image optimization handlers during
  // the first deploy to Netlify. This is the safest option for a
  // simple portfolio site. Remove or change if you want Netlify to
  // handle image optimization via the plugin's functions.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;



