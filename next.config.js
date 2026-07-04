/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'thinktree-carsdoor-backend.onrender.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: 'thinktree-carsdoor-backend.onrender.com',
        pathname: '/uploads/**',
      },
      
    ],
  },
  eslint: {
  ignoreDuringBuilds: true,
}
};

module.exports = nextConfig;