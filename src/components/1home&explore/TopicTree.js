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
  log2 && console.log("TopicTree.js runs. branch=", branch);
  log2 && console.log("TopicTree.js widthAdjRatio=", widthAdjRatio);
  const w = winWidth;

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

  const innerMarginLeft = 8 + 14 * (widthAdjRatio - 0.3125);
  const innerMarginRight = w < 410 ? 6 : w < 510 ? 8 : innerMarginLeft - 8;
  const outsideMargin = w < 510 ? 0 : w < 720 ? 8 : innerMarginLeft + 2;
  // const outsideMargin = w < 510 ? 10 : 32;
  const borderRadius = w < 510 ? "0px 0px 9px 9px" : w < 720 ? "0px 0px 12px 12px" : "0px 0px 47px 47px";
  const bottomPadding = w < 510 ? 40 : 58;
  const topicStepHt = w < 510 ? 30 : w < 800 ? 36 : 45;
  const leftGapToLine = w < 510 ? 13 * widthAdjRatio : (14 * (widthAdjRatio + 2)) / 3;

  log2 && console.log("TopicTree.js innerMarginLeft=", innerMarginLeft);
  log2 && console.log("TopicTree.js innerMarginRight=", innerMarginRight);

  if (branch?.[branchNum]?.topic?.[0]?.topicName) {
    const topics = branch[branchNum].topic;

    return (
      <>
        <div
          name="Rounded Outer Border"
          className="mb-3  flex flex-col  border-2 mxs:border-3 border-solid border-t-0 border-blue-main relative -top-1"
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
                  className={`w-full flex justify-between items-center  text-blue-dark hover:text-blue-main tracking-0.5
                              hoverRevealTrigger cursor-pointer`}
                  style={{
                    color: "#263EC5",
                    paddingLeft: innerMarginLeft,
                    paddingTop: topicStepHt,
                  }}
                  onClick={() => onClickTopic(currTopic, topicNum)}
                  onKeyPress={() => onClickTopic(currTopic, topicNum)}
                >
                  <h3 className={`flex-shrink-0 text-16 mxs:text-20  tracking-0.4 sm:tracking-0.5`}>
                    {w < 900 ? currTopic.topicNameShort : currTopic.topicName}
                  </h3>

                  <div
                    name="hover line"
                    className="hiddenTillHover hidden mxs:inline w-full  border-blue-main border-solid border-b-2 mxs:border-b-3"
                    style={{ marginLeft: leftGapToLine }}
                  />

                  {showSubtopics ? (
                    <div className="flex-shrink-0" style={{ marginRight: innerMarginRight }}>
                      <IoIosArrowDown className="hidden mxs:inline" size="28" />
                      <IoIosArrowDown className="mxs:hidden" size="20" />
                    </div>
                  ) : (
                    <>
                      <div className="mxs:hidden flex-shrink-0 absolute" style={{ right: innerMarginRight - 4 }}>
                        <IoIosArrowForward className="hidden mxs:inline" size="28" />
                        <IoIosArrowForward className="mxs:hidden" size="20" />
                      </div>

                      <div
                        className="hiddenTillHover hidden mxs:inline flex-shrink-0"
                        style={{ marginRight: innerMarginRight }}
                      >
                        <IoIosArrowForward className="hidden mxs:inline" size="28" />
                        <IoIosArrowForward className="mxs:hidden" size="20" />
                      </div>
                    </>
                  )}
                </button>

                {showSubtopics && (
                  <Subtopics
                    branchNum={branchNum}
                    topicNum={topicNum}
                    subtopics={currTopic.subtopic}
                    innerMarginLeft={innerMarginLeft}
                    innerMarginRight={innerMarginRight}
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
