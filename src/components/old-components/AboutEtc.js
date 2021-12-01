import React from "react";
// import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { useMyContext } from "../../context/Context";
// import AboutPanels from "./AboutPanels";

const AboutEtc = props => {
  const { path, pageTitle, contentArray } = props;
  const { showContactForm, winWidth, log, log2 } = useMyContext();

  log && console.log("AboutEtc.js path=", path);
  log2 && console.log("AboutEtc.js contentArray=", contentArray);


  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className="stdMargins flex flex-col">
        <h1 className="titleFont titleBig z-30 mt-9 mxs:mt-16 lg:mt-18">
          {pageTitle}
        </h1>

        <div className="mt-8 sm:mt-10  spacerFooter relative z-10">
          {/* <AboutPanels
            path={path}
            contentArray={contentArray}
            // yPosnPanel={yPosnPanel}
            // yDistTitleFromTop={yDistTitleFromTop}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutEtc;
