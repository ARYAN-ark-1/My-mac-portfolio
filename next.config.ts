const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Optional but prevents 404s
};

module.exports = nextConfig;
