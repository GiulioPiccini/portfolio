require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    // Manifest ** Need to declare this plugin before gatsby-plugin-offline for work correctly ** NEED TO ADD ICON AND ICONS
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Creative Portfolio`,
        short_name: `CP`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        start_url: process.env.PATH_PREFIX,
        background_color: `#383838`,
        theme_color: `#383838`,
        display: `standalone`,
        icon: `public/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Dato CMS
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    // Off line
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/index/`, `works/*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/public/static/`,
      },
    },
  ],
}
