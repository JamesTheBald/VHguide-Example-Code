import React from "react";

import Layout from "../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../components/2details/DetailsLayout";
import DetailsOverview from "../components/2details/DetailsOverview";
import { getContentIDandName } from "../../functions/getContentIDandName";

const Overview = () => {
  const { contentID } = getContentIDandName();

  return (
    <DetailsLayout>
      <DetailsOverview contentID={contentID} />;
    </DetailsLayout>
  );
};

Overview.Layout = Layout;

export default Overview;

