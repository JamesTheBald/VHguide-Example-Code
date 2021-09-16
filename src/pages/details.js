import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../components/2details/DetailsLayout";
import DetailsOverview from "../components/2details/DetailsOverview";
import DetailsResources from "../components/2details/DetailsResources";
import AdviceTabNavBar from "../components/2details/AdviceTabNavBar";
import AdviceQuoteGroupList from "../components/2details/AdviceQuoteGroupList";
import AdviceEaase from "../components/2details/AdviceEaase";
import AdviceFullStory from "../components/2details/AdviceFullStory";
import AdviceWhatsWorking from "../components/2details/AdviceWhatsWorking";
import updateContIDandName from "../functions/updateContIDandName";
import updateAdviceAndRelateds from "../functions/updateAdviceAndRelateds";

const Details = () => {
  const { locn, fullStoryID, setFullStoryID, setNavBarOpen, log, log2 } = useMyContext();

  const [contentID, setContentID] = useState();
  const [hesitTypeName, setHesitTypeName] = useState();
  const [advice, setAdvice] = useState();
  const [related, setRelated] = useState();

  log && console.log("");
  log && console.log("details.js runs");
  log2 && console.log("details.js runs. locn=", locn);
  log2 && console.log("details.js runs. fullStoryID=", fullStoryID);
  log2 && console.log("details.js Initially, contentID=", contentID);

  // let contIDTemp;
  useEffect(() => {
    const contIDTemp = updateContIDandName(locn, setContentID, setHesitTypeName, setNavBarOpen, log, log2).contIDTemp;
    log2 && console.log("details.js contentIDTemp=", contIDTemp);
    updateAdviceAndRelateds(contIDTemp, setAdvice, setRelated, setNavBarOpen, log, log2);
  }, [locn, contentID, setNavBarOpen, log, log2]);

  const otherLegitAdviceTabPaths = ["/advice/engage", "/advice/affirm", "/advice/ask", "/advice/evoke"];

  const EaaseIntro = ({ advice }) => {
    return (
      <>
        <AdviceWhatsWorking />
        <AdviceEaase advice={advice} />
      </>
    );
  };

  const EaasePages = ({ advice, setFullStoryID }) => {
    return (
      <>
        <AdviceWhatsWorking />
        <AdviceTabNavBar />
        <AdviceQuoteGroupList advice={advice} setFullStoryID={setFullStoryID} />
      </>
    );
  };

  if (contentID) {
    return (
      <DetailsLayout hesitTypeName={hesitTypeName} related={related}>
        <Router basepath="/details">
          <DetailsOverview path="/overview" contentID={contentID} />
          <DetailsResources path="/resources" contentID={contentID} />
          <AdviceFullStory path="/advice/fullstory" fullStoryID={fullStoryID} />
          <EaaseIntro path="/advice/eaase" advice={advice} />
          {otherLegitAdviceTabPaths.map((page, idx) => (
            <EaasePages key={idx} path={page} advice={advice} setFullStoryID={setFullStoryID} />
          ))}
        </Router>
      </DetailsLayout>
    );
  } else {
    return <></>
  }
};

Details.Layout = Layout;

export default Details;
