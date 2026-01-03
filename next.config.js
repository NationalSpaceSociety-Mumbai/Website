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
  // If you are deploying to https://username.github.io/repo-name/
  // you MUST uncomment the line below and set it to your repo name.
  // If you are using a custom domain (www.nss-mumbai.org), leave it commented.
  // basePath: '/nss-mumbai-website',
}

module.exports = nextConfig
