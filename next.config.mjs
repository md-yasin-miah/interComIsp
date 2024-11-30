/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'exordonline.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
};

export default nextConfig;
