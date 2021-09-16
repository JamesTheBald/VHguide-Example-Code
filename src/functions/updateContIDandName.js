import { branch } from "../content/branch";
import { navigate } from "gatsby";

import { contentPersonas } from "../content/contentPersonas";

const updateContIDandName = (locn, setContentID, setHesitTypeName, setNavBarOpen, log, log2) => {
  // NB: as a function, this fn can't use hooks, i.e. no useContext. Hence pass in as params.

  log && console.log("updateContIDandName.js runs.");
  log2 && console.log("updateContIDandName.js locn=", locn);

  let contIDTemp;
  let hesitTypeTemp;

  const bailOnBadContentID = () => {
    contIDTemp = "BadContentID";
    hesitTypeTemp = "Bad Path or ContentID";
    log && console.log("updateContIDandName.js Using contIDTemp='", contIDTemp, "' instead");
    log && console.log("updateContIDandName.js - Returning to 'Explore' page");
    navigate("/explore");
    setNavBarOpen(false);
  };

  const topicObj = branch[locn.branch]?.topic[locn.topic];
  const subtopicObj = topicObj?.subtopic[locn.subtopic];

  if (subtopicObj?.contentID) {
    log2 && console.log("updateContIDandName.js - contentID found in branch.js.");
  } else {
    log && console.log("updateContIDandName.js Invalid contentID path in branch.js for locn=", locn);
    bailOnBadContentID();
  }

  contIDTemp = subtopicObj?.contentID;
  hesitTypeTemp = subtopicObj?.subtopicNameAsTitle ? subtopicObj.subtopicNameAsTitle : topicObj.topicNameAsTitle;

  if (contentPersonas[contIDTemp]) {
    log2 && console.log("updateContIDandName.js contentID also found in contentPersonas. contentID=", contIDTemp);
  } else {
    log && console.log("updateContIDandName.js But no contentID for'", contIDTemp, "' found in contentPersonas.");
    bailOnBadContentID();
  }

  setContentID(contIDTemp);
  setHesitTypeName(hesitTypeTemp);

  return { contIDTemp, hesitTypeTemp };
};

export default updateContIDandName;
