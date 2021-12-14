import React from "react";
import useCollapse from "react-collapsed";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import DivLine from "../DivLine";
import QuoteBoxes from "./QuoteBoxes";

const QuoteGroups = props => {
  const { panelContent } = props;
  const { winWidth, setFullStoryID, log, log2 } = useMyContext();

  // const path = typeof window !== "undefined" ? window.location.pathname : "";
  // const onDetailsPage = false;
  // const onDetailsPage = path.match(/details/i) && !path.match(/pediatrics/i) ? true : false;

  const columnNum = winWidth < 950 ? 1 : winWidth < 1600 ? 2 : 3;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;
  const columnStyle = { columnCount: columnNum, columnGap: winWidth < 1600 ? 50 : 60 };

  false && console.log(log, log2);
  log2 && console.log("QuoteGroupsPediatrics.js panelContent=", panelContent);

  const CollapsibleQuotes = props => {
    const { currGroup } = props;

    // const [isExpanded, setExpanded] = React.useState(true);
    const [isExpanded, setExpanded] = React.useState(false);
    const { getToggleProps, getCollapseProps } = useCollapse({ isExpanded });

    return (
      <div className="flex flex-col">
        {currGroup.subheading && (
          <>
            <button
              className="w-full flex justify-between"
              {...getToggleProps({ onClick: () => setExpanded(x => !x) })}
            >
              <div className="text-left subHeadingFont">{currGroup.subheading}</div>
              {isExpanded ? <IoIosArrowDown size={arrowSize} /> : <IoIosArrowForward size={arrowSize} />}
            </button>
            <DivLine className="mb-8 mxs:mb-10 sm:mb-12" />
          </>
        )}

        <div {...getCollapseProps()}>
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
      </div>
    );
  };

  return panelContent.map((currGroup, groupNum) => {
    return (
      <div key={groupNum}>
        {/* CollapsibleQuotes has to be its own component so hooks can be called within it */}
        <CollapsibleQuotes currGroup={currGroup} />
      </div>
    );
  });
};

export default QuoteGroups;
