import React from "react";
import { navigate } from "gatsby";

import { useMyContext } from "../../context/Context";

const Subtopics = props => {
  const { branchNum, topicNum, subtopics, innerMarginLeft, innerMarginRight } = props;
  const { winWidth, setLocn, log } = useMyContext();

  log && console.log("Subtopics.js runs. subtopics =", subtopics);

  const onClickSubtopic = subtopicNum => {
    setLocn(currLocn => {
      const newLocn = { ...currLocn, branchNum: branchNum, topic: topicNum, subtopic: subtopicNum };
      log && console.log("Subtopics.js onClickSubtopic setting locn=", branchNum, topicNum, subtopicNum);
      return newLocn;
    });
    navigate("/details/overview");
  };

  const subtopicStepHt = winWidth < 510 ? 6 : 12;

  const baseFontWide = "font-sans  text-15 mxs:text-18  tracking-0.3 mxs:tracking-0.4 sm:tracking-0.5";

  if (subtopics?.[0]) {
    return (
      <>
        <div
          className="border-b-1.5 border-solid border-gray-line"
          style={{
            marginLeft: innerMarginLeft * 2,
            marginRight: innerMarginRight,
            height: subtopicStepHt - 3,
            marginBottom: subtopicStepHt,
          }}
        />

        {subtopics.map((currSubtopic, subtopicNum) => {
          return (
            <div key={subtopicNum}>
              <button
                key={subtopicNum}
                className={`mt-1.5  ${baseFontWide}  cursor-pointer text-blue-dark hover:text-blue-main`}
                style={{ marginLeft: innerMarginLeft * 2 }}
                onClick={() => onClickSubtopic(subtopicNum)}
              >
                {winWidth < 900 ? currSubtopic.subtopicNameShort : currSubtopic.subtopicName}
              </button>

              <div
                className="border-b-1.5 border-solid border-gray-line"
                style={{
                  marginLeft: innerMarginLeft * 2,
                  marginRight: innerMarginRight,
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
