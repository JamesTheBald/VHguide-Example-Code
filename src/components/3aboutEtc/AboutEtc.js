import React from "react";
import { useMyContext } from "../../context/Context";

import ScrollLocator from "./ScrollLocator";
import AboutPanels from "./AboutPanels";
import PearlsPreface from "./PearlsPreface";

const AboutEtc = props => {
  const { path, pageTitle, contentArray } = props;
  const { showContactForm, navBarHeight, winWidth, log, log2 } = useMyContext();

  log && console.log("AboutEtc.js path=", path);
  log && console.log("AboutEtc.js contentArray=", contentArray);

  const yDistTitleFromTop = winWidth < 510 ? 35 : winWidth < 1200 ? 60 : 72;
  const paddingBelowTitle = winWidth < 720 ? 25 : 32;
  const heightOfTitle = 60 - 15; // height of single line spacing at 40pt font, less 15px of 'apparent' bottom padding (there to accommodate descending letters)

  const yPosnScrollLocator =
    winWidth <= 720 ? 12 : winWidth < 1920 ? 8 : navBarHeight + yDistTitleFromTop + heightOfTitle + paddingBelowTitle;
  const yPosnPanel =
    winWidth <= 720 ? paddingBelowTitle + 10 : winWidth < 1920 ? paddingBelowTitle + 20 : heightOfTitle + paddingBelowTitle;

  log2 && console.log("AboutEtc.js yDistTitleFromTop=", yDistTitleFromTop);

  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className={`xl:flex xl:flex-row relative}`}>
        {/* Title and Scroll Locator for Narrower Screens (<1920px) */}
        <div className="xl:hidden stdMargins w-full" style={{ marginTop: yDistTitleFromTop }}>
          <h1 className="titleFont titleMedium">{pageTitle}</h1>
          {path === "/pearls" && <PearlsPreface />}
        </div>

        <div
          className="xl:hidden stdMargins  sticky top-18 w-full bg-white  z-30"
          style={{ paddingTop: paddingBelowTitle }}
        >
          <ScrollLocator path={path} contentArray={contentArray} />
        </div>

        {/* Title and Scroll Locator for WIDE Screens (1920px and wider) */}
        <div className="hidden stdMargins pr-0  xl:flex xl:flex-col flex-shrink-0">
          <h1 className="fixed titleFont titleMedium z-30" style={{ marginTop: yDistTitleFromTop }}>
            {pageTitle}
          </h1>
          <div className="fixed" style={{ top: yPosnScrollLocator }}>
            <ScrollLocator path={path} contentArray={contentArray} />
          </div>

          <div
            name="Invisible horizontal spacer cos title and scrolllocator are fixed"
            className="invisible font-semibold"
          >
            <div className="titleFont titleMedium">{pageTitle}</div>
            <ScrollLocator path={path} contentArray={contentArray} />
          </div>

          {path === "/pearls" && (
            <div className="fixed ml-6" style={{ top: yPosnPanel + 250 }}>
              <PearlsPreface />
            </div>
          )}
        </div>

        {/* Panel */}
        <div id={pageTitle} className="stdMargins spacerFooter relative z-10">
          <AboutPanels
            path={path}
            contentArray={contentArray}
            yPosnPanel={yPosnPanel}
            yDistTitleFromTop={yDistTitleFromTop}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutEtc;
