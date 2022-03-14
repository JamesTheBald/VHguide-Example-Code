import React, { useEffect } from "react";
import { graphql } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import Home1TopCarousel from "../components/1home&explore/Home1TopCarousel";
import Home3WhoWeAre from "../components/1home&explore/Home3WhoWeAre";
import Home4TestimonialsEtc from "../components/1home&explore/Home4TestimonialsEtc";

const Home = props => {
  const { data } = props;
  const { setWinWidth, setWinHeight, queryData, log } = useMyContext();
  queryData.current = data;

  log && console.log("");
  log && console.log("index.js runs.");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const wid = window.innerWidth;
      log && console.log("index.js useEffect has mounted, window var is defined. Setting winWidth & winHeight");
      setWinWidth(wid);
      setWinHeight(window.innerHeight);
    } else {
      log && console.log("index.js HAS MOUNTED BUT WINDOW VAR IS STILL UNDEFINED!! Trying again after delay.");
      const timer = setTimeout(setWinWidth(window.innerWidth), 500);
      // The above use of window.innerWidth will kick an error if window var is STILL undefined after timeout
      clearTimeout(timer);
    }
  }, [setWinWidth, setWinHeight, log]);

  return (
    <>
      <main className="w-screen bg-white text-blue-black overflow-x-hidden">
        <Home1TopCarousel />
        <Home3WhoWeAre />
        <Home4TestimonialsEtc />
        <div className="w-full h-16 md:h-24"></div>
      </main>
    </>
  );
};

// From GraphiQL, accessed at http://localhost:8000/___graphql
// {sourceInstanceName: {eq: "<name>"} params below should match the name: fields in the "gatsby-source-filesystem" configs in gatsby-config.js
export const query = graphql`
  query ImagesQuery {
    homepagePics:   allFile(filter: {sourceInstanceName: {eq: "homeAndExplore"}}) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: AUTO, quality: 90, placeholder: BLURRED, layout: CONSTRAINED)
          }
          ext
          publicURL
        }
      }
    }

    featuredOnLogos: allFile(filter: { sourceInstanceName: { eq: "featuredOn" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: AUTO, quality: 100, placeholder: BLURRED, layout: CONSTRAINED, height: 120)
          }
          publicURL
        }
      }
    }
    collabLogos: allFile(filter: { sourceInstanceName: { eq: "collabLogos" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: AUTO, quality: 90, placeholder: BLURRED, layout: CONSTRAINED, height: 120)
          }
          publicURL
        }
      }
    }
  }
`;

Home.Layout = Layout;
// Above Layout assigning follows https://dev.to/milescrighton/keeping-persistent-ui-across-routes-with-gatsby-s-wrappageelement-4o22

export default Home;
