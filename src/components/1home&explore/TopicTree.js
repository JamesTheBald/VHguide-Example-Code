import React from "react";
import { navigate } from "gatsby";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Subtopics from "./Subtopics";
import { useMyContext } from "../../context/Context";

const TopicTree = props => {
  const { branchNum } = props;
  const { winWidth, locn, setLocn, branch, widthAdjRatio, log, log2 } = useMyContext();

  log2 && console.log("");
  log && console.log("TopicTree.js runs. branch=", branch);
  log && console.log("TopicTree.js widthAdjRatio=", widthAdjRatio);

  const onClickTopic = (currTopic, topicNum) => {
    if (currTopic.linkToDetails === true) {
      setLocn(currLocn => {
        const newLocn = { ...currLocn, branchNum: branchNum, topic: topicNum, subtopic: 0, showSubtopic: false };
        log && console.log("TopicTree.js onClickTopic() setting locn=", newLocn);
        return newLocn;
      });
      navigate("/details/overview");
    } else {
      setLocn(currLocn => {
        const showTheseSubtopics = locn.topic !== topicNum || !locn.showSubtopic ? true : false;
        // Show subtopics upon change in selected topic, or toggle if current topic is clicked again
        const newLocn = { ...currLocn, topic: topicNum, showSubtopic: showTheseSubtopics };
        log &&
          console.log(
            "TopicTree.js onClickTopic setting locn.topic=",
            topicNum,
            "& locn.showSubtopic=",
            showTheseSubtopics
          );
        return newLocn;
      });
    }
  };

  const outsideMargin = winWidth < 510 ? 18 : 32;
  // const outsideMargin = winWidth < 510 ? 15 : (37 * (widthAdjRatio + 1.5)) / 2.5;
  const borderRadius = winWidth < 510 ? "0px 0px 30px 30px" : "0px 0px 47px 47px";
  const insideMargin = 15 + 20 * (widthAdjRatio - 0.3125);
  const bottomPadding = winWidth < 510 ? 40 : 58;
  const topicStepHt = winWidth < 510 ? 30 : winWidth < 800 ? 36 : 45;
  const leftGapToLine = winWidth < 510 ? 10 * widthAdjRatio : (15 * (widthAdjRatio + 1)) / 2;

  log2 && console.log("TopicTree.js insideMargin=", insideMargin);

  if (branch?.[branchNum]?.topic?.[0]?.topicName) {
    const topics = branch[branchNum].topic;

    return (
      <>
        <div
          name="Rounded Outer Border"
          className="mb-3  flex flex-col  border-3 border-solid border-t-0 border-blue-main relative -top-1"
          style={{
            marginLeft: outsideMargin,
            marginRight: outsideMargin,
            paddingTop: 10,
            paddingBottom: bottomPadding,
            borderRadius: borderRadius,
          }}
        >
          {topics.map((currTopic, topicNum) => {
            const showSubtopics = locn.topic === topicNum && locn.showSubtopic ? true : false;

            return (
              <div key={topicNum}>
                <button
                  name="TopicName line"
                  className={`w-full flex items-center cursor-pointer text-blue-dark hover:text-blue-main tracking-0.5 hoverRevealTrigger`}
                  style={{
                    color: "#263EC5",
                    paddingLeft: insideMargin,
                    paddingTop: topicStepHt,
                  }}
                  onClick={() => onClickTopic(currTopic, topicNum)}
                  onKeyPress={() => onClickTopic(currTopic, topicNum)}
                >
                  <h3 className={`flex-shrink-0 text-16 mxs:text-20 sm:text-22  tracking-0.5 sm:tracking-0.6`}>
                    {winWidth < 900 ? currTopic.topicNameShort : currTopic.topicName}
                  </h3>

                  <div
                    name="hover line"
                    className="hiddenTillHover  w-full  border-blue-main border-solid border-b-3"
                    style={{ marginLeft: leftGapToLine }}
                  />

                  {showSubtopics ? (
                    <div className="flex-shrink-0" style={{ marginRight: insideMargin }}>
                      <IoIosArrowDown size="30" />
                    </div>
                  ) : (
                    <div className="hiddenTillHover flex-shrink-0" style={{ marginRight: insideMargin }}>
                      <IoIosArrowForward size="30" />
                    </div>
                  )}
                </button>

                {showSubtopics && (
                  <Subtopics
                    branchNum={branchNum}
                    topicNum={topicNum}
                    subtopics={currTopic.subtopic}
                    insideMargin={insideMargin}
                  />
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default TopicTree;

// console.log("TopicTree.js branch =", branch);
// console.log("TopicTree.js branchNum=", branchNum);
// console.log("TopicTree.js branchName =", branch[branchNum].branchName);
// console.log("TopicTree.js topics =", topics);
// console.log("TopicTree.js topics[0].topicName =", topics[0].topicName);
// console.log("TopicTree.js topics[0].subtopic[0].subtopicName =", topics[0].subtopic[0].subtopicName);
// console.log("TopicTree.js topics[0].subtopic[0].hoverText =", topics[0].subtopic[0].hoverText);
// console.log("TopicTree.js topics[0].subtopic[0].contentID =", topics[0].subtopic[0].contentID);
