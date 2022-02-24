import React, { useState } from "react";
// import { StaticImage } from "gatsby-plugin-image";

import { useMyContext } from "../../context/Context";
import wavyLineTransforms from "../../functions/wavyLineTransforms";
import LandingText from "./LandingText";
import BrowseButton from "./BrowseButton";
import ScrollDownIndicator from "./ScrollDownIndicator";
import DisplayGatsbyDynImage from "../4general/DisplayGatsbyDynImage";

import landingContent from "../../content/landingContent";

const Home1TopPanel = () => {
  const { winWidth, winHeight, marginOuter, queryData, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  const [panelNum, setPanelNum] = useState(0);
  const content = landingContent[panelNum];
  const homepagePics = queryData.current.homepagePics.edges;
  log && console.log("Home1TopPanel.js Incoming winWidth=", winWidth, " & winHeight=", winHeight);
  log && console.log("Home1TopPanel.js homepagePics=", homepagePics);
  log && console.log("Home1TopPanel.js content=", content);
  log && console.log("Home1TopPanel.js content.backgndImageFileName=", content.backgndImageFileName);

  let titleWidthFrac = winWidth < 510 ? 0.85 : winWidth < 720 ? 0.82 : 0.78;
  if (winWidth > 1024) titleWidthFrac = winWidth < 1200 ? 0.72 : winWidth < 1366 ? 0.65 : 0.43;
  let titleWidth = winWidth * titleWidthFrac;

  const newContentWidth = winWidth - 2 * marginOuter;
  if (titleWidth > newContentWidth) titleWidth = newContentWidth;
  log2 && console.log("Home1TopPanel.js useEffect titleWidth=", titleWidth);

  const { xtrans, ytrans, xscale, yscale } = wavyLineTransforms(winWidth);
  const [xTrans, setxTrans] = useState(xtrans);
  const [yTrans, setyTrans] = useState(ytrans);
  const [xScale, setxScale] = useState(xscale);
  const [yScale, setyScale] = useState(yscale);
  false && setxTrans() && setyTrans() && setxScale() && setyScale();

  log && console.log("Home1TopPanel.js xtrans=", xtrans, ", ytrans=", ytrans);
  log && console.log("Home1TopPanel.js xscale=", xscale, ", yscale=", yscale);

  return (
    <div className="w-screen bg-gradient-to-b from-blue-black to-blue-main  text-gray-light relative rounded-b-5xl">
      <div className="absolute w-full  h-200 md:h-210 lg:h-190 mxl:h-190 xl:h-210  overflow-hidden  z-20">
        <DisplayGatsbyDynImage
          altText="Wavy Line background image"
          queryArray={homepagePics}
          fileName={content.backgndImageFileName}
          wrapperStyle={{
            transform: `translate(${xTrans}px, ${yTrans}px) scale(${winWidth < 1366 ? -xScale : xScale}, ${yScale})`,
          }}  // -xScale mirrors the image
          quality={80}
        />
      </div>

      <div className="w-full stdMargins  flex flex-col lg:flex-row  z-20 relative " style={{ zIndex: 20 }}>
        <LandingText className="mt-3 mxs:mt-5 sm:mt-6 lg:mt-44 xl:mt-52" titleWidth={titleWidth} content={content} />

        <BrowseButton className="mt-6 mxs:mt-10  w-max px-7  h-9 mxs:h-12  text-blue-main hover:text-gray-light" />
        <div className="h-12" />

        <DisplayGatsbyDynImage
          queryArray={homepagePics}
          fileName={content.mainImageFileName}
          wrapperClass="order-first lg:order-last  mt-5 mxs:mt-7 sm:mt-10
                        lg:ml-8 mxl:ml-12 xl:ml-16  mr-4  w-50 mxs:w-60 sm:w-75 md:w-90 lg:w-150 xl:w-200"
          wrapperStyle={winWidth < 1366 ? { transform: "scaleX(-1)" } : { transform: "scaleX(1)" }}
          altText="Main landing page graphic"
          quality={80}
        />
        {/* <StaticImage
                    className="hidden lg:block"
                    width={1000}
                    quality={90}
                  />
                  <StaticImage
                    className="lg:hidden"
                    width={360}
                    quality={90}
                  /> */}

        <div className="h-2 mxs:h-14 md:h-6" />

        <div className="hidden mxs:block  absolute left-1/2 z-20 bottom-0">
          <ScrollDownIndicator additionalClass={"transform -translate-x-1/2"} />
        </div>
      </div>
    </div>
  );
};

export default Home1TopPanel;
