import { navigate } from "gatsby";

import { contentPersonasBI } from "../content/contentPersonasBI";

const setAdviceAndRelateds = (contentIDTemp, setAdvice, setRelated, log, log2) => {
  // NB: these params need to come in as props, because hooks (esp. useContext) don't work in regular functions
  0 && console.log(log, log2);
  log && console.log("setAdviceAndRelated.js runs. contID=", contentIDTemp);
  log && console.log("setAdviceAndRelated.js runs. contentPersonasBI[contID]=", contentPersonasBI[contentIDTemp]);
  log && console.log("setAdviceAndRelated.js runs. contentPersonasBI[contID].advice=", contentPersonasBI[contentIDTemp].advice);

  let adviceTemp = contentPersonasBI[contentIDTemp]?.advice;
  let relatedTemp = contentPersonasBI[contentIDTemp]?.related;

  if (adviceTemp) {
    log && console.log("setAdviceAndRelated.js adviceTemp=", adviceTemp);
    log && console.log("setAdviceAndRelated.js relatedTemp=", relatedTemp);
  } else {
    log &&
      console.log("setAdviceAndRelated.js advice content not found for contID=", contentIDTemp, ". Reverting to overview tab");
    navigate("/details/overview");
  }

  setAdvice(adviceTemp);
  setRelated(relatedTemp);
  log2 && console.log("setAdviceAndRelated.js setAdvice to ", adviceTemp);

  return null;
};

export default setAdviceAndRelateds;
