import React from "react";
import { useMyContext } from "../../context/Context";
import LandingText from "../../content/LandingText";
import ScrollDownIndicator from "./ScrollDownIndicator";
import wavyLineParams from "../../functions/wavyLineParams";

const Home1TopPanel = (props) => {
  const { outerGap, BrowseButton } = props;
  const { widthAdjRatio, winWidth, winHeight, log, log2 } = useMyContext();

  log && console.log("HomeTopPanel.js runs. winHeight=", winHeight);

  let topGap = winWidth < 1366 ? winHeight * 0.01 : winWidth < 1650 ? winHeight * 0.15 : winHeight * 0.2;

  const wid = winWidth;
  const widFrac =
    wid < 720 ? 0.85 : wid < 1024 ? 0.78 : wid < 1200 ? 0.72 : wid < 1366 ? 0.65 : wid < 1600 ? 0.445 : 0.4;
  let titleWidth = winWidth * widFrac;
  const contentWidth = winWidth - 2 * outerGap;
  if (titleWidth > contentWidth) {
    console.log("trimming titleWidth from", titleWidth, "to", contentWidth);
    titleWidth = contentWidth;
  }

  const imageWidth = winWidth < 1366 ? 275 + 120 * widthAdjRatio : winWidth - titleWidth;
  const imageScale = winWidth < 1366 ? 100 : 95;
  const imageSource =
    winWidth < 1366 ? "../images/homePage/Home Page Icon Reversed.svg" : "../images/homePage/Home Page Icon.svg";

  const buttonTopGap = winWidth < 510 ? 25 : 40;

  const wavyLinePanelHt = winWidth < 1366 ? winHeight - 80 + widthAdjRatio * 40 : winHeight + 20 - 60 / widthAdjRatio;
  const [xTrans, yTrans, xScale, yScale] = wavyLineParams(widthAdjRatio, winWidth);
  log2 && console.log("Home1TopPanel.js xTrans=", xTrans, ", yTrans=", yTrans);
  log2 && console.log("Home1TopPanel.js xScale=", xScale, ", yScale=", yScale);

  return (
    <div className="w-screen bg-gradient-to-b from-blue-black to-blue-main  text-gray-light relative">
      <div name="spacer for navbar" className="h-20 bg-blue-black" />
      <div className="lg:hidden" style={{ height: topGap }} />

      <div className="absolute w-full overflow-hidden" style={{ height: wavyLinePanelHt, zIndex: 20 }}>
        <img
          className=""
          style={{ transform: `translate(${xTrans}px, ${yTrans}px) scale(${xScale}, ${yScale}) ` }}
          src="../images/homePage/Line for Home Page.svg"
          alt="wavy line"
        />
      </div>

      <div
        className="w-screen  flex flex-col lg:flex-row z-20 relative"
        style={{ paddingLeft: outerGap, paddingRight: outerGap, zIndex: 20 }}
      >
        <div className="order-last lg:order-first">
          <div style={{ height: winWidth < 1366 ? 15 : topGap }} />

          <LandingText titleWidth={titleWidth} />

          <div style={{ marginTop: buttonTopGap }}>
            <BrowseButton colors="text-blue-main hover:text-gray-light  bg-gray-light hover:bg-opacity-0" />
          </div>
          <div className="h-12" />
        </div>

        <div className="mt-10 flex flex-col justify-center items-center" style={{ width: imageWidth }}>
          <img className="" style={{ width: imageScale + "%" }} src={imageSource} alt="Vaccine hesitancy guide graphic" />
        </div>
      </div>

      <ScrollDownIndicator additionalClass={"hidden mxs:flex relative z-20"} />

      <div className="h-14" />
    </div>
  );
};

export default Home1TopPanel;
