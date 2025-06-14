const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // 💥 key for static export
  images: {
    unoptimized: true, // disable next/image optimization
  },
  basePath: isProd ? '/My-mac-portfolio' : '',
  assetPrefix: isProd ? '/My-mac-portfolio/' : '',
};

module.exports = nextConfig;
