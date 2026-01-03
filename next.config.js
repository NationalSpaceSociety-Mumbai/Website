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
  // ⚠️ CRITICAL FOR GITHUB PAGES ⚠️
  // Since deploying to https://nationalspacesociety-mumbai.github.io/Website/
  // basePath must match the repository name
  basePath: '/Website',
  assetPrefix: '/Website/',
}

module.exports = nextConfig
