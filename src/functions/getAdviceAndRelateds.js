import { navigate } from "gatsby";

import { contentPersonas } from "../content/contentPersonas";

const getAdviceAndRelateds = (contID, setNavBarOpen, log, log2) => {
  // NB: these params need to come in as props, as hooks (esp. useContext) doesn't work in regular functions

  log && console.log("getAdviceAndRelated.js runs. contID=", contID);
  log && console.log("getAdviceAndRelated.js runs. contentPersonas[contID]=", contentPersonas[contID]);
  log && console.log("getAdviceAndRelated.js runs. contentPersonas[contID].advice=", contentPersonas[contID].advice);

  let advice0 = {};
  let related0 = [];
  // Test & assign advice, related objects
  if (contentPersonas[contID].advice) {
    advice0 = contentPersonas[contID].advice;
    log2 && console.log("getAdviceAndRelated.js advice=", advice0);
    related0 = contentPersonas[contID].related;
    if (!related0) related0 = [""];
    log2 && console.log("getAdviceAndRelated.js related=", related0);
  } else {
    log &&
      console.log(
        "getAdviceAndRelated.js No advice content found for contentID=",
        contID,
        ". Reverting to overview tab"
      );
    navigate("/details/advice/overview");
    setNavBarOpen(false);
  }

  return { advice0, related0 };
};

export default getAdviceAndRelateds;
