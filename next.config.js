/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true, // 严格模式
  experimental: {
    dynamicImport: true, // 动态加载
    appDir: true,
  },
  images: {
    // loader: 'imgix', // 使用其他支持静态导出的加载器
    // path: './public', // 图片加载器的基础路径
    unoptimized: true
  },
}

module.exports = nextConfig
