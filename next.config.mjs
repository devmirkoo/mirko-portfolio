/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/mirko-portfolio' : '',
  reactStrictMode: true,

  images: {
    unoptimized: true
  },
};

export default nextConfig;
