/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable turbopack and use webpack
  },
}

module.exports = nextConfig
