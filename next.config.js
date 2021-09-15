module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      return config
    },
    
    async rewrites() {
      return [
        {
          source: '/api/:path*', 
          destination: 'http://localhost:8080/api/:path*/'
        }
      ]
    },
  }
  