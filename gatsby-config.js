module.exports = {
  siteMetadata: {
    title: `Vaccine Hesitancy Guide`,
    author: "Dr Myles Leslie's team",
    description:
      "A guide to help primary care clinicians identify types of COVID-19 vaccine hesitancy. Advice and resources for addressing them.",
    url: "https://www.vhguide.ca", // No trailing slash allowed!
    keywords: `vaccine, vaccination, hesitancy, covid, COVID-10, anti-vax, conversations, misinformation, clinician, advice`,
    image: "/assets/homePage/Home Page graphic.svg", // Path to your image you placed in the 'static' folder
  },

  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -300,
        duration: 1000,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "homepagePics",
        path: `${__dirname}/src/assets/homepage/`,
      },
      // __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "featuredOnLogos",
        path: `${__dirname}/src/assets/featuredOn/logos/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "peopleIcons",
        path: `${__dirname}/src/assets/peopleIcons/`,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "webinarShots",
        path: `${__dirname}/src/assets/featuredOn/snapshots/`,
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`, // See https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
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
          head: false, // Put tracking script in the head instead of the body
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
      options: { prefixes: [`/details/*`, `/about/*`] },
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
    // `gatsby-plugin-preload-fonts`,
  ],
};
