import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import "../../styles/hoverText.css";

import Context from "../Context";

const Subtopics = (props) => {
  const { branchNum, topicNum, subtopics, leftTreeMargin, rightGap } = props;
  const { winWidth, setLocn, setNavBarOpen, log } = useContext(Context);

  log && console.log("Subtopics.js runs. subtopics =", subtopics);

  const history = useHistory();
  
  const onClickSubtopic = (subtopicNum) => {
    setLocn((currLocn) => {
      const newLocn = { ...currLocn, branchNum: branchNum, topic: topicNum, subtopic: subtopicNum };
      log && console.log("Subtopics.js onClickSubtopic setting locn=", branchNum, topicNum, subtopicNum);
      return newLocn;
    });
    setNavBarOpen(false);
    history.push("/details/overview");
  };

  // const winWidth = window.innerWidth;
  // const leftMarginSub = winWidth < 510 ? 50 : (80 * (widthAdjRatio + 3)) / 4; // all in pixels
  const leftMarginSub = 2*leftTreeMargin;
  const subtopicStepHt = winWidth < 510 ? 6 : 12;

  if (subtopics?.[0]) {
    return (
      <>
        <div
          className="border-b border-gray-mid"
          style={{
            marginLeft: leftTreeMargin,
            marginRight: rightGap,
            height: subtopicStepHt - 3,
            marginBottom: subtopicStepHt,
          }}
        />

        {subtopics.map((currSubtopic, subtopicNum) => {
          return (
            <div key={subtopicNum}>
              <div
                key={subtopicNum}
                className="baseFont tracking-0.4 sm:tracking-0.5  cursor-pointer text-blue-dark hover:text-blue-main"
                style={{ marginLeft: leftMarginSub }}
                onClick={() => onClickSubtopic(subtopicNum)}
              >
                {winWidth < 900 ? currSubtopic.subtopicNameShort : currSubtopic.subtopicName}
              </div>

              <div
                className="border-b border-gray-mid"
                style={{
                  marginLeft: leftMarginSub,
                  marginRight: rightGap,
                  height: subtopicStepHt,
                  marginBottom: subtopicStepHt,
                }}
              />
            </div>
          );
        })}
      </>
    );
  } else {
    return null;
  }
};

export default Subtopics;
