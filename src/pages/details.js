import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { graphql } from "gatsby";

import { useMyContext } from "../context/Context";
import AdviceTabNavBar from "../components/2details/AdviceTabNavBar";
import AdviceQuoteGroupList from "../components/2details/AdviceQuoteGroupList";
import AdviceEaase from "../components/2details/AdviceEaase";
import AdviceFullStory from "../components/2details/AdviceFullStory";
import AdviceWhatsWorking from "../components/2details/AdviceWhatsWorking";
import Layout from "../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../components/2details/DetailsLayout";
import DetailsOverview from "../components/2details/DetailsOverview";
import DetailsResources from "../components/2details/DetailsResources";
import PediatricsPanels from "../components/2details/PediatricsPanels";
import DetailsPediatricPearls from "../components/2details/DetailsPediatricPearls";
import updateContIDandName from "../functions/updateContIDandName";
import updateAdviceAndRelateds from "../functions/updateAdviceAndRelateds";

const Details = props => {
  const { data, location } = props;
  const { locn, fullStoryID, setWinWidth, setWinHeight, queryData, log, log2 } = useMyContext();
  queryData.current = data;
  const path = location.pathname;

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  const [contentID, setContentID] = useState();
  const [hesitTypeName, setHesitTypeName] = useState();
  const [advice, setAdvice] = useState();
  const [related, setRelated] = useState();

  log2 && console.log("details.js runs");
  log2 && console.log("details.js runs. locn=", locn);
  log2 && console.log("details.js runs. fullStoryID=", fullStoryID);
  log2 && console.log("details.js Initially, contentID=", contentID);

  useEffect(() => {
    const contIDTemp = updateContIDandName(locn, setContentID, setHesitTypeName, log, log2).contIDTemp;
    log && console.log("details.js contentIDTemp=", contIDTemp);
    updateAdviceAndRelateds(contIDTemp, setAdvice, setRelated, log, log2);
  }, [locn, contentID, log, log2]);

  const otherLegitAdviceTabPaths = ["/advice/engage", "/advice/affirm", "/advice/ask", "/advice/evoke"];

  const EaaseIntro = ({ advice }) => {
    return (
      <>
        <AdviceWhatsWorking />
        <AdviceEaase advice={advice} />
      </>
    );
  };

  const EaasePages = () => {
    return (
      <>
        <AdviceWhatsWorking />
        <AdviceTabNavBar />
        <AdviceQuoteGroupList advice={advice} />
      </>
    );
  };

  if (contentID) {
    return (
      <DetailsLayout hesitTypeName={hesitTypeName} related={related} path={path}>
        {/* Note: for the following routing to work you need the prefix option set up for
            gatsby-plugin-create-client-paths in gatsby-config.js */}
        <Router basepath="/details">
          <DetailsOverview path="/overview" contentID={contentID} />
          <DetailsResources path="/resources" contentID={contentID} />
          <DetailsPediatricPearls path="/pearls" />
          <AdviceFullStory path="/advice/fullstory" fullStoryID={fullStoryID} />
          <PediatricsPanels path="/advice/pediatrics" />
          <EaaseIntro path="/advice/eaase" advice={advice} />
          {otherLegitAdviceTabPaths.map((page, idx) => (
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