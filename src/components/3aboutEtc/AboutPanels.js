import React, { useEffect } from "react";
import { useMyContext } from "../../context/Context";
import { Element, scroller } from "react-scroll";

import QuoteGroup from "../2details/QuoteGroup";
import Credits from "./Credits";

const AboutPanels = props => {
  const { path, contentArray, yPosnPanel, yDistTitleFromTop } = props;
  const { winWidth, scrollTarget, log2 } = useMyContext();

  log2 && console.log("");
  // log && console.log("AboutPanel.js runs. contentArray=", contentArray);
  log2 && console.log("AboutPanels.js runs. path=", path);

  useEffect(() => {
    if (scrollTarget.current) {
      log2 && console.log("AboutPanels.js scrollTarget.current=", scrollTarget.current);
      if (typeof window !== `undefined`) {
        scroller.scrollTo(String(scrollTarget.current), {
          duration: 1000,
          smooth: true,
          offset: winWidth < 1024 ? -300 : winWidth < 1920 ? -300 : -175,
        });
      }
    }
  }, [scrollTarget, winWidth, log2]);

  useEffect(() => {
    log2 && console.log('AboutPanels.js useEffect#2 setting scrollTarget.current=""');
    scrollTarget.current = "";
  }, [scrollTarget, log2]);

  const yGapBetweenPanels = 65;
  const panelBaseClass = "p-5 mxs:p-9 sm:p-15 w-full bg-gray-light rounded-3xl shadowGray";
  // const panelTextClass = "text-16 sm:text-18 text-blue-black tracking-0.3 sm:tracking-0.4";

  let columnStyle = { columnCount: 1, columnGap: winWidth < 1600 ? 50 : 60 };

  return (
    <>
      {contentArray.map((currPanel, index) => {
        return (
          <div key={`#${currPanel.title}`}>
            <Element name={currPanel.title}>
              {/* Extend top of first panel for better scroll positioning  */}
              {index === 0 && <div className="w-full" style={{ height: yPosnPanel - 24 }} />}
              {index === 0 && winWidth > 1920 && <div className="w-full" style={{ height: yDistTitleFromTop }} />}
              <div className={panelBaseClass} style={{ columnStyle }}>
                {path === "/pearls" && (
                  <>
                    <h2 className="font-serif font-bold text-22 mxs:text-32 sm:text-40 tracking-0.4 mxs:tracking-0.6 sm:tracking-0.8">
                      {currPanel.title}
                    </h2>
                    <QuoteGroup contentArray={currPanel.content} />
                  </>
                )}
                {(path === "/about" || path === "/terms") && <div className="panelTextClass">{currPanel.content}</div>}
              </div>
              <div style={{ height: yGapBetweenPanels }} />
            </Element>
          </div>
        );
      })}

      {path === "/about" && (
        <div>
          <Element name="Credits">
            <div className={panelBaseClass}>
              <Credits />
            </div>
          </Element>
          <div style={{ height: 100 }} />
        </div>
      )}

      <div style={{ height: 600 }} />
    </>
  );
};

export default AboutPanels;
