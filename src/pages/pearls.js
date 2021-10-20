import React from "react";
import { graphql } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import AboutEtc from "../components/3aboutEtc/AboutEtc";
import { pearlsContent } from "../content/pearlsContent";

const Pearls = props => {
  const { location, data } = props;
  const { queryData } = useMyContext();
  queryData.current = data;

  const path = location.pathname;
  console.log("pearls.js runs. path=", path);

  return (
    <AboutEtc
      pageTitle="Clinical Pearls"
      path={path}
      contentArray={pearlsContent}
    />
  );
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
