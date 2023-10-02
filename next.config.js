
/** @type {import('next').NextConfig} */

const million = require('million/compiler');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',

})


// const nextConfig = {
//   reactStrictMode: true
// }


const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
}

// module.exports = withPWA(nextConfig) //million.next(nextConfig, millionConfig);


const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Fix deps that don't work with vite
      'stream': require.resolve('stream-browserify'),
      'zlib': require.resolve('browserify-zlib'),
      'util': require.resolve('util'),
    }

    // Important: return the modified config
    return config
  },
}

module.exports = million.next(nextConfig, millionConfig)
