import React from "react";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { useMyContext } from "../../context/Context";
import ScrollLocator from "./ScrollLocator";
import AboutPanels from "./AboutPanels";
import PearlsPreface from "./PearlsPreface";

const AboutEtc = props => {
  // contentArray has to be passed in as props, as this component is shared between /about, /pearls and /terms
  const { path, pageTitle, contentArray } = props;
  const { showContactForm, navBarHeight, winWidth, log, log2 } = useMyContext();

  log && console.log("AboutEtc.js path=", path);
  log2 && console.log("AboutEtc.js contentArray=", contentArray);

  const paddingBelowTitle = winWidth < 720 ? 25 : 32;
  const heightOfTitle = 60 - 15; // height of single line spacing at 40pt font, less 15px of 'apparent' bottom padding (there to accommodate descending letters)
  const yDistTitleFromTop = winWidth < 510 ? 35 : winWidth < 1200 ? 60 : 72;
  log2 && console.log("AboutEtc.js yDistTitleFromTop=", yDistTitleFromTop);

  const yPosnScrollLocator =
    winWidth <= 720 ? 12 : winWidth < 1920 ? 8 : navBarHeight + yDistTitleFromTop + heightOfTitle + paddingBelowTitle;
  const yPosnPanel =
    winWidth <= 720
      ? paddingBelowTitle + 10
      : winWidth < 1920
      ? paddingBelowTitle + 20
      : heightOfTitle + paddingBelowTitle;

  // Report scroll position: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
  // let params = [[], null, false, 500];
  // useScrollPosition(({ prevPos, currPos }) => {
  //   console.log("AboutEtc.js scroll y Position", currPos.y);
  // }, params);

  // useLayoutEffect(() => {
  // }, [winWidth, scrollTarget, scrollOffset, log]);

  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className={`xl:flex xl:flex-row relative}`}>
        {/* Title and Scroll Locator for Narrower Screens (<1920px) */}
        <div className="xl:hidden stdMargins w-full" style={{ marginTop: yDistTitleFromTop }}>
          <h1 className="titleFont titleMedium">{pageTitle}</h1>
          {path.match(/pearls/i) && <PearlsPreface />}
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

          {path.match(/pearls/i) && (
            <div className="fixed ml-6" style={{ top: yPosnPanel + 250 }}>
              <PearlsPreface />
            </div>
          )}
        </div>

        {/* Panel */}
        <div className="stdMargins spacerFooter relative z-10">
        {/* <div id="AboutPanelsContainer" className="stdMargins spacerFooter relative z-10"> */}
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
