import React, { useEffect } from "react";
import { graphql } from "gatsby";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import PearlsPanelsBI from "../components/3aboutEtc/PearlsPanelsBI";

const Pearls = props => {
  const { data } = props; // Gatsby pages receive a location object upon loading
  const { setWinWidth, setWinHeight, queryData, log, log2 } = useMyContext();
  false && console.log(log, log2);

  queryData.current = data;

  log && console.log("");
  log && console.log("pearls.js runs.");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  return <PearlsPanelsBI />;
};

export const query = graphql`
  query pearlsQuery {
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
  }
`;

Pearls.Layout = Layout;

export default Pearls;
