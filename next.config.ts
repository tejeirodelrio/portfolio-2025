import type { NextConfig } from "next";

const nextConfig: NextConfig & { experimental?: Record<string, unknown> } = {
  reactStrictMode: true,
  experimental: {
    // You are using the app router (src/app), keep this enabled
    appDir: true,
  },
  // Avoid enabling Next's built-in image optimization handlers during
  // the first deploy to Netlify. This is the safest option for a
  // simple portfolio site. Remove or change if you want Netlify to
  // handle image optimization via the plugin's functions.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;



