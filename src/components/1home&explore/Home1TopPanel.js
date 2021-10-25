import React from "react";
import { StaticImage } from "gatsby-plugin-image"; // Odd blackout during loading. Is this just during development?

import { useMyContext } from "../../context/Context";
import LandingText from "../../content/LandingText";
import ScrollDownIndicator from "./ScrollDownIndicator";
import wavyLineParams from "../../functions/wavyLineParams";

const Home1TopPanel = props => {
  const { BrowseButton } = props;
  const { widthAdjRatio, winHeight, marginOuter, log } = useMyContext();

  // Use locally-calculated wid instead of winWidth, so page loads properly 1st time
  const wid = typeof window !== `undefined` ? window.innerWidth : 1200;
  log && console.log("Home1TopPanel.js runs. winWidth=wid=", wid, " and winHeight=", winHeight);

  let topGap = wid < 1366 ? winHeight * 0.01 : wid < 1650 ? winHeight * 0.15 : winHeight * 0.15;
  const widFraction =
    wid < 510
      ? 0.85
      : wid < 720
      ? 0.82
      : wid < 1024
      ? 0.78
      : wid < 1200
      ? 0.72
      : wid < 1366
      ? 0.65
      : wid < 1600
      ? 0.43
      : 0.36;
  let titleWidth = wid * widFraction;
  const contentWidth = wid - 2 * marginOuter;

  if (titleWidth > contentWidth) {
    titleWidth = contentWidth;
  }

  log && console.log("Home1TopPanel.js widthAdjRatio=", widthAdjRatio);
  log && console.log("Home1TopPanel.js contentWidth=", contentWidth, "and titleWidth=", titleWidth);

  const imageWidth = wid < 1366 ? 275 + 120 * widthAdjRatio : contentWidth - titleWidth - 20;
  const imageScale = 100;
  // const imageScale = wid < 1366 ? 100 : 95;
  log && console.log("Home1TopPanel.js imageWidth=", imageWidth, " & imageScale=", imageScale);

  const buttonTopGap = wid < 510 ? 25 : 40;
  const buttonWidth = wid < 510 ? 220 : 322;
  const buttonHeight = wid < 510 ? 36 : 50;

  const wavyLinePanelHt = wid < 1366 ? winHeight - 80 + widthAdjRatio * 40 : winHeight + 20 - 60 / widthAdjRatio;
  const [xTrans, yTrans, xScale, yScale] = wavyLineParams(widthAdjRatio, wid);
  log && console.log("Home1TopPanel.js xTrans=", xTrans, ", yTrans=", yTrans);
  log && console.log("Home1TopPanel.js xScale=", xScale, ", yScale=", yScale);

  return (
    <div className="w-screen bg-gradient-to-b from-blue-black to-blue-main  text-gray-light relative">
      <div className="lg:hidden" style={{ height: topGap }} />

      <div className="absolute w-full overflow-hidden" style={{ height: wavyLinePanelHt, zIndex: 20 }}>
        <StaticImage
          style={{ transform: `translate(${xTrans}px, ${yTrans}px) scale(${xScale}, ${yScale}) ` }}
          src="../../images/homepage/Line for Home Page.svg"
          alt="wavy line"
        />
      </div>

      <div
        className="w-screen  flex flex-col lg:flex-row z-20 relative"
        style={{ paddingLeft: marginOuter, paddingRight: marginOuter, zIndex: 20 }}
      >
        <div className="order-last lg:order-first">
          <div style={{ height: wid < 1366 ? 15 : topGap }} />

          <LandingText titleWidth={titleWidth} />

          <div style={{ marginTop: buttonTopGap }}>
            <BrowseButton
              colors="text-blue-main hover:text-gray-light  bg-gray-light hover:bg-opacity-0"
              style={{ width: buttonWidth, height: buttonHeight }}
            />
          </div>
          <div className="h-12" />
        </div>

        <div
          className="mt-8 lg:mt-20 lg:ml-8 mr-4 w-full flex flex-col justify-center  max-w-90 lg:max-w-250 "
          // style={{ maxWidth: 1000 }}
        >
          {wid < 1366 ? (
            <StaticImage
              src="../../images/homepage/Home Page Icon Reversed.svg"
              alt="Vaccine hesitancy guide graphic"
              loading="eager"
              layout="constrained"
              width={375}
              quality={100}
            />
          ) : (
            <StaticImage
              src="../../images/homepage/Home Page Icons FULL.png"
              alt="Vaccine hesitancy guide graphic"
              loading="eager"
              layout="constrained"
              width={1100}
              quality={100}
            />
          )}
        </div>
      </div>

      <ScrollDownIndicator additionalClass={"hidden mxs:flex relative z-20"} />

      <div className="h-4" />
    </div>
  );
};

export default Home1TopPanel;
