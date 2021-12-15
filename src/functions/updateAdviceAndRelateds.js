import { navigate } from "gatsby";

import { contentPersonas } from "../content/contentPersonas";

const updateAdviceAndRelateds = (contentIDTemp, setAdvice, setRelated, log, log2) => {
  // NB: these params need to come in as props, because hooks (esp. useContext) don't work in regular functions
  0 && console.log(log, log2);
  log2 && console.log("updateAdviceAndRelated.js runs. contID=", contentIDTemp);
  log2 && console.log("updateAdviceAndRelated.js runs. contentPersonas[contID].advice=", contentPersonas[contentIDTemp].advice);

  let adviceTemp = contentPersonas[contentIDTemp]?.advice;
  let relatedTemp = contentPersonas[contentIDTemp]?.related;

  if (adviceTemp) {
    log2 && console.log("updateAdviceAndRelated.js adviceTemp=", adviceTemp);
    log2 && console.log("updateAdviceAndRelated.js relatedTemp=", relatedTemp);
  } else {
    log &&
      console.log("updateAdviceAndRelated.js advice content not found for contID=", contentIDTemp, ". Reverting to overview tab");
    navigate("/details/overview");
  }

  setAdvice(adviceTemp);
  setRelated(relatedTemp);
  log2 && console.log("updateAdviceAndRelated.js setAdvice to ", adviceTemp);

  return { adviceTemp, relatedTemp };
};

export default updateAdviceAndRelateds;
