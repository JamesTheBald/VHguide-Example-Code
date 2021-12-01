import React from "react";
import { navigate } from "gatsby";
import { animateScroll as scroll } from "react-scroll";

import { useMyContext } from "../../context/Context";
import Layout from "../0nav&footer/NavFooterLayout";
import TabBarOAR from "../../components/2details/TabBarOAR";
import { getBranchNum, getTopicNum, getSubtopicNum, getSubtopicName } from "../../functions/getRelatedDetails";

const DetailsLayout = props => {
  const { hesitTypeName, related } = props;
  const { locn, setLocn, showContactForm, log, log2 } = useMyContext();

  log && console.log("");
  log2 && console.log("DetailsLayout.js locn=", locn);

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

  const panelPadding = "p-7 mxs:p-8 sm:p-12 md:p-14  pb-6 sm:pb-8 md:pb-10";

  return (
    <div className={`spacerFooter ${showContactForm ? "fixed" : ""} `}>
      <div className="text-blue-main stdMargins">
        <button className="mt-6 mxs:mt-11 sm:mt-11 orangeLink" onClick={() => navigate(-1)}>
          &#60; back
        </button>

        <div className="mt-5 text-16 mxs:text-18 tracking-0.4 text-blue-pale">Hesitancy Type:</div>
        <h1 className="mt-0.5  titleFont titleMediumPlus">{hesitTypeName}</h1>

        <div name="OAR Tab and Panel container" style={{ marginTop: yPosnPanel }}>
          <div className="relative z-10">
            <TabBarOAR />
          </div>

          <div // Panel
            className={`${panelPadding} bg-gray-light border border-solid border-gray-lightish rounded-3xl shadowGray  relative z-30`}
            style={{ top: tabHeight - 100 }}
          >
            {props.children}
          </div>

          {related[0] ? (
            <>
              <div className="mb-10 mxs:mb-16  flex flex-wrap items-baseline">
                <h4 className="mb-2.5 text-14 tracking-0.3 font-semibold">Related hesitancy types:</h4>
                <div className="ml-6  flex flex-wrap">
                  {related.map((contID, index) => {
                    return (
                      <button key={index} className={relatedPill} onClick={() => onClickRelated(contID)}>
                        {getSubtopicName(contID)}
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
