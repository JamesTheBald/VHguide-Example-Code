import React from "react";

import { useMyContext } from "../../context/Context";
import ScrollDownIndicator from "./ScrollDownIndicator";

const LandingText = props => {
  const { titleWidth, content, className } = props;
  const { log, log2 } = useMyContext();

  false && console.log(log);
  log2 && console.log("LandingText.js titleWidth=", titleWidth);

  return (
    <>
      <div className={`flex flex-col text-gray-light ${className}`}>
        <h1 className="mxs:mb-10  titleFont titleLanding  whitespace-normal" style={{ width: titleWidth }}>
          {content.mainTitle}
        </h1>

{/* Add 'Read More' button to expand, hide subTitleParaBot */}
        <div className="subtitleFont" style={{ width: titleWidth }}>
          {content.subTitlePara}
        </div>
      </div>
    </>
  );
};

export default LandingText;
