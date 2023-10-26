
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',

})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     // Fix deps that don't work with vite
  //     'stream': require.resolve('stream-browserify'),
  //     'zlib': require.resolve('browserify-zlib'),
  //     'util': require.resolve('util'),
  //   }

  //   // Important: return the modified config
  //   return config
  // },
}

module.exports = withPWA(nextConfig)
