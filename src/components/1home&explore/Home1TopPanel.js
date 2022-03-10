import React, { useState, useEffect } from "react";

import { useMyContext } from "../../context/Context";
import wavyLineTransforms from "../../functions/wavyLineTransforms";
import LandingText from "./LandingText";
import BrowseButton from "./BrowseButton";
import DisplayGatsbyDynImage from "../4general/DisplayGatsbyDynImage";

const Home1TopPanel = props => {
  const { content, showFullIntro, setShowFullIntro } = props;
  const { winWidth, winHeight, marginOuter, queryData, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  const {
    bgColorFromCls,
    bgColorToCls,
    backgndGradientStartsAt,
    mainTextColorCls,
    exclaimText,
    exclaimTextColorCls,
    buttonText,
    buttonBgColorCls,
    buttonTextColorCls,
    buttonBorderColorCls,
    buttonDestn,
    newLocn,
    mainImageFileName,
    backgndImageFileName,
  } = content;

  const homepagePics = queryData.current.homepagePics.edges;
  log && console.log("Home1TopPanel.js Incoming winWidth=", winWidth, " & winHeight=", winHeight);
  log2 && console.log("Home1TopPanel.js homepagePics=", homepagePics);
  log2 && console.log("Home1TopPanel.js content=", content);
  log2 && console.log("Home1TopPanel.js backgndImageFileName=", backgndImageFileName);

  let titleWidthFrac = winWidth < 510 ? 0.85 : winWidth < 720 ? 0.82 : 0.78;
  if (winWidth > 1024) titleWidthFrac = winWidth < 1200 ? 0.72 : winWidth < 1366 ? 0.65 : 0.43;
  let titleWidth = winWidth * titleWidthFrac;

  const newContentWidth = winWidth - 2 * marginOuter;
  if (titleWidth > newContentWidth) titleWidth = newContentWidth;
  log2 && console.log("Home1TopPanel.js useEffect titleWidth=", titleWidth);

  // Set 2D transform parameters for wavy line
  const [xFm, setXFm] = useState({ xTr: 0, yTr: 0, xSx: 0, ySc: 0 });
  useEffect(() => {
    const xfm = wavyLineTransforms(winWidth);
    log && console.log("Home1TopPanel.js Wavy Line transform object, xfm=", xfm);
    setXFm(xfm);
  }, [winWidth, log]);

  const gradientDir = backgndGradientStartsAt === "left" ? "bg-gradient-to-r" : "bg-gradient-to-b";

  return (
    <div
      className={`w-screen h-full relative ${gradientDir} ${bgColorFromCls} ${bgColorToCls}  ${mainTextColorCls}
                  flex flex-col justify-center  rounded-b-5xl`}
    >
      <div className="absolute w-full h-full  overflow-hidden  z-20">
        <DisplayGatsbyDynImage
          altText="Wavy Line background image"
          queryArray={homepagePics}
          fileName={backgndImageFileName}
          wrapStyle={{
            transform: `translate(${xFm.xTr}px, ${xFm.yTr}px) scale(${winWidth < 1366 ? -xFm.xSc : xFm.xSc}, ${
              xFm.ySc
            })`,
          }} // -xScale mirrors the image
          quality={80}
        />
      </div>

      <div className="w-full stdMargins  flex flex-col lg:flex-row  z-20 relative" style={{ zIndex: 20 }}>
        <div className="flex flex-col justify-center">
          {exclaimText && (
            <div className={`font-serif font-semibold italic  titleSmall ${exclaimTextColorCls}`}>{exclaimText}</div>
          )}

          <LandingText
            className="mt-3 mxs:mt-5 sm:mt-6"
            titleWidth={titleWidth}
            content={content}
            showFullIntro={showFullIntro}
            setShowFullIntro={setShowFullIntro}
          />

          <BrowseButton
            className={`mt-6 mxs:mt-10  w-max px-7  h-9 mxs:h-12  ${buttonTextColorCls} hover:${mainTextColorCls}
                     ${buttonBorderColorCls} ${buttonBgColorCls} hover:bg-opacity-0 border-${buttonBgColorCls}
          `}
            buttonDestn={buttonDestn}
            newLocn={newLocn}
          >
            {buttonText}
          </BrowseButton>
        </div>

        <DisplayGatsbyDynImage
          queryArray={homepagePics}
          fileName={mainImageFileName}
          wrapClass="order-first lg:order-last  mxs:mt-4
                        lg:ml-8 mxl:ml-12 xl:ml-16  mr-4  w-64 mxs:w-72 sm:w-90 md:w-110 lg:w-150 xl:w-190"
          // mxs:mt-7 sm:mt-10
          wrapStyle={winWidth < 1366 ? { transform: "scaleX(-1)" } : { transform: "scaleX(1)" }}
          altText="Main landing page graphic"
          quality={80}
        />

        <div name="bottom spacer" className="h-10 mxs:h-16 lg:h-6" />
      </div>
    </div>
  );
};

export default Home1TopPanel;
