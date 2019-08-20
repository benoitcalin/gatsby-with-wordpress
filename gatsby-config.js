module.exports = {
  siteMetadata: {
    title: `Gatsby With Wordpress`,
    description: `A nice try.`,
    author: `bencal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://metroboulododo.fr/graphql`,
      },
    },
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'WPGraphQL_MediaItem',
        imagePath: 'image.sourceUrl',
        // OPTIONAL: Name you want to give new image field on the node.
        // Defaults to 'localImage'.
        name: 'allItemImages',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
