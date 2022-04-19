import React, { useState } from "react";
import useCollapse from "react-collapsed";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import termsContent from "../../content/termsContent";
import DivLine from "../4general/DivLine";

const TermsPanelsReactCollapsed = props => {
  const { pageTitle } = props;
  const { fixedBackdrop, winWidth, log, log2 } = useMyContext();
  false && console.log(log, log2);

  const [openPanelNum, setOpenPanelNum] = useState(-1);

  const columnNum = winWidth < 1200 ? 1 : winWidth < 2100 ? 2 : 3;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;

  const CollapsibleTerm = props => {
    const { currPanel, panelNum } = props;

    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const [isExpanded, setExpanded] = useState(false);

    return (
      <>
        <div className="flex flex-col">
          <button
            className="w-full flex justify-between panelTitleClass"
            {...getToggleProps({
              onClick: () => {
                setExpanded(prevExpanded => {
                  const newShowPanel = !prevExpanded && panelNum === openPanelNum;

                  console.log("onClick() panelNum=", panelNum, ": prevExpanded=", prevExpanded);
                  console.log("  old openPanNum=", openPanelNum, "so newShowPanel = ", newShowPanel);

                  setOpenPanelNum(panelNum === openPanelNum ? -1 : panelNum);
                  log && console.log("  new openPanelNum=", openPanelNum);

                  return newShowPanel;
                });
              },
            })}
          >
            <div className="text-left">{currPanel.subheading}</div>
            {panelNum === openPanelNum ? <IoIosArrowDown size={arrowSize} /> : <IoIosArrowForward size={arrowSize} />}
          </button>
          <DivLine className="mt-2 mb-4 mxs:mb-5 md:mb-6" />
        </div>

        <div className="panelTextClass" {...getCollapseProps()}>
          <div style={{ columnCount: columnNum, columnGap: winWidth < 1600 ? 50 : 60 }}>{currPanel.body}</div>
          <DivLine className="mt-5 md:mt-6 xl:mt-7  mb-14 sm:mb-16 lg:mb-18" />
        </div>
      </>
    );
  };

  return (
    <div className={`${fixedBackdrop ? "fixed" : ""} w-full`}>
      <div className="mb-20  stdMargins  flex flex-col">
        <h1 className="aboutEtcTopGap  titleFont titleMediumPlus z-30">{pageTitle}</h1>

        <div className="mt-8 sm:mt-10  panelBaseClass  relative z-10">
          {termsContent.map((currPanel, panelNum) => {
            log2 && console.log("TermsPanelsReactCollapsed.js panelNum#", panelNum, "is", currPanel);
            return (
              <div key={panelNum} className="mb-6">
                <CollapsibleTerm currPanel={currPanel} panelNum={panelNum} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TermsPanelsReactCollapsed;
