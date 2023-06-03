/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true, // 严格模式
  experimental: {
    dynamicImport: true, // 动态加载
    appDir: true,
  },
}

module.exports = nextConfig
