/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 this is required for static export
  images: {
    unoptimized: true, // for next/image in static builds
  },
  trailingSlash: true, // Optional but prevents 404s
};

module.exports = nextConfig;
