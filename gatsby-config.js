module.exports = {
  siteMetadata: {
    title: `Subudei's Blog`,
    author: `Milan Cirkovic`,
  },
  plugins: [
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-remark`,
  ],
}
