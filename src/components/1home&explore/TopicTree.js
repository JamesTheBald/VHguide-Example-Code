import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Subtopics from "./Subtopics";
import Context from "../Context";

const TopicTree = (props) => {
  const { branchNum } = props;
  const { winWidth, locn, setLocn, branch, widthAdjRatio, setNavBarOpen, setWinWidth, setWinHeight, log } =
    useContext(Context);

  const history = useHistory();
  const onClickTopic = (currTopic, topicNum) => {
    if (currTopic.linkToDetails === true) {
      setLocn((currLocn) => {
        const newLocn = { ...currLocn, branchNum: branchNum, topic: topicNum, subtopic: 0, showSubtopic: false };
        log && console.log("TopicTree.js onClickTopic() setting locn=", newLocn);
        return newLocn;
      });
      history.push("/details/overview");
    } else {
      setLocn((currLocn) => {
        const showTheseSubtopics = locn.topic !== topicNum || !locn.showSubtopic ? true : false;
        // Show subtopics upon change in selected topic, or toggle if current topic is clicked again
        const newLocn = { ...currLocn, topic: topicNum, showSubtopic: showTheseSubtopics };
        log &&
          console.log("TopicTree.js onClickTopic setting locn.topic=", topicNum, "& locn.showSubtopic=", showTheseSubtopics);
        return newLocn;
      });
    }
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
    setNavBarOpen(false);
  };

  // const winWidth = window.innerWidth;
  const treeBorderMargin = winWidth < 510 ? 15 : (37 * (widthAdjRatio + 1.5)) / 2.5;
  const borderRad = winWidth < 510 ? "0px 0px 30px 30px" : "0px 0px 47px 47px";
  const leftTreeMargin = (50 * (widthAdjRatio + 0.2)) / 1.2;
  const rightGap = (30 * (widthAdjRatio + 1)) / 2;
  const bottomPadding = winWidth < 510 ? 40 : 58;
  const topicStepHt = winWidth < 510 ? 30 : winWidth < 800 ? 36 : 45;
  const leftGapToLine = winWidth < 510 ? 10 * widthAdjRatio : (15 * (widthAdjRatio + 1)) / 2;

  // console.log("TopicTree.js runs. branch=", branch);

  if (branch?.[branchNum]?.topic?.[0]?.topicName) {
    const topics = branch[branchNum].topic;

    return (
      <>
        <div
          name="rounded outer border"
          className="mb-6  flex flex-col  font-sans font-normal border-3 border-t-0 border-blue-main"
          style={{
            marginLeft: treeBorderMargin,
            marginRight: treeBorderMargin,
            paddingBottom: bottomPadding,
            borderRadius: borderRad,
          }}
        >
          {topics.map((currTopic, topicNum) => {
            const showSubtopics = locn.topic === topicNum && locn.showSubtopic ? true : false;

            return (
              <div key={topicNum}>
                <div
                  name="TopicName line"
                  className={`flex items-center cursor-pointer text-blue-dark hover:text-blue-main tracking-0.5 hoverSelector`}
                  style={{
                    marginLeft: leftTreeMargin,
                    marginTop: topicStepHt,
                  }}
                  onClick={() => onClickTopic(currTopic, topicNum)}
                >
                  <div className={`flex-shrink-0 text-16 sm:text-22  tracking-0.5 sm:tracking-0.6`}>
                    {winWidth < 900 ? currTopic.topicNameShort : currTopic.topicName}
                  </div>

                  <div
                    name="hover line"
                    className="hiddenTillHover flex-grow border-blue-main border-b-3"
                    style={{ marginLeft: leftGapToLine }}
                  />

                  {showSubtopics ? (
                    <div className="flex-shrink-0" style={{ marginRight: rightGap }}>
                      <IoIosArrowDown size="30" />
                    </div>
                  ) : (
                    <div className="hiddenTillHover flex-shrink-0" style={{ marginRight: rightGap }}>
                      <IoIosArrowForward size="30" />
                    </div>
                  )}
                </div>

                {showSubtopics && (
                  <Subtopics
                    branchNum={branchNum}
                    topicNum={topicNum}
                    subtopics={currTopic.subtopic}
                    leftTreeMargin={leftTreeMargin}
                    rightGap={rightGap}
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
