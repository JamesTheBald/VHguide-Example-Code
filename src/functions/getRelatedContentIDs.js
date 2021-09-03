import { navigate } from "gatsby";

import { contentPersonas } from "../content/contentPersonas";
import { useMyContext } from "../context/Context";

const getRelatedContentIDs = contentID => {
  const { setNavBarOpen, log, log2 } = useMyContext();

  let advice = {};
  let related = [];
  // Test & assign advice, related objects
  if (contentPersonas[contentID].advice) {
    advice = contentPersonas[contentID].advice;
    log2 && console.log("getAdviceAndRelated.js advice=", advice);
    related = contentPersonas[contentID].related;
    if (!related) related = [""];
    log2 && console.log("getAdviceAndRelated.js related=", related);
  } else {
    log && console.log("getAdviceAndRelated.js No advice content found for contentID=", contentID, ". Reverting to overview tab");
    navigate("/details/advice/overview");
    setNavBarOpen(false);
  }

  return { advice, related };
};

export { getRelatedContentIDs };
