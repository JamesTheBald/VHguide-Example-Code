import React from "react";

import Layout from "../../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../../components/2details/DetailsLayout";
import DetailsResources from "../../components/2details/DetailsResources";
import { getContentIDandName } from "../../functions/getContentIDandName";
import { useMyContext } from "../../context/Context";

const Resources = () => {
  const { locn, setNavBarOpen, log, log2 } = useMyContext();
  const { contentID } = getContentIDandName(locn, setNavBarOpen, log, log2);

  return (
    <DetailsLayout>
      <DetailsResources contentID={contentID} />;
    </DetailsLayout>
  );
};

Resources.Layout = Layout;

export default Resources;

