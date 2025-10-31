/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
  domains: [ 'cdn.intra.42.fr', 'miro.medium.com', 'www.appsdeveloperblog.com', 'www.1337.ma', 'framerusercontent.com', 'about.udemy.com'],
  },
};

module.exports = nextConfig;
