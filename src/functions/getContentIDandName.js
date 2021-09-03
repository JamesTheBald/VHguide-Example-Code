import { branch } from "../content/branch";
import { navigate } from "gatsby";

import { useMyContext } from "../context/Context";

const getContentIDandName = () => {
  const { locn, setNavBarOpen, log } = useMyContext();

  const returnToExplorePage = () => {
    log && console.log("getContentIDandName.js - Returning to 'Explore' page");
    navigate("/explore");
    setNavBarOpen(false);
  };

  let topicObj = {};
  let subtopicObj = {};
  let contentID = "";
  let hesitancyTypeName = "";

  // Check that contentID is valid in both branch and contentPersonas
  if (branch[locn.branch]?.topic[locn.topic]?.subtopic[locn.subtopic]?.contentID) {
    log && console.log("getContentIDandName.js - contentID found in branch.js.");
    topicObj = branch[locn.branch].topic[locn.topic];
    subtopicObj = topicObj.subtopic[locn.subtopic];
    contentID = subtopicObj.contentID;
    hesitancyTypeName = subtopicObj.subtopicNameAsTitle ? subtopicObj.subtopicNameAsTitle : topicObj.topicNameAsTitle;

    if (contentPersonas[contentID]) {
      log && console.log("getContentIDandName.js contentID also found in contentPersonas. contentID=", contentID);
    } else {
      log && console.log("getContentIDandName.js But no contentID for'", contentID, "' found in contentPersonas.");
      contentID = "BadContentID";
      hesitancyTypeName = "Bad Path or ContentID";
      log && console.log("getContentIDandName.js Using contentID='", contentID, "' instead");
      returnToExplorePage();
    }
  } else {
    log && console.log("getContentIDandName.js Invalid contentID path in branch.js. locn=", locn);
    contentID = "BadContentID";
    hesitancyTypeName = "Bad Path or ContentID";
    log && console.log("getContentIDandName.js Using contentID='", contentID, "' instead");
    returnToExplorePage();
  }
  return { contentID, hesitancyTypeName };
};

export { getContentIDandName };
