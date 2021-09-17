import React from "react";
import { useMyContext } from "../../context/Context";

import ScrollLocator from "./ScrollLocator";
import AboutPanels from "./AboutPanels";
import PearlsPreface from "./PearlsPreface";

const AboutEtc = props => {
  const { pageTitle, contentArray } = props;
  const { showContactForm, nomScreenWidth, winWidth, log2 } = useMyContext();

  const invariantWidth = 400; // 400px is an estimate!
  const widthAdjRatioAbout =
    winWidth > 1365 ? (winWidth - invariantWidth) / (nomScreenWidth - invariantWidth) : winWidth / nomScreenWidth;

  log2 && console.log("AboutEtc.js widthAdjRatioAbout=", widthAdjRatioAbout);

  const yDistTitleFromTop = winWidth < 510 ? 35 : winWidth < 1200 ? 60 : 72;
  const gapBelowTitle = winWidth < 510 ? 25 : 40;
  const outerMargin = winWidth < 510 ? 25 : winWidth < 1024 ? 50 : 100;
  const yDistPanelFromTop = winWidth >= 1920 ? yDistTitleFromTop + gapBelowTitle + 60 : winWidth <= 720 ? 12 : 20;

  log2 && console.log("AboutEtc.js yDistTitleFromTop=", yDistTitleFromTop);


  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className={`xl:flex xl:flex-row relative}`}>
        <div
          name="Title and Scroll Locator for Non-Wide Screens (<1920px)"
          className="xl:hidden  w-full"
          style={{
            paddingLeft: outerMargin,
            paddingRight: outerMargin,
            paddingTop: yDistTitleFromTop,
          }}
        >
          <div className="titleFont titleMedium">{pageTitle}</div>
          {typeof window !== "undefined" && window.location.pathname === "/pearls" && <PearlsPreface />}
        </div>

        <div
          className="xl:hidden  sticky top-18  w-full bg-white  z-30"
          style={{
            paddingLeft: outerMargin,
            paddingTop: gapBelowTitle,
            paddingBottom: 36,
          }}
        >
          <ScrollLocator contentArray={contentArray} />
        </div>

        <div
          name="Title and Scroll Locator for WIDE Screens (1920px and wider)"
          className="hidden xl:flex xl:flex-col flex-shrink-0"
          style={{ marginLeft: outerMargin }}
        >
          <div
            name="INVISIBLE horizontal spacer, for positioning panel, because title and scroll locator are fixed"
            className="invisible font-semibold"
            style={{ paddingTop: yDistTitleFromTop, paddingBottom: 36 }}
          >
            <div className="titleFont titleMedium" style={{ marginBottom: gapBelowTitle }}>
              {pageTitle}
            </div>
            <ScrollLocator contentArray={contentArray} />
          </div>

          {/* Page Title */}
          <h1 className="fixed titleFont titleMedium z-30" style={{ marginTop: yDistTitleFromTop }}>
            {pageTitle}
          </h1>

          <div className="fixed" style={{ top: yDistTitleFromTop + yDistPanelFromTop }}>
            <ScrollLocator contentArray={contentArray} />
          </div>

          <div className="fixed ml-6" style={{ top: yDistPanelFromTop + 120 }}>
            {typeof window !== "undefined" && window.location.pathname === "/pearls" && <PearlsPreface />}
          </div>
        </div>

        <div name="Panel bounding container" className="spacerFooter relative z-10" id={pageTitle}>
          <div
            style={{
              marginTop: yDistPanelFromTop,
              marginLeft: outerMargin,
              marginRight: outerMargin,
            }}
          >
            <AboutPanels contentArray={contentArray} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutEtc;
