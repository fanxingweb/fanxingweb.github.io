/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    dynamicImport: true
  },
}

module.exports = nextConfig
