/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during builds (still checks in dev)
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'api.mapbox.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  webpack: (config, { isServer }) => {
    // Fix for pdf-parse and Node.js modules in client bundle
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      canvas: false,
    }
    
    // Ignore PDF worker files to prevent webpack parsing errors
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js/,
      type: 'asset/resource',
      generator: {
        filename: 'static/worker/[hash][ext][query]'
      }
    })
    
    // Exclude pdf-parse completely from client bundle - only use on server
    if (!isServer) {
      config.externals = config.externals || []
      config.externals.push('pdf-parse')
    }
    
    // Ignore test files from pdf-parse package
    const webpack = require('webpack')
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /test\/data\/.*\.pdf$/,
        contextRegExp: /pdf-parse/,
      })
    )
    
    return config
  },
}

module.exports = nextConfig