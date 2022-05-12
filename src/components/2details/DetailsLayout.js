import React from "react";
import { navigate } from "gatsby";
import { animateScroll as scroll } from "react-scroll";

import { useMyContext } from "../../context/Context";
import Layout from "../0nav&footer/NavFooterLayout";
import TabBarOAR from "../../components/2details/TabBarOAR";
// import { getBranchNum, getTopicNum, getSubtopicNum, getSubtopicName } from "../../functions/getRelatedDetails";

const DetailsLayout = props => {
  const { hesTypeName, related } = props;
  const { locn, branch, setLocn, fixedBackdrop, lang, log, log2 } = useMyContext();
  false && console.log(log, log2);

  // The following four functions were in a separate file (getRelatedDetails.js) but this didn't work once branch became a state var (for French version), to be passed in from Context. branch was either undefined in the separate file, or null if passed in as a param.
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
    return subtopicName;
  };

  const onClickRelated = contentID => {
    const branchNum = getBranchNum(contentID);
    const topNum = getTopicNum(contentID, branchNum);
    const subtopNum = getSubtopicNum(contentID, branchNum, topNum);
    log && console.log("DetailsLayout.js onClickRelated() runs. contentID=", contentID);
    log && console.log("DetailsLayout.js .. branchNum=", branchNum, "topicNum=", topNum, "subtopicNum=", subtopNum);
    setLocn(currLocn => {
      const newLocn = {
        ...currLocn,
        branch: branchNum,
        topic: topNum,
        subtopic: subtopNum,
      };
      log && console.log("DetailsLayout.js onClickRelated() Setting locn object.");
      return newLocn;
    });
    navigate("/details/overview");
  };

  if (typeof window !== `undefined`) {
    scroll.scrollToTop({ duration: 0 }); // scroll animation time in ms
  }

  const yPosnPanel = 24;
  const tabHeight = 50;
  const relatedPill = "px-3 pt-1 mr-5 mb-3  vsmFont italic orangeLink  linkPill";

  const panelPadding = "p-5 axs:p-7 mxs:p-8 sm:p-12 md:p-14  pb-6 sm:pb-8 md:pb-10";

  return (
    <div className={fixedBackdrop ? "fixed" : ""}>
      <div className="text-blue-main panelMargins">
        {locn.branch < 4 ? (
          <>
            <button className="mt-6 mxs:mt-11 sm:mt-11 orangeLink" onClick={() => navigate(-1)}>
              &#60; back
            </button>
            <div className="mt-5 mb-2  text-16 mxs:text-18 tracking-0.4 text-blue-pale">Hesitancy Type:</div>
          </>
        ) : (
          <div className="h-16" />
        )}

        <h1 className="mt-0.5 mb-1  titleFont titleMediumPlus">{hesTypeName}</h1>

        <div name="OAR Tab and Panel container" style={{ marginTop: yPosnPanel }}>
          <div className="relative z-10">
            <TabBarOAR />
          </div>

          <div // Main Details Panel
            className={`${panelPadding} bg-gray-light border border-solid border-gray-lightish rounded-3xl shadowGray  relative z-30`}
            style={{ top: tabHeight - 65 }}
          >
            {props.children} {/* Panel Content */}
          </div>

          {/* Items below main panel */}
          {locn.branch === 3 ? (
            <div className="mt-2 md:mt-4  mb-8  sm:text-right  italic smThenBaseFont text-blue-pale">
              {lang === "EN" ? <>*The pediatric hesitancy type is evolving and will receive regular updates.</> : <></>}
            </div>
          ) : related[0] ? (
            <>
              <div className="mb-10 mxs:mb-16  flex flex-wrap items-baseline">
                <h4 className="mt-6 mb-2.5  text-14 tracking-0.3 font-semibold">Related hesitancy types:</h4>
                <div className="ml-6  flex flex-wrap">
                  {related.map((contID, index) => {
                    return (
                      <button key={index} className={relatedPill} onClick={() => onClickRelated(contID)}>
                        {getSubtopicName(contID, branch)}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <div className="w-full h-6" />
          )}
        </div>
      </div>
    </div>
  );
};

DetailsLayout.Layout = Layout;

export default DetailsLayout;
