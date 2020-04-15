module.exports = {
  siteMetadata: {
    title: 'IBM Client Technical Engineering Cloud Pak Immersion Wiki',
    description:
      'Collection of content created and maintained by the IBM Client Technical Engineering Team',
    keywords: 'IBM,CTE,gatsby,theme,carbon',
  },
  // pathPrefix: '/client-technical-engineering/learn-cloudpakintegration-site/',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'IBM Client Technical Engineering',
        short_name: 'IBM Client Technical Engineering',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.com/IBMIntegration/learn-cloudpakintegration-site',
          // subDirectory: "/",
          isSearchEnabled: true,
        },
      },
    },
  ],
}
