import React from "react";

import Layout from "../../../components/0nav&footer/NavFooterLayout";
import DetailsLayout from "../../../components/2details/DetailsLayout";
import AdviceFullStory from "../../../components/2details/AdviceFullStory";
import { useMyContext } from "../../../context/Context";

const FullStory = () => {
  const { fullStoryID } = useMyContext();

  return (
    <DetailsLayout>
      <AdviceFullStory fullStoryID={fullStoryID} />
    </DetailsLayout>
  );
};

FullStory.Layout = Layout;

export default FullStory;
