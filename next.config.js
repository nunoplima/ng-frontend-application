/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/quests',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
