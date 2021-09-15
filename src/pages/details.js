import React, { useState } from "react";
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
import getContIDandName from "../functions/getContIDandName";
import getAdviceAndRelateds from "../functions/getAdviceAndRelateds";

const Details = props => {
  const { fullStoryID, setFullStoryID } = props;
  const { locn, setNavBarOpen, log, log2 } = useMyContext();
  log && console.log("");
  log && console.log("details.js runs");

  const { contID, hesitType } = getContIDandName(locn, setNavBarOpen, log, log2);
  const { advice0, related0 } = getAdviceAndRelateds(contID, setNavBarOpen, log, log2);
  log && console.log("details.js contID=", contID, " and hesitType=", hesitType);
  log && console.log("details.js advice=", advice0);
  log && console.log("details.js related=", related0);

  const [contentID, setContentID] = useState(contID);
  const [hesitTypeName, setHesitTypeName] = useState(hesitType);
  const [advice, setAdvice] = useState(advice0);
  const [related, setRelated] = useState(related0);

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

  return (
    <DetailsLayout hesitTypeName={hesitTypeName} related={related}>
      <Router basepath="/details">
        <DetailsOverview path="/overview" contentID={contID} />
        <DetailsResources path="/resources" contentID={contID} />
        <AdviceFullStory path="/advice/fullstory" fullStoryID={fullStoryID} />
        <EaaseIntro path="/advice/eaase" advice={advice} />
        {otherLegitAdviceTabPaths.map(page => (
          <EaasePages path={page} advice={advice} setFullStoryID={setFullStoryID} />
        ))}
      </Router>
    </DetailsLayout>
  );
};

Details.Layout = Layout;

export default Details;
