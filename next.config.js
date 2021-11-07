/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true
  },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['avatars.githubusercontent.com', 'peter.datayolk.net', 'datayolk.net', 'dummyimage.com'], // TODO: configure real domains
  },
}
