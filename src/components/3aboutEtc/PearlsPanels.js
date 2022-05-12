import React from "react";

import { pearlsContentBI } from "../../content/pearlsContentBI";
import { useMyContext } from "../../context/Context";
import QuoteGroups from "../2details/QuoteGroups";

const PearlsPanels = () => {
  const { fixedBackdrop, winWidth, lang, log, log2 } = useMyContext();

  false && log && log2 && console.log();
  log2 && console.log("PearlsPanel.js pearlsContent=", pearlsContentBI);

  const yGapBetweenPanels = 65;
  let columnStyle = { columnCount: 1, columnGap: winWidth < 1600 ? 50 : 60 };

  return (
    <div className={fixedBackdrop ? "fixed" : ""}>
      <div className="panelMargins flex flex-col">
        <h1 className="aboutEtcTopGap  titleFont titleMediumPlus z-30">Clinical Pearls</h1>

        <div className="mt-4  text-blue-black text-16 sm:text-18">
          {lang === "EN" ? (
            <>Here you will find peer-to-peer advice on how to approach and conduct vaccine hesitancy conversations.</>
          ) : (
            <></>
          )}
        </div>

        <div className="mt-8 sm:mt-10  relative z-10">
          {pearlsContentBI.map((currPanel, panelNum) => {
            log2 && console.log("PearlsPanels.js panel#", panelNum, "is", currPanel);
            return (
              <div key={panelNum}>
                <div className="panelBaseClass" style={{ columnStyle }}>
                  <h2 className="mb-6 mxs:mb-9 sm:mb-12  titleFont titleMedium">{currPanel.title[lang]}</h2>
                  <QuoteGroups panelContent={currPanel.content} />
                </div>
                <div style={{ height: yGapBetweenPanels }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PearlsPanels;
