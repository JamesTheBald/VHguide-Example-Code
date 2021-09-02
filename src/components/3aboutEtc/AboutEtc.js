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

  const yDistTitleFromTop = winWidth < 510 ? 130 : 150;
  const gapBelowTitle = 20;
  const outerMargin = winWidth < 510 ? 25 : winWidth < 1024 ? 50 : 100;
  const yDistPanelFromTop = winWidth >= 1920 ? yDistTitleFromTop + gapBelowTitle + 60 : winWidth >= 720 ? 20 : 15;

  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className={`xl:flex xl:flex-row relative}`}>
        {/* Title & Sticky Scroll Locator for narrower screens (<1920px) */}
        <div
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

        {/* Title & Scroll Locator for wide screens (1920px and wider) */}
        <div className="hidden xl:flex xl:flex-col flex-shrink-0" style={{ marginLeft: outerMargin }}>
          <div
            name="Invisible horizontal spacer, for positioning panel, because title and scroll locator are fixed"
            className="invisible font-semibold"
            style={{ paddingTop: yDistTitleFromTop, paddingBottom: 36 }}
          >
            <div className="titleFont titleMedium" style={{ marginBottom: gapBelowTitle }}>
              {pageTitle}
            </div>
            <ScrollLocator contentArray={contentArray} />
          </div>

          {/* Page Title */}
          <h1 className="fixed titleFont titleMedium z-30" style={{ top: yDistTitleFromTop }}>
            {pageTitle}
          </h1>

          <div className="fixed" style={{ top: yDistPanelFromTop }}>
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
