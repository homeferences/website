module.exports = {
  siteMetadata: {
    title: 'Homeferences',
    description: 'Homeferences are Conferences which happen virtually, so you can attend from your home.',
    url: 'https://homeferences.netlify.com/',
    author: '@homeferences',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Conferences, but in your home.',
    menuLinks: [
      {
        name: 'Homeferences',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/homeferences/website',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/homeferences',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Homeferences`,
        short_name: `Homeferences`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
