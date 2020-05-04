const fs = require('fs')
const path = require('path')

const twitter = 'homeferences'
const github = 'https://github.com/homeferences'
const { author } = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'package.json'))
)

module.exports = {
  siteMetadata: {
    title: 'Homeferences',
    description:
      'Homeferences are conferences which happen virtually, so you can attend from your home.',
    url: 'https://homeferences.netlify.com/',
    author: author,
    image: `og-image.jpeg`,
    intro: 'Conferences, but in your home.',
    searchPlaceholder: 'Search for ...',
    emptyListText: 'No events found',
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
      {
        name: `@${twitter}`,
        url: `https://twitter.com/${twitter}`,
      },
    ],
    footerLinks: [
      {
        name: 'GitHub',
        url: github,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
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
        icons: [],
        legacy: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
