import React from "react";
import { navigate } from "gatsby";
import { animateScroll as scroll } from "react-scroll";

import { useMyContext } from "../../context/Context"; 
import Layout from "../0nav&footer/NavFooterLayout";
import TabBarOAR from "./TabBarOAR";
import { getContentIDandName } from "../../functions/getContentIDandName";
import { getRelatedContentIDs } from "../../functions/getRelatedContentIDs";
import { getBranchNum, getTopicNum, getSubtopicNum, getSubtopicName } from "../../functions/getRelatedDetails";

import DetailsResources from "./DetailsResources";
import AdviceEaase from "./AdviceEaase";
import AdviceTabNavBar from "./AdviceTabNavBar";
import AdviceQuoteGroupList from "./AdviceQuoteGroupList";
import AdviceFullStory from "./AdviceFullStory";
import AdviceWhatsWorking from "./AdviceWhatsWorking";

const DetailsLayout = ({ children }) => {
  const {
    widthAdjRatio,
    setLocn,
    setNavBarOpen,
    setFullStoryID,
    setWinWidth,
    setWinHeight,
    showContactForm,
    log,
  } = useMyContext();

  log && console.log("");

  const { contentID, hesitancyTypeName } = getContentIDandName();
  const { related } = getRelatedContentIDs(contentID);

  const onClickRelated = contID => {
    const branchNum = getBranchNum(contID);
    const topNum = getTopicNum(contID, branchNum);
    const subtopNum = getSubtopicNum(contID, branchNum, topNum);
    log && console.log("Details.js onClickRelated() runs. contID=", contID);
    log && console.log("Details.js .. branchNum=", branchNum, "topicNum=", topNum, "subtopicNum=", subtopNum);

    setLocn(currLocn => {
      const newLocn = {
        ...currLocn,
        branch: branchNum,
        topic: topNum,
        subtopic: subtopNum,
      };
      log && console.log("Details.js onClickRelated() Setting locn branch, topic, subtopic numbers.");
      return newLocn;
    });
    navigate("/details/overview");
    setNavBarOpen(false);
  };

  const onClickBackButton = () => {
    history.goBack();
    // instead of  history.goBack() can use navigate("/explore/")
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
  };

  scroll.scrollToTop({ duration: 0 }); // scroll animation time in ms

  const navbarHeight = 80;
  const yPosnPanel = 24;
  const marginLeft = 100 * widthAdjRatio;
  const panelWidth = window.innerWidth - 190 * widthAdjRatio - 10;
  const tabHeight = 50;
  const relatedPill = "px-3 pt-1 mr-5 mb-3  vsmFont italic orangeLink  linkPill";

  // const otherLegitAdviceTabPaths = [
  //   "/details/advice/engage",
  //   "/details/advice/affirm",
  //   "/details/advice/ask",
  //   "/details/advice/evoke",
  // ];

  const panelPadding = "p-8 sm:p-12 md:p-14  pb-6 sm:pb-8 md:pb-10";

  return (
    <div className={`spacerFooter ${showContactForm ? "fixed" : ""} `}>
      <div className="text-blue-main" style={{ marginLeft: marginLeft, marginTop: navbarHeight }}>
        <div className="mt-25 mxs:mt-28 sm:mt-30 orangeLink" onClick={() => onClickBackButton()}>
          &#60; back
        </div>

        <h1 className="mt-5 text-16 mxs:text-18 tracking-0.4 text-blue-pale">Hesitancy Type:</h1>
        <div className="titleFont titleMedium">{hesitancyTypeName}</div>

        <div name="OAR Tab and Panel container" style={{ marginTop: yPosnPanel }}>
          <div className="relative z-10">
            <TabBarOAR setFullStoryID={setFullStoryID} />
          </div>

          <div // Panel
            className={`${panelPadding} bg-gray-light border border-gray-lightish rounded-3xl shadowGray  relative z-30
                      overflow-x-hidden`}
            style={{ top: tabHeight - 100, width: panelWidth }}
          >
            {children}

            {/* <Switch>

              <Route exact path="/details/advice/fullstory">
                <AdviceFullStory fullStoryID={fullStoryID} />
              </Route>

              <Route exact path="/details/advice/eaase">
                <AdviceWhatsWorking />
                <AdviceEaase advice={advice} />
              </Route>

              
              <Route exact path={otherLegitAdviceTabPaths}>
                <AdviceWhatsWorking />
                <AdviceTabNavBar />
                <AdviceQuoteGroupList advice={advice} setFullStoryID={setFullStoryID} />
              </Route>
            </Switch> */}
          </div>

          {related[0] ? (
            <>
              <div className="mb-10 mxs:mb-16  flex flex-wrap items-baseline">
                <div className="mb-2.5 text-14 tracking-0.3 font-semibold">Related hesitancy types:</div>
                <div className="ml-6  flex flex-wrap">
                  {related.map((contID, index) => {
                    return (
                      <div key={index} className={relatedPill} onClick={() => onClickRelated(contID)}>
                        {getSubtopicName(contID)}
                      </div>
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

DetailsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

DetailsLayout.Layout = Layout;

export default DetailsLayout;
