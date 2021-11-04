import React, { useEffect, useLayoutEffect } from "react";
import { Element, scroller } from "react-scroll";

import { useMyContext } from "../../context/Context";
import QuoteGroup from "../2details/QuoteGroup";
import Credits from "./Credits";

const AboutPanels = props => {
  const { path, contentArray, yPosnPanel, yDistTitleFromTop } = props;
  const { winWidth, scrollTarget, log, log2 } = useMyContext();

  // const scrollOffset = winWidth < 510 ? -180 : winWidth < 1024 ? -170 : winWidth < 1920 ? -150 : -150;
  // const scrollOffset = -150;
  const scrollOffset= winWidth < 1024 ? -280 : winWidth < 1920 ? -320 : -175;

  log2 && console.log("");
  log2 && console.log("AboutPanels.js runs. path=", path);
  log2 && console.log("AboutPanel.js contentArray=", contentArray);
  log && console.log("AboutPanel.js scrollTarget.current=", scrollTarget.current);
  log && console.log("AboutPanel.js scrollOffset=", scrollOffset);

  // Bug in react-scroll means scrollTo animation may not complete.
  useLayoutEffect(() => {
    if (scrollTarget.current) {
      log && console.log("AboutPanels.js useLayoutEffect. scrollTarget.current=", scrollTarget.current);
      log && console.log("AboutPanels.js and scrollOffset=", scrollOffset);

      scroller.scrollTo(scrollTarget.current, {
        containerID: "AboutPanelsContainer",
        duration: 1000,
        smooth: "linear",
        offset: scrollOffset,
        isDynamic: true,
        spy: true,
      });
    }
  }, [scrollTarget, scrollOffset, log]);

  useEffect(() => {
    log && console.log("AboutPanels.js useEffect: clearing scrollTarget.current");
    scrollTarget.current = "";
  }, [scrollTarget, log]);

  const yGapBetweenPanels = 65;
  const panelBaseClass = "p-5 mxs:p-9 sm:p-15 w-full bg-gray-light rounded-3xl shadowGray";
  let columnStyle = { columnCount: 1, columnGap: winWidth < 1600 ? 50 : 60 };

  return (
    <>
      {contentArray.map((currPanel, index) => {
        return (
          <div key={`#${currPanel.panelID}`}>
            <Element name={currPanel.panelID}>
              {/* Extend top of first panel for better scroll positioning  */}
              {index === 0 && <div className="w-full" style={{ height: yPosnPanel - 24 }} />}
              {index === 0 && winWidth > 1920 && <div className="w-full" style={{ height: yDistTitleFromTop }} />}
              <div className={panelBaseClass} style={{ columnStyle }}>
                {path.match(/pearls/i) && ( // Regex matching for 'pearls'
                  <>
                    <h2 className="font-serif font-bold text-22 mxs:text-32 sm:text-40 tracking-0.4 mxs:tracking-0.6 sm:tracking-0.8">
                      {currPanel.title}
                    </h2>
                    {log2 &&
                      console.log(
                        "AboutPanels.js just prior to QuoteGroup call. currPanel.content=",
                        currPanel.content
                      )}

                    <QuoteGroup quoteGroup={currPanel.content} />
                  </>
                )}
                {!path.match(/pearls/i) && <div className="panelTextClass">{currPanel.content}</div>}
              </div>
              <div style={{ height: yGapBetweenPanels }} />
            </Element>
          </div>
        );
      })}

      {path.match(/about/i) && (
        <div>
          <Element name="credits">
            <div className={panelBaseClass}>
              <Credits />
            </div>
          </Element>
          <div style={{ height: 100 }} />
        </div>
      )}

      {path.match(/terms/i) ? <div style={{ height: 700 }} /> : <div style={{ height: 300 }} />}
    </>
  );
};

export default AboutPanels;
