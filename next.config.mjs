/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/mirko-portfolio",
  reactStrictMode: true,

  images: {
    unoptimized: true
  },
};

export default nextConfig;
