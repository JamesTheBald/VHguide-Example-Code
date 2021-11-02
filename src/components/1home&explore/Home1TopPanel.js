import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"; // Odd blackout during loading. Is this just during development?

import { useMyContext } from "../../context/Context";
import LandingText from "../../content/LandingText";
import ScrollDownIndicator from "./ScrollDownIndicator";
import wavyLineParams from "../../functions/wavyLineParams";

const Home1TopPanel = props => {
  const { BrowseButton } = props;
  const { winWidth, winHeight, widthAdjRatio, marginOuter, log, log2 } = useMyContext();

  log && console.log("Home1TopPanel.js runs. Incoming winWidth=", winWidth, " & winHeight=", winHeight);

  const w = winWidth;
  const ht = winHeight;
  const [titleWidth, setTitleWidth] = useState(864);
  const [contentWidth, setContentWidth] = useState(1000);

  useEffect(() => {
    const newContentWidth = w - 2 * marginOuter;
    const titleWidthFrac =
      w < 510 ? 0.85 : w < 720 ? 0.82 : w < 1024 ? 0.78 : w < 1200 ? 0.72 : w < 1366 ? 0.65 : w < 1600 ? 0.43 : 0.4;
    let newTitleWidth = w * titleWidthFrac;
    if (newTitleWidth > newContentWidth) newTitleWidth = newContentWidth;
    setTitleWidth(newTitleWidth);
    setContentWidth(newContentWidth);

    const msg = "contentWidth=" + newContentWidth + " & titleWidth=" + newTitleWidth;
    log && console.log("Home1TopPanel.js useEffect " + msg);
  }, [w, ht, marginOuter, log]);

  const imageWidth = winWidth < 1366 ? 275 + 120 * widthAdjRatio : contentWidth - titleWidth - 20;
  const imageScale = 100;
  // const imageScale = winWidth < 1366 ? 100 : 95;
  log2 && console.log("Home1TopPanel.js imageWidth=", imageWidth, " & imageScale=", imageScale);

  const wavyLinePanelHt = winWidth < 1366 ? winHeight - 80 + widthAdjRatio * 40 : winHeight + 20 - 60 / widthAdjRatio;

  let xTrans = 0;
  let yTrans = 80;
  let xScale = 1.2;
  let yScale = 1.4;
  [xTrans, yTrans, xScale, yScale] = wavyLineParams(widthAdjRatio, winWidth);
  log2 && console.log("Home1TopPanel.js xTrans=", xTrans, ", yTrans=", yTrans);
  log2 && console.log("Home1TopPanel.js xScale=", xScale, ", yScale=", yScale);

  return (
    <div className="w-screen bg-gradient-to-b from-blue-black to-blue-main  text-gray-light relative">
      <div className="lg:hidden h-3" />

      <div className="absolute w-full overflow-hidden" style={{ height: wavyLinePanelHt, zIndex: 20 }}>
        <StaticImage
          className="lg:hidden"
          style={{ transform: `translate(${xTrans}px, ${yTrans}px) scale(${xScale}, ${yScale}) ` }}
          src="../../images/homepage/Line for Home Page - reversed.svg"
          alt="wavy line"
        />
        <StaticImage
          className="hidden lg:block"
          style={{ transform: `translate(${xTrans}px, ${yTrans}px) scale(${xScale}, ${yScale}) ` }}
          src="../../images/homepage/Line for Home Page.svg"
          alt="wavy line"
        />
      </div>

      <div className="w-screen stdMargins flex flex-col lg:flex-row z-20 relative" style={{ zIndex: 20 }}>
        <div className="order-last lg:order-first">
          <div className="h-4 lg:h-50 xl:h-75" />

          <LandingText titleWidth={titleWidth} />

          <div className="mt-6 mxs:mt-10">
            <BrowseButton classExt="w-56 mxs:w-80  h-9 mxs:h-12  text-blue-main hover:text-gray-light" />
          </div>
          <div className="h-12" />
        </div>

        <div className="mt-8 lg:mt-20 lg:ml-8 mr-4 w-full flex flex-col justify-center  max-w-90 lg:max-w-250 ">
          {/* {winWidth < 1366 ? ( */}
          <StaticImage
            src="../../images/homepage/Home Page Icon_Reversed.png"
            alt="Vaccine hesitancy guide graphic"
            className="lg:hidden"
            placeholder="blurred"
            loading="eager"
            layout="constrained"
            width={360}
            quality={90}
          />
          {/* ) : ( */}
          <StaticImage
            src="../../images/homepage/Home Page Icon_Main Way.png"
            alt="Vaccine hesitancy guide graphic"
            className="hidden lg:block"
            placeholder="blurred"
            loading="eager"
            layout="constrained"
            width={1000}
            quality={80}
          />
          {/* )} */}
        </div>
      </div>

      <ScrollDownIndicator additionalClass={"hidden mxs:flex relative z-20"} />

      <div className="h-4" />
    </div>
  );
};

export default Home1TopPanel;
