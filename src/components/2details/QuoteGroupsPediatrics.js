import React from "react";
import Collapsible from "react-collapsible";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import DivLine from "../DivLine";
import QuoteBoxes from "./QuoteBoxes";

const QuoteGroupsPediatrics = props => {
  const { panelContent } = props;
  const { winWidth, setFullStoryID, pedQuoteGroupInitOpen, log, log2 } = useMyContext();

  const columnNum = winWidth < 950 ? 1 : winWidth < 1600 ? 2 : 3;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;
  const columnStyle = { columnCount: columnNum, columnGap: winWidth < 1600 ? 50 : 60 };

  false && console.log(log, log2);
  log2 && console.log("QuoteGroupsPediatrics.js panelContent=", panelContent);
  log && console.log("QuoteGroupsPediatrics.js pedQuoteGroupInitOpen.current=", pedQuoteGroupInitOpen.current);

  const TriggerComponent = currGroup => {
    if (!currGroup.subheading) return <></>;
    return (
      <>
        <button
          className="w-full flex justify-between  triggerClassName"
          onClick={() => pedQuoteGroupInitOpen.current.fill(false)}
        >
          <div className="text-left subHeadingFont">{currGroup.subheading}</div>
          <IoIosArrowDown className="CustomTriggerCSS hideWhenClosed" size={arrowSize} />
          <IoIosArrowForward className="CustomTriggerCSS hideWhenOpen" size={arrowSize} />
        </button>
        <DivLine className="mb-8 mxs:mb-10 sm:mb-12" />
      </>
    );
  };

  return panelContent.map((currGroup, groupNum) => {
    return (
      <Collapsible
        key={groupNum}
        trigger={TriggerComponent(currGroup)}
        triggerClassName="CustomTriggerCSS--closed"
        triggerOpenedClassName="CustomTriggerCSS--open"
        open={pedQuoteGroupInitOpen.current[groupNum]}
      >
        <div className="flex flex-col">
          <div className="subSubHeadingFont mb-3 mxs:mb-5">What Clinicians Are Hearing</div>
          <div className="mb-2 mxs:mb-3 sm:mb-12" style={columnStyle}>
            <QuoteBoxes quoteArray={currGroup.cliniciansHearing} setFullStoryID={setFullStoryID} />
          </div>

          <div className="subSubHeadingFont mt-2 mb-3 mxs:mb-5">What Clinicians Are Saying</div>
          <div className="mb-2 mxs:mb-3 sm:mb-12" style={columnStyle}>
            <QuoteBoxes quoteArray={currGroup.cliniciansSaying} setFullStoryID={setFullStoryID} />
          </div>

          <DivLine className="mb-8 mxs:mb-10 sm:mb-12" />
        </div>
      </Collapsible>
    );
  });
};

export default QuoteGroupsPediatrics;