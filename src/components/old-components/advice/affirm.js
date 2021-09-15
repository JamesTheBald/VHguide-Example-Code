import React from "react";

import { getContentIDandName } from "../../../functions/getContentIDandName";
import { getAdviceAndRelateds } from "../../../functions/getAdviceAndRelateds";
import Layout from "../../../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../../../components/2details/DetailsLayout";
import AdviceWhatsWorking from "../../../components/2details/AdviceWhatsWorking";
import AdviceTabNavBar from "../../../components/2details/AdviceTabNavBar";
import AdviceQuoteGroupList from "../../../components/2details/AdviceQuoteGroupList";
import { useMyContext } from "../../../context/Context";

const Affirm = () => {
  const { locn, setFullStoryID, setNavBarOpen, log, log2 } = useMyContext();

  const { contentID } = getContentIDandName(locn, setNavBarOpen, log, log2);
  const { advice } = getAdviceAndRelateds(contentID, setNavBarOpen, log, log2);

  return (
    <DetailsLayout>
      <AdviceWhatsWorking />
      <AdviceTabNavBar />
      <AdviceQuoteGroupList advice={advice} setFullStoryID={setFullStoryID} />
    </DetailsLayout>
  );
};

Affirm.Layout = Layout;

export default Affirm;
