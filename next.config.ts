import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;


// next.config.js
module.exports = {
  future: {
    webpack5: true,
  },
  target: 'serverless'
}
