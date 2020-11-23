require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
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
    // Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Creative Portfolio",
        short_name: "CP",
        start_url: "/",
        background_color: "#383838",
        theme_color: "#383838",
        display: "standalone",
        icon: "src/images/favicon/favicon.ico",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
