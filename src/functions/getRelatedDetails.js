import { branch } from "../content/branch";

const getBranchNum = contID => {
  const branchNum = branch.findIndex(currBranch =>
    currBranch.topic.find(currTopic => currTopic.subtopic.find(currSubtopic => currSubtopic.contentID === contID))
  );
  return branchNum;
};

const getTopicNum = (contID, branchNum) => {
  const topNum = branch[branchNum].topic.findIndex(topicObj =>
    topicObj.subtopic.find(subTopObj => subTopObj.contentID === contID)
  );
  return topNum;
};

const getSubtopicNum = (contID, branchNum, topNum) => {
  const subtopNum = branch[branchNum].topic[topNum].subtopic.findIndex(
    subTopObj => subTopObj.contentID === contID // callback fn that returns true when === targetVal is met
  );
  return subtopNum;
};

const getSubtopicName = (contID, log) => {
  const branchNum = getBranchNum(contID);
  const topNum = getTopicNum(contID, branchNum);
  const subtopNum = getSubtopicNum(contID, branchNum, topNum);
  const subtopicName = branch[branchNum].topic[topNum].subtopic[subtopNum].subtopicNameShort;
  log && console.log("Details.js getSubtopicName() contID=", contID);
  log && console.log("getSubtopicName() branchNum=", branchNum, " & topicNum=", topNum);
  log && console.log("getSubtopicName() subtopNum=", subtopNum, " & subtopicName=", subtopicName);
  return subtopicName;
};

export { getBranchNum, getTopicNum, getSubtopicNum, getSubtopicName };
