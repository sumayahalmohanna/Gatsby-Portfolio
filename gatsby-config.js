module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam Almohanna Portfolio`,
        short_name: `Gatsby Portfolio`,
        start_url: `https://sumayahalmohanna.github.io/Gatsby-Portfolio`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: './src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JVFQS3MNT7", // Google Analytics / GA
         // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
         // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        //gtagConfig: {
          //optimize_id: "OPT_CONTAINER_ID",
          //anonymize_ip: true,
          //cookie_expires: 0,
        //},
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          //respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 2450844,
        sv: 6,
      },
    },
  ],
};