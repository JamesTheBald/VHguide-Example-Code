import React from "react";
import { navigate } from "gatsby";

// import "../../styles/hoverText.css";
import { useMyContext } from "../../context/Context";

const Subtopics = props => {
  const { branchNum, topicNum, subtopics, insideMargin } = props;
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

  // const insideMargin = 2*insideMargin;
  const subtopicStepHt = winWidth < 510 ? 6 : 12;

  if (subtopics?.[0]) {
    return (
      <>
        <div
          className="border-b-1.5 border-solid border-gray-line"
          style={{
            marginLeft: insideMargin * 2,
            marginRight: insideMargin,
            height: subtopicStepHt - 3,
            marginBottom: subtopicStepHt,
          }}
        />

        {subtopics.map((currSubtopic, subtopicNum) => {
          return (
            <div key={subtopicNum}>
              <button
                key={subtopicNum}
                className="mt-1.5  baseFontWide  cursor-pointer text-blue-dark hover:text-blue-main"
                style={{ marginLeft: insideMargin*2 }}
                onClick={() => onClickSubtopic(subtopicNum)}
              >
                {winWidth < 900 ? currSubtopic.subtopicNameShort : currSubtopic.subtopicName}
              </button>

              <div
                className="border-b-1.5 border-solid border-gray-line"
                style={{
                  marginLeft: insideMargin*2,
                  marginRight: insideMargin,
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
