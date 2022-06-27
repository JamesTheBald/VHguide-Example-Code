import React, { useState } from "react";
import Collapsible from "react-collapsible";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import DivLine from "../4general/DivLine";
import QuoteBoxes from "./QuoteBoxes";

const QuoteGroupsPediatricsBI = props => {
  const { panelContent } = props;
  const { winWidth, setFullStoryID, pedQuoteGroupInitOpen, lang, log, log2 } = useMyContext();

  const w = winWidth;
  const columnNum = w < 950 ? 1 : w < 1600 ? 2 : 3;
  const arrowSize = w < 510 ? 20 : w < 720 ? 25 : 35;
  const columnStyle = { columnCount: columnNum, columnGap: w < 1600 ? 50 : 60, breakInside: "avoid" };

  0 && console.log(log, log2);
  log2 && console.log("QuoteGroupsPediatricsBI.js panelContent=", panelContent);
  log2 && console.log("QuoteGroupsPediatricsBI.js pedQuoteGroupInitOpen.current=", pedQuoteGroupInitOpen.current);

  const numPanels = panelContent.length + 1;
  const [openGroupNums, setOpenGroupNums] = useState(pedQuoteGroupInitOpen.current);

  const TriggerComponent = (currGroup, groupNum) => {
    if (!currGroup.subheading[lang]) return <></>;
    return (
      <>
        <button
          className="w-full flex justify-between  triggerClassName"
          onClick={() => {
            setOpenGroupNums(currOpenGroupNums => {
              let newOpenGroupNums = Array(numPanels).fill(false);
              newOpenGroupNums[groupNum] = !currOpenGroupNums[groupNum];
              log2 && console.log("QuoteGroupsPediatricsBI.js onClick newOpenGroupNums=", newOpenGroupNums);
              return newOpenGroupNums;
            });
          }}
        >
          <div className="text-left subHeadingFont">{currGroup.subheading[lang]}</div>
          <div className="pl-3">
            {openGroupNums[groupNum] ? <IoIosArrowDown size={arrowSize} /> : <IoIosArrowForward size={arrowSize} />}
          </div>
        </button>
        <DivLine className="mt-2 mb-8 mxs:mb-10 sm:mb-12" />
      </>
    );
  };

  return panelContent.map((currGroup, groupNum) => {
    log2 && console.log("QuoteGroupsPediatricsBI.js panelContent.map -> currGroup=", currGroup);
    return (
      <Collapsible
        key={groupNum}
        trigger={TriggerComponent(currGroup, groupNum)}
        triggerClassName="CustomTriggerCSS--closed"
        triggerOpenedClassName="CustomTriggerCSS--open"
        open={openGroupNums[groupNum]}
        transitionTime={w < 510 ? 200 : 300}
      >
        <div className="flex flex-col">
          <div className="subSubHeadingFont mb-6 md:mb-8">
            {lang === "EN" ? "What Clinicians are Hearing" : "Ce que les cliniciens entendent"}
          </div>
          <div className="mb-2 mxs:mb-3 sm:mb-12" style={columnStyle}>
            <QuoteBoxes quoteArray={currGroup.cliniciansHearing} setFullStoryID={setFullStoryID} />
          </div>
          {/* Add French translations in above and below */}
          <div className="subSubHeadingFont mt-2 mb-6 md:mb-8">
            {lang === "EN" ? "What Clinicians are Saying" : "Ce que disent les cliniciens"}
          </div>
          <div className="mb-2 mxs:mb-3 sm:mb-12" style={columnStyle}>
            <QuoteBoxes quoteArray={currGroup.cliniciansSaying} setFullStoryID={setFullStoryID} />
          </div>

          <DivLine className="mt-2 mb-8 mxs:mb-10 sm:mb-12" />
        </div>
      </Collapsible>
    );
  });
};

export default QuoteGroupsPediatricsBI;
