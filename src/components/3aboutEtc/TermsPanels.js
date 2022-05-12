import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useMyContext } from "../../context/Context";
import termsContent from "../../content/termsContentBI";
import DivLine from "../4general/DivLine";

const TermsPanels = props => {
  const { pageTitle } = props;
  const { fixedBackdrop, winWidth, lang, log, log2 } = useMyContext();
  false && console.log(log, log2);

  const w = winWidth;
  const numPanels = termsContent.length + 1;
  const [openPanelNums, setOpenPanelNums] = useState(Array(numPanels).fill(false));

  const columnNum = w < 1200 ? 1 : w < 2100 ? 2 : 3;
  const arrowSize = w < 510 ? 20 : w < 720 ? 25 : 35;

  const TriggerComponent = (currPanel, panelNum) => {
    return (
      <div name="always-visible part / toggle controls" className="flex flex-col">
        <button
          className="w-full flex justify-between panelTitleClass"
          onClick={() => {
            setOpenPanelNums(() => {
              let tempPanelNums = Array(numPanels).fill(false);
              tempPanelNums[panelNum] = !openPanelNums[panelNum];
              return tempPanelNums;
            });
          }}
        >
          <div className="text-left">{currPanel.subheading[lang]}</div>
          {openPanelNums[panelNum] ? <IoIosArrowDown size={arrowSize} /> : <IoIosArrowForward size={arrowSize} />}
        </button>
        <DivLine className="mt-2 mb-4 mxs:mb-5 md:mb-6" />
      </div>
    );
  };

  // Main content container
  return (
    <div className={`${fixedBackdrop ? "fixed" : ""} w-full`}>
      <div className="mb-20  stdMargins  flex flex-col">
        <h1 className="aboutEtcTopGap  titleFont titleMediumPlus z-30">{pageTitle[lang]}</h1>

        <div className="mt-8 sm:mt-10  panelBaseClass  relative z-10">
          {termsContent.map((currPanel, panelNum) => {
            log && console.log("TermsPanels.js panelNum#", panelNum, "is", currPanel);
            return (
              <div key={panelNum} className="mb-6">
                <Collapsible
                  trigger={TriggerComponent(currPanel, panelNum)}
                  transitionTime={300}
                  open={openPanelNums[panelNum]}
                >
                  <div name="hidden when collapsed" className="panelTextClass" style={{ transition: "display 1s" }}>
                    <div style={{ columnCount: columnNum, columnGap: w < 1600 ? 50 : 60 }}>{currPanel.body[lang]}</div>
                    <DivLine className="mt-5 md:mt-6 xl:mt-7  mb-14 sm:mb-16 lg:mb-18" />
                  </div>
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TermsPanels;
