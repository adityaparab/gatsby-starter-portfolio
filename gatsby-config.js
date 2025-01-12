module.exports = {
  pathPrefix: '/gatsby-starter-portfolio',
  siteMetadata: {
    title: 'Gatsby Portfolio Starter',
    description: 'Gatsby portfolio for kickstarting your portfolio project.',
    author: 'Knochenmark',
    paginationPageSize: 4,
    menuLinks: [
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'Page 2',
        link: '/page-2',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'About',
        link: '/about',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
