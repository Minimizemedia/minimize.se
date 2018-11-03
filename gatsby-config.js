module.exports = {
  siteMetadata: {
    title: 'Minimize',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Minimize LAB',
        short_name: 'M LAB',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#999',
        display: 'minimal-ui',
        // TODO: Change next line to match icon
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-glamor',
    'gatsby-plugin-offline',
  ],
};
