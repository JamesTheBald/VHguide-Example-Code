import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import termsContent from "../../content/termsContent";
import DivLine from "../4general/DivLine";

const TermsPanels = props => {
  const { pageTitle } = props;
  const { fixedBackdrop, winWidth, log, log2 } = useMyContext();
  false && console.log(log, log2);

  const [openPanelNum, setOpenPanelNum] = useState(-1);

  const columnNum = winWidth < 1200 ? 1 : winWidth < 2100 ? 2 : 3;
  const arrowSize = winWidth < 510 ? 20 : winWidth < 720 ? 25 : 35;

  const CollapsibleTerm = props => {
    const { currPanel, panelNum } = props;
    // const [isExpanded, setExpanded] = useState(true);

    const TriggerComponent = (currPanel, panelNum) => {
      return (
        <div name="always-visible part / toggle controls" className="flex flex-col">
          <button
            className="w-full flex justify-between panelTitleClass"
            onClick={() => {
              // setExpanded(x => !x)
              setOpenPanelNum(currPanelNum => {
                const newPanelNum = currPanelNum === panelNum ? -1 : panelNum;
                return newPanelNum;
              });
            }}
          >
            <div className="text-left">{currPanel.subheading}</div>
            {panelNum === openPanelNum ? <IoIosArrowDown size={arrowSize} /> : <IoIosArrowForward size={arrowSize} />}
          </button>
          <DivLine className="mt-2 mb-4 mxs:mb-5 md:mb-6" />
        </div>
      );
    };

    return (
      <>
        <Collapsible
          trigger={TriggerComponent(currPanel, panelNum)}
          triggerClassName="CustomTriggerCSS--closed"
          triggerOpenedClassName="CustomTriggerCSS--open"
          transitionTime={0}
          open={panelNum === openPanelNum}
        >
          <div name="hidden when collapsed" className="panelTextClass"
          style={{transition: "display 1s"}}
          >
            <div style={{ columnCount: columnNum, columnGap: winWidth < 1600 ? 50 : 60 }}>{currPanel.body}</div>
            <DivLine className="mt-5 md:mt-6 xl:mt-7  mb-14 sm:mb-16 lg:mb-18" />
          </div>
        </Collapsible>
      </>
    );
  };

  return (
    <div className={`${fixedBackdrop ? "fixed" : ""} w-full`}>
      <div className="mb-20  stdMargins  flex flex-col">
        <h1 className="aboutEtcTopGap  titleFont titleMediumPlus z-30">{pageTitle}</h1>

        <div className="mt-8 sm:mt-10  panelBaseClass  relative z-10">
          {termsContent.map((currPanel, panelNum) => {
            log && console.log("TermsPanels.js panelNum#", panelNum, "is", currPanel);
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
export default TermsPanels;
