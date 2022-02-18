import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import { useMyContext } from "../../context/Context";
import LandingText from "../../content/LandingText";
import ScrollDownIndicator from "./ScrollDownIndicator";

const Home1TopPanel = props => {
  const { BrowseButton } = props;
  const { winWidth, winHeight, marginOuter, log, log2 } = useMyContext();

  log && console.log("Home1TopPanel.js runs. Incoming winWidth=", winWidth, " & winHeight=", winHeight);
  false && console.log(log2);

  const titleWidthFrac =
    winWidth < 510
      ? 0.85
      : winWidth < 720
      ? 0.82
      : winWidth < 1024
      ? 0.78
      : winWidth < 1200
      ? 0.72
      : winWidth < 1366
      ? 0.65
      : 0.43;
  let titleWidth = winWidth * titleWidthFrac;
  const newContentWidth = winWidth - 2 * marginOuter;
  if (titleWidth > newContentWidth) titleWidth = newContentWidth;
  log2 && console.log("Home1TopPanel.js useEffect titleWidth=", titleWidth);

  // Wavy line parameters
  const w = winWidth;
  const [xTrans, setxTrans] = useState(
    w < 510 ? 0 : w < 720 ? 0 : w < 1024 ? 0 : w < 1366 ? -80 : w < 1640 ? 0 : w < 1920 ? 0 : w < 2300 ? 0 : 0
  );
  const [yTrans, setyTrans] = useState(
    w < 510 ? 80 : w < 720 ? 80 : w < 1024 ? 100 : w < 1366 ? -40 : w < 1640 ? 50 : w < 1920 ? 40 : 0
  );
  const [xScale, setxScale] = useState(
    w < 720 ? 1.5 : w < 1024 ? 1.1 : w < 1366 ? 1.35 : w < 1640 ? 1.2 : w < 1920 ? 1.1 : w < 2300 ? 1 : 1
  );
  const [yScale, setyScale] = useState(
    w < 510 ? 2.2 : w < 720 ? 2 : w < 1024 ? 1.3 : w < 1366 ? 1.25 : w < 1640 ? 1.1 : w < 1920 ? 0.9 : 0.9
  );
  false && setxTrans() && setyTrans() && setxScale() && setyScale();

  log2 && console.log("Home1TopPanel.js xTrans=", xTrans, ", yTrans=", yTrans);
  log2 && console.log("Home1TopPanel.js xScale=", xScale, ", yScale=", yScale);

  return (
    <div
      className="w-screen bg-gradient-to-b from-blue-black to-blue-main  text-gray-light relative"
      // The following line can cause a large blue blank region on the lower part of the screen!!! 
      // style={{ height: winHeight - 80 }}
    >
      <div className="absolute w-full  h-200 md:h-210 lg:h-190 mxl:h-190 xl:h-210  overflow-hidden  z-20">
        <StaticImage
          className="lg:hidden"
          style={{ transform: `translate(${xTrans}px, ${yTrans}px) scale(${xScale}, ${yScale}) ` }}
          src="../../assets/homepage/Line for Home Page - reversed.svg"
          alt="wavy line"
        />
        <StaticImage
          className="hidden lg:block"
          style={{ transform: `translate(${xTrans}px, ${yTrans}px) scale(${xScale}, ${yScale}) ` }}
          src="../../assets/homepage/Line for Home Page.svg"
          alt="wavy line"
        />
      </div>

      <div className="w-screen stdMargins flex flex-col lg:flex-row z-20 relative" style={{ zIndex: 20 }}>
        <div className="order-last lg:order-first">
          <div className="hidden lg:block" style={{ height: winHeight * 0.14 }} />
          {/* <div className="h-3 lg:h-44" /> */}

          <LandingText titleWidth={titleWidth} />

          <BrowseButton className="mt-6 mxs:mt-10  w-max px-7  h-9 mxs:h-12  text-blue-main hover:text-gray-light" />
          <div className="h-12" />
        </div>

        <div
          className="mt-5  lg:ml-8 mxl:ml-12 xl:ml-16  mr-4  w-72 sm:w-80 md:w-85 lg:w-150 xl:w-200
                        flex flex-col justify-center"
        >
          <StaticImage
            className="hidden lg:block"
            src="../../assets/homepage/Home Illustration - Main Way.svg"
            alt="Vaccine hesitancy guide graphic"
            placeholder="blurred"
            loading="eager"
            layout="constrained"
            width={1000}
            quality={90}
          />
          <StaticImage
            className="lg:hidden"
            src="../../assets/homepage/Home Illustration - Reverse Way.svg"
            alt="Vaccine hesitancy guide graphic"
            placeholder="blurred"
            loading="eager"
            layout="constrained"
            width={360}
            quality={90}
          />
        </div>
      </div>

      <div className="h-2 mxs:h-14 md:h-6" />

      <div className="hidden mxs:block  absolute left-1/2 z-20 bottom-0">
        <ScrollDownIndicator additionalClass={"transform -translate-x-1/2"} />
      </div>
    </div>
  );
};

export default Home1TopPanel;
