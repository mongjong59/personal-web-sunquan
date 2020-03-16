module.exports = {
  siteMetadata: {
    title: `Qice Sun`,
    description: `Qice Sun's porfolio site`,
    author: `Qice Sun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages/works`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/works`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [{
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 600,
            related: false,
            noIframeBorder: true,
          }
        }]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Qice Sun`,
        short_name: `Qice Sun`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
