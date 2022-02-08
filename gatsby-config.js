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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-55WGF6P",
  
        // Include GTM in development. Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded. Should be an object or a function that is executed in the browser
        // Defaults to null
        // defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered on every Gatsby route change. Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`, // See https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
      options: {
        trackingIds: [
          "G-SYE6NNWMLJ", // Google Analytics aka GA
        ],
        // The following object gets passed directly to the gtag config command.This will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   cookie_expires: 0,
        // },
        // The following object is used for configuration specific to this plugin
        pluginConfig: {
          head: true, // Put tracking script in the head instead of the body  // was false
          respectDNT: false,  // ""..using Google Global Site Tag does not necessarily constitute Tracking..."
          // exclude: ["/preview/**", "/do-not-track/me/too/"],     // Avoids sending pageview hits from custom paths
        },
      },
    },

    `gatsby-plugin-react-helmet`,

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
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "collabLogos",
        path: `${__dirname}/src/assets/collabLogos/`,
      },
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

    `gatsby-plugin-postcss`,
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
