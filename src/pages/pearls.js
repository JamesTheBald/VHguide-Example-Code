import React, { useEffect } from "react";
import { graphql } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import PearlsPanels from "../components/3aboutEtc/PearlsPanels";

const Pearls = props => {
  const { data } = props; // Gatsby pages receive a location object upon loading
  const { setWinWidth, setWinHeight, queryData, log, log2 } = useMyContext();
  false && console.log(log, log2);

  queryData.current = data;

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  return <PearlsPanels />;
};

export const query = graphql`
  query pearlsQuery {
    homepagePics: allFile(filter: { sourceInstanceName: { eq: "homepagePics" }, extension: { eq: "jpg" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: JPG, placeholder: BLURRED)
          }
        }
      }
    }
    featuredOnLogos: allFile(filter: { sourceInstanceName: { eq: "featuredOnLogos" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, height: 210)
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
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, height: 64)
          }
          publicURL
        }
      }
    }
    pplIcons: allFile(filter: { sourceInstanceName: { eq: "peopleIcons" }, extension: { eq: "svg" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          publicURL
        }
      }
    }
    webinarShots: allFile(filter: { sourceInstanceName: { eq: "webinarShots" } }) {
      edges {
        node {
          dir
          relativePath
          sourceInstanceName
          childImageSharp {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, height: 300)
          }
          publicURL
        }
      }
    }
  }
`;

Pearls.Layout = Layout;

export default Pearls;
