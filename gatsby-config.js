/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `notes`,
    //     path: `${__dirname}/src/notes/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Gatsby Portfolio",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021 Gatsby Portfolio",
    contact: "myemail@email.com",
  },
}
