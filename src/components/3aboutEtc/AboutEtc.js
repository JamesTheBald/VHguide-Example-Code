import React from "react";
import { useMyContext } from "../../context/Context";

import ScrollLocator from "./ScrollLocator";
import AboutPanels from "./AboutPanels";
import PearlsPreface from "./PearlsPreface";

const AboutEtc = props => {
  const { path, pageTitle, contentArray } = props;
  const { showContactForm, navBarHeight, winWidth, log, log2 } = useMyContext();

  // const invariantWidth = 400; // 400px is an estimate!
  // const widthAdjRatioAbout =
  //   winWidth > 1365 ? (winWidth - invariantWidth) / (nomScreenWidth - invariantWidth) : winWidth / nomScreenWidth;

  log && console.log("AboutEtc.js path=", path);

  const outerMargin = winWidth < 510 ? 25 : winWidth < 1024 ? 50 : 100;
  const yDistTitleFromTop = winWidth < 510 ? 35 : winWidth < 1200 ? 60 : 72;
  const gapBelowTitle = winWidth < 720 ? 25 : 40;
  const heightOfTitle = 60 - 15; // height of single line spacing at 40pt font, less 15px of 'apparent' bottom padding (there to accommodate descending letters)
  const yPosnScrollLocator =
    winWidth <= 720 ? 12 : winWidth < 1920 ? 8 : navBarHeight + yDistTitleFromTop + heightOfTitle + gapBelowTitle;

  const yPosnPanel =
    winWidth <= 720 ? gapBelowTitle + 10 : winWidth < 1920 ? gapBelowTitle + 20 : heightOfTitle + gapBelowTitle;
  // Spacing of yDistTitleFromTop moved to top of first panel. (See AboutPanels.js)

  log2 && console.log("AboutEtc.js yDistTitleFromTop=", yDistTitleFromTop);

  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className={`xl:flex xl:flex-row relative}`}>
        {/* Narrower screens */}
        <div
          name="Title and Scroll Locator for Non-Wide Screens (<1920px)"
          className="xl:hidden  w-full"
          style={{ marginTop: yDistTitleFromTop, paddingLeft: outerMargin, paddingRight: outerMargin }}
        >
          <h1 className="titleFont titleMedium">{pageTitle}</h1>
          {path === "/pearls" && <PearlsPreface />}
        </div>

        <div
          className="xl:hidden  sticky  top-18  w-full bg-white  z-30"
          style={{
            paddingTop: gapBelowTitle,
            paddingLeft: outerMargin, // Need padding specified here so panels are covered properly when scrolling
            paddingRight: outerMargin,
          }}
        >
          <ScrollLocator path={path} contentArray={contentArray} />
        </div>

        {/* WIDE Screens (1920px and wider) */}
        <div
          name="Title and Scroll Locator for WIDE Screens (1920px and wider)"
          className="hidden xl:flex xl:flex-col flex-shrink-0"
          style={{ marginLeft: outerMargin }}
        >
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
        <div
          name="Panel bounding container"
          id={pageTitle}
          className="spacerFooter relative z-10"
          style={{
            marginLeft: outerMargin,
            marginRight: outerMargin,
          }}
        >
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
