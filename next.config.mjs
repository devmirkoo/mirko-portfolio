/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },

  reactStrictMode: true,
  distDir: 'build',
  
};

export default nextConfig;
