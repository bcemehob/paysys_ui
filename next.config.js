module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      return config
    },
    
    async rewrites() {
      return [
        {
          source: '/api/:path*', 
          destination: 'http://localhost:4000/api/:path*/' 
        }
      ]
    },
  }
  