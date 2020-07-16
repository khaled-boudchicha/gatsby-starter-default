module.exports = {
  pathPrefix: `/img`,
  siteMetadata: {
    title: 'Sym Algerie',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/favicon.png',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-remark-copy-linked-files`,
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`],
      },
    },

    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sym Algérie',
        short_name: 'Sym',
        start_url: '/',
        background_color: '#6da7d5',
        theme_color: '#f45454',
        display: 'minimal-ui',
        icon: 'src/images/icon-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
