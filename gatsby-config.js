const twitter = 'homeferences'
const github = 'https://github.com/homeferences'

module.exports = {
  siteMetadata: {
    title: 'Homeferences',
    description:
      'Homeferences are Conferences which happen virtually, so you can attend from your home.',
    url: 'https://homeferences.netlify.com/',
    author: '@homeferences',
    image: `${__dirname}/src/images/homeferences.jpeg`,
    intro: 'Conferences, but in your home.',
    twitter,
    github,
    menuLinks: [
      {
        name: 'Homeferences',
        slug: '/',
      },
      {
        name: 'Upcoming',
        slug: '/#upcoming',
      },
      {
        name: 'Past',
        slug: '/#past',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: 'GitHub',
        url: github,
      },
      {
        name: 'Twitter',
        url: `https://twitter.com/${twitter}`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
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
        name: `Homeferences`,
        short_name: `Homeferences`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/homeferences-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
