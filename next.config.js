/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learn.microsoft.com',
        pathname: '/media/learn/certification/badges/**',
      },
    ],
  },
}

module.exports = nextConfig
