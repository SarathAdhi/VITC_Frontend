/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["vit.ac.in"],
  },
};

module.exports = nextConfig;
