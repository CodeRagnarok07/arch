
/** @type {import('next').NextConfig} */

const million = require('million/compiler');
const millionConfig = {
  auto: true,
  // if you're using RSC:
  // auto: { rsc: true },
}
// module.exports = million.next(nextConfig, millionConfig)


const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',

})



// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       // Fix deps that don't work with vite
//       'stream': require.resolve('stream-browserify'),
//       'zlib': require.resolve('browserify-zlib'),
//       'util': require.resolve('util'),
//     }

//     // Important: return the modified config
//     return config
//   },
// }
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.us-west-2.amazonaws.com'],
  },
}
module.exports = withPWA(nextConfig)
