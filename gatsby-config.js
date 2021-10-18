module.exports = {
  siteMetadata: {
    title: `Vaccine Hesitancy Guide`,
    author: "Dr Myles Leslie's team",
    description:
      "A guide to help primary care clinicians identify types of COVID-19 vaccine hesitancy. Advice and resources for addressing them.",
    url: "https://www.vhguide.ca", // No trailing slash allowed!
    keywords: `vaccine, vaccination, hesitancy, covid, COVID-10, anti-vax, conversations, misinformation, clinician, advice`,
    image: "/images/homePage/Home Page Icon.svg", // Path to your image you placed in the 'static' folder
  },

  flags: {
    flags: { PRESERVE_WEBPACK_CACHE: true },
  },

  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "homepage",
        path: `${__dirname}/src/images/homepage/`,
      },
      // __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "peopleIcons",
        path: `${__dirname}/src/images/peopleIcons/`,
      },
      // __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,   // See https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-SYE6NNWMLJ", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // The following object gets passed directly to the gtag config command.This will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // The following object is used for configuration specific to this plugin
        pluginConfig: {
          head: false,            // Put tracking script in the head instead of the body
          // respectDNT: true,    // ""..using Google Global Site Tag does not necessarily constitute Tracking..."
          // exclude: ["/preview/**", "/do-not-track/me/too/"],     // Avoids sending pageview hits from custom paths
        },
      },
    },
    
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/details/*`] },
    },

    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
