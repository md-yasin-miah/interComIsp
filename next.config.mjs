/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // "https://pb.netlandbd.com/api/files/pbc_181089699/2isu5pfo7878fzr/server_ikfp8eai43.lottie"
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
        port: '',
        pathname: '/api/files/**',
      },
    ],
  },
};

export default nextConfig;
