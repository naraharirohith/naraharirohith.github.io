/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages with custom domain or username.github.io
  // basePath: '', // Leave empty for username.github.io
  // assetPrefix: '', // Leave empty for username.github.io
};

module.exports = nextConfig;
