import React from "react";

import { useMyContext } from "../../context/Context";
import QuoteGroups from "../2details/QuoteGroups";
import Credits from "./Credits";

const AboutPanels = props => {
  const { path, contentArray } = props;
  const { winWidth, log, log2 } = useMyContext();

  log && log2 && console.log();
  log2 && console.log("");
  log2 && console.log("AboutPanels.js runs. path=", path);
  log2 && console.log("AboutPanel.js contentArray=", contentArray);

  const yGapBetweenPanels = 65;
  const panelBaseClass = "p-5 mxs:p-9 sm:p-15 w-full bg-gray-light rounded-3xl shadowGray";
  let columnStyle = { columnCount: 1, columnGap: winWidth < 1600 ? 50 : 60 };

  return (
    <>
      {contentArray.map((currPanel, index) => {
        return (
          <div key={`#${currPanel.panelID}`}>
            <div className={panelBaseClass} style={{ columnStyle }}>
              {path.match(/pearls/i) && ( // Regex matching for 'pearls'
                <>
                  <h2 className="font-serif font-bold text-22 mxs:text-32 sm:text-40 tracking-0.4 mxs:tracking-0.6 sm:tracking-0.8">
                    {currPanel.title}
                  </h2>
                  <QuoteGroups quoteGroups={currPanel.content} />
                </>
              )}
              {!path.match(/pearls/i) && <div className="panelTextClass">{currPanel.content}</div>}
            </div>
            <div style={{ height: yGapBetweenPanels }} />
          </div>
        );
      })}

      {path.match(/about/i) && <Credits panelBaseClass={panelBaseClass} />}
    </>
  );
};

export default AboutPanels;
