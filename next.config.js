const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
}

module.exports = {
  ...nextConfig,
  compiler: {
    styledComponents: true
  },
  headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      },
      {
        // Cache static assets
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  exportPathMap: function (
        defaultPathMap, {dev, dir, outDir, distDir, buildId}
    ) {
        return {
            '/': {page: '/'},
            '/produkcja-jachtow.html': {page: '/produkcja-jachtow'},
            '/transport-jachtow.html': {page: '/transport-jachtow'},
            '/kontakt.html': {page: '/kontakt'},
            '/laminaty.html': {page: '/laminaty'}
        }
    },
}

module.exports = withBundleAnalyzer(nextConfig);
