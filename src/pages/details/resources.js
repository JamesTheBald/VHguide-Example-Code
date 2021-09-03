import React from "react";

import Layout from "../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../components/2details/DetailsLayout";
import DetailsResources from "../components/2details/DetailsResources";
import { getContentIDandName } from "../../functions/getContentIDandName";

const Resources = () => {
  const { contentID } = getContentIDandName();

  return (
    <DetailsLayout>
      <DetailsResources contentID={contentID} />;
    </DetailsLayout>
  );
};

Resources.Layout = Layout;

export default Resources;

