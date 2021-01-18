module.exports = {
  siteName: 'Dan Hunt\'s Resume',
  siteDescription: 'Dan Hunt\'s Resume as a static serverless site',
  siteUrl: 'https://danhunt.dev',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-11'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}