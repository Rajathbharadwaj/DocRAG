/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com'], // Allow Clerk images
  }
}

module.exports = nextConfig