const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isProd && {
    basePath: '/My-mac-portfolio',
    assetPrefix: '/My-mac-portfolio/',
  }),
};

module.exports = nextConfig;
