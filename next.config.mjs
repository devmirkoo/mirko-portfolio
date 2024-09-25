/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {

  output: 'export',
  basePath: isProd ? '/' : '',
  reactStrictMode: true,

  images: {
    unoptimized: true
  },

  i18n: {
    locales: ['en-US', 'it-IT', 'fr', 'nl-NL', 'nl-BE'],
    defaultLocale: 'en-US',

    domains: [
      {
        domain: 'mirko.live',
        defaultLocale: 'en-US',
      },
    ],
  },
};

export default nextConfig;
