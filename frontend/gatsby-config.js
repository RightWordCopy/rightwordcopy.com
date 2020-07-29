require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log(`Using Environment: ${process.env.NODE_ENV}`)
module.exports = {
  siteMetadata: {
    title: `Right Word Copy - Superior, Professional Copy Writing Services`,
    description: `As a professional copywriter, I’m here to share my skill with words, and help you get your message out in the most effective way possible.`,
    author: `@lqm_19`,
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
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        overlayDrafts: true,
        watchMode: process.env.NODE_ENV === "development" ? true : false,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`
    // {
    //   // resolve: `gatsby-plugin-manifest`,
    //   // options: {
    //   //   name: `gatsby-starter-default`,
    //   //   short_name: `starter`,
    //   //   start_url: `/`,
    //   //   background_color: `#663399`,
    //   //   theme_color: `#663399`,
    //   //   display: `minimal-ui`,
    //   //   icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
