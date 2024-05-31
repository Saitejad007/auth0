/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "s.gwebravatar.com", "scontent-sea1-1.xx.fbcdn.net"],
  },
};

export default nextConfig;
