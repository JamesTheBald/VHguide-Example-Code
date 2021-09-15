import React, { useEffect, useRef } from "react";

import Layout from "../../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../../components/2details/DetailsLayout";
import DetailsOverview from "../../components/2details/DetailsOverview";
import { getContentIDandName } from "../../functions/getContentIDandName";
import { useMyContext } from "../../context/Context";

const Overview = () => {
  const { locn, contentID, setNavBarOpen, log, log2 } = useMyContext();
  log2 && console.log("overview.js initial locn=", locn, " & contentID.current=", contentID.current);

  useEffect(() => {
    console.log("overview.js useEffect locn=", locn);
    contentID.current = getContentIDandName(locn, setNavBarOpen, log, log2).contentIDFound;
    console.log("overview.js useEffect contentID.current=", contentID.current);
  }, [useMyContext, locn]);

  return (
    <DetailsLayout>
      <DetailsOverview />
    </DetailsLayout>
  );
};

Overview.Layout = Layout;

export default Overview;
