// require('dotenv').config()

// const { DBX_ACCESS_TOKEN } = process.env.DBX_ACCESS_TOKEN
const DBX_ACCESS_TOKEN = 'auTelTITMHAAAAAAAAAATG35myi8gXKZKYRe3QjHu_AZve2d2BlxttTf5PqlmN8d'

module.exports = {
  siteMetadata: {
    title: 'KAI CAMERA',
  },
  plugins: [
    'gatsby-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['material icons', 'roboto:300,400,500,700'],
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'hb-store',
        short_name: 'hbs',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
      },
    },
    {
      resolve: 'gatsby-source-dropbox',
      options: {
        accessToken: `${DBX_ACCESS_TOKEN}`,
        extensions: ['.jpg', '.png'],
        path: '',
        recursive: false,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
