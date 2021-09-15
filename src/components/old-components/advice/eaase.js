import React from "react";

import { getContentIDandName } from "../../../functions/getContentIDandName";
import { getAdviceAndRelateds } from "../../../functions/getAdviceAndRelateds";
import Layout from "../../../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../../../components/2details/DetailsLayout";
import AdviceWhatsWorking from "../../../components/2details/AdviceWhatsWorking";
import AdviceEaase from "../../../components/2details/AdviceEaase";
import { useMyContext } from "../../../context/Context";

const Eaase = () => {
  const { locn, setNavBarOpen, log, log2 } = useMyContext();

  const { contentID } = getContentIDandName(locn, setNavBarOpen, log, log2);
  const { advice } = getAdviceAndRelateds(contentID, setNavBarOpen, log, log2);

  return (
    <DetailsLayout>
      <AdviceWhatsWorking />
      <AdviceEaase advice={advice} />
    </DetailsLayout>
  );
};

Eaase.Layout = Layout;

export default Eaase;
