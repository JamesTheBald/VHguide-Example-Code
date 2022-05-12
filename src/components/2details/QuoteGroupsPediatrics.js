import React, { useState } from "react";
import Collapsible from "react-collapsible";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import DivLine from "../4general/DivLine";
import QuoteBoxes from "./QuoteBoxes";

const QuoteGroupsPediatrics = props => {
  const { panelContent } = props;
  const { winWidth, setFullStoryID, pedQuoteGroupInitOpen, lang, log, log2 } = useMyContext();

  const columnNum = winWidth < 950 ? 1 : winWidth < 1600 ? 2 : 3;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;
  const columnStyle = { columnCount: columnNum, columnGap: winWidth < 1600 ? 50 : 60, breakInside: "avoid" };

  false && console.log(log, log2);
  log2 && console.log("QuoteGroupsPediatrics.js panelContent=", panelContent);
  log && console.log("QuoteGroupsPediatrics.js pedQuoteGroupInitOpen.current=", pedQuoteGroupInitOpen.current);

  const numPanels = panelContent.length + 1;
  const [openGroupNums, setOpenGroupNums] = useState(Array(numPanels).fill(false));

  const TriggerComponent = (currGroup, groupNum) => {
    if (!currGroup.subheading[lang]) return <></>;
    return (
      <>
        <button
          className="w-full flex justify-between  triggerClassName"
          onClick={() => {
            pedQuoteGroupInitOpen.current.fill(false);
            setOpenGroupNums(() => {
              let tempGroupNums = Array(numPanels).fill(false);
              tempGroupNums[groupNum] = !openGroupNums[groupNum];
              return tempGroupNums;
            });
          }}
        >
          <div className="text-left subHeadingFont">{currGroup.subheading[lang]}</div>
          {/* <IoIosArrowDown className="CustomTriggerCSS hideWhenClosed" size={arrowSize} />
          <IoIosArrowForward className="CustomTriggerCSS hideWhenOpen" size={arrowSize} /> */}
          {groupNum === openGroupNums ? <IoIosArrowDown size={arrowSize} /> : <IoIosArrowForward size={arrowSize} />}
        </button>
        <DivLine className="mt-2 mb-8 mxs:mb-10 sm:mb-12" />
      </>
    );
  };

  return panelContent.map((currGroup, groupNum) => {

    log && console.log("QuoteGroupsPediatrics.js panelContent.map -> currGroup=", currGroup);
    return (
      <Collapsible
        key={groupNum}
        trigger={TriggerComponent(currGroup, groupNum)}
        triggerClassName="CustomTriggerCSS--closed"
        triggerOpenedClassName="CustomTriggerCSS--open"
        open={pedQuoteGroupInitOpen.current[groupNum] || openGroupNums[groupNum]}
        transitionTime={400}
        // transitionTime={winWidth < 510 ? 200 : 400}
      >
        <div className="flex flex-col">
          <div className="subSubHeadingFont mb-6 md:mb-8">What Clinicians Are Hearing</div>
          <div className="mb-2 mxs:mb-3 sm:mb-12" style={columnStyle}>
            <QuoteBoxes quoteArray={currGroup.cliniciansHearing} setFullStoryID={setFullStoryID} />
          </div>

          <div className="subSubHeadingFont mt-2 mb-6 md:mb-8">What Clinicians Are Saying</div>
          <div className="mb-2 mxs:mb-3 sm:mb-12" style={columnStyle}>
            <QuoteBoxes quoteArray={currGroup.cliniciansSaying} setFullStoryID={setFullStoryID} />
          </div>

          <DivLine className="mt-2 mb-8 mxs:mb-10 sm:mb-12" />
        </div>
      </Collapsible>
    );
  });
};

export default QuoteGroupsPediatrics;
