module.exports = {
  siteMetadata: {
    title: "Electricity App Frontend",
    appHeader: "Home Electricity (Struggle)",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
