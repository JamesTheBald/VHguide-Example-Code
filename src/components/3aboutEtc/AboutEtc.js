import React from "react";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { useMyContext } from "../../context/Context";
import AboutPanels from "./AboutPanels";

const AboutEtc = props => {
  // contentArray has to be passed in as props, as this component is shared between /about, /pearls and /terms
  const { path, pageTitle, contentArray } = props;
  const { showContactForm, winWidth, log, log2 } = useMyContext();

  log && console.log("AboutEtc.js path=", path);
  log2 && console.log("AboutEtc.js contentArray=", contentArray);

  const paddingBelowTitle = winWidth < 720 ? 25 : 32;
  const heightOfTitle = 60 - 15; // height of single line spacing at 40pt font, less 15px of 'apparent' bottom padding (there to accommodate descending letters)
  const yDistTitleFromTop = winWidth < 510 ? 35 : winWidth < 1200 ? 60 : 72;
  log2 && console.log("AboutEtc.js yDistTitleFromTop=", yDistTitleFromTop);

  const yPosnPanel =
    winWidth <= 720
      ? paddingBelowTitle + 10
      : winWidth < 1920
      ? paddingBelowTitle + 20
      : heightOfTitle + paddingBelowTitle;

  // Display scroll position: https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
  // let params = [[], null, false, 500];
  // useScrollPosition(({ prevPos, currPos }) => {
  //   console.log("AboutEtc.js scroll y Position", currPos.y);
  // }, params);

  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className="stdMargins flex flex-col">
        <h1 className="titleFont titleMedium z-30" style={{ marginTop: yDistTitleFromTop }}>
          {pageTitle}
        </h1>

        {path.match(/pearls/i) && (
          <div className="mb-10 sm:mb-12  mt-4  text-blue-black text-16 sm:text-18">
            Here you will find peer-to-peer advice on how to approach and conduct vaccine hesitancy conversations.
          </div>
        )}

        <div className="spacerFooter relative z-10">
          <AboutPanels
            path={path}
            contentArray={contentArray}
            // yPosnPanel={yPosnPanel}
            // yDistTitleFromTop={yDistTitleFromTop}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutEtc;
