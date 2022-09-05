/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://darkbright.gabia.io/api/:path*',
      },
    ];
  },
}

module.exports = nextConfig
