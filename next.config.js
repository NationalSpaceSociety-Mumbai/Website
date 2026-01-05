const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // basePath only for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Website/' : '',
}

module.exports = nextConfig
