import React, { useEffect } from "react";
import { Router } from "@reach/router";
import { graphql } from "gatsby";

import { useMyContext } from "../context/Context";
import AdviceTabNavBar from "../components/2details/AdviceTabNavBar";
import AdviceQuoteGroupList from "../components/2details/AdviceQuoteGroupList";
import AdviceEaase from "../components/2details/AdviceEaase";
import AdviceFullStory from "../components/2details/AdviceFullStory";
import AdviceWhatsWorkingBI from "../components/2details/AdviceWhatsWorkingBI";
import Layout from "../components/0navAndFooter/NavFooterLayout";
import DetailsLayout from "../components/2details/DetailsLayout";
import DetailsOverviewBI from "../components/2details/DetailsOverviewBI";
import DetailsResources from "../components/2details/DetailsResources";
import PediatricsPanelsBI from "../components/2details/PediatricsPanelsBI";
import DetailsPearls from "../components/2details/DetailsPearls";

const Details = props => {
  const { data, location } = props;
  const { contentID, hesType, advice, related, setWinWidth, setWinHeight, queryData, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  queryData.current = data;
  const path = location.pathname;

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  const otherLegitAdviceTabPaths = ["/advice/engage", "/advice/affirm", "/advice/ask", "/advice/evoke", "advice/pediatrics" ];

  const EaaseIntro = ({ advice }) => {
    return (
      <>
        <AdviceWhatsWorkingBI />
        <AdviceEaase advice={advice} />
      </>
    );
  };

  const EaasePages = () => {
    return (
      <>
        <AdviceWhatsWorkingBI />
        <AdviceTabNavBar />
        <AdviceQuoteGroupList advice={advice} />
      </>
    );
  };

  if (contentID) {
    return (
      <DetailsLayout hesType={hesType} related={related} path={path}>
        {/* Note: for the following routing to work you need the prefix option set up for
            gatsby-plugin-create-client-paths in gatsby-config.js */}
        <Router basepath="/details">
          <DetailsOverviewBI default path="/overview" contentID={contentID} />
          <DetailsResources path="/resources" contentID={contentID} />
          <DetailsPearls path="/pearls" />
          <AdviceFullStory path="/advice/fullstory" />
          <PediatricsPanelsBI path="/advice/pediatrics" />
          <EaaseIntro path="/advice/eaase" advice={advice} />
          {otherLegitAdviceTabPaths.map((page, idx) => (
            // For Details-Advice-Engage, Affirm, Ask, Evoke, Pediatrics
            <EaasePages key={idx} path={page} />
          ))}
        </Router>
      </DetailsLayout>
    );
  } else {
    return <></>;
  }
};

export const query = graphql`
  query peopleIconQuery {
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

Details.Layout = Layout;

export default Details;
