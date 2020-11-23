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
    // Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Creative Portfolio`,
        short_name: `CP`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#383838`,
        theme_color: `#383838`,
        display: `standalone`,
        icon: `src/images/favicon/favicon-16x16.ico`,
        icons: [
          {
            src: `src/images/favicon/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/images/favicon/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // Off line
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/index/`, `works/*`],
      },
    },
  ],
}
