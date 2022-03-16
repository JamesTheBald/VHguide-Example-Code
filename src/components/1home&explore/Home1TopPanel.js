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

  const homepagePics = queryData.current.homepagePics.edges;
  const w = winWidth;

  const {
    bgColorFromCls,
    bgColorToCls,
    bgGradientDirMobl,
    bgGradientDirDesk,
    mainTextColorCls,
    exclaimText,
    exclaimTextColorClsMobl,
    exclaimTextColorClsDesk,
    buttonText,
    buttonBgColorCls,
    buttonTextColorCls,
    buttonBorderColorCls,
    buttonDestn,
    newLocn,
    mainImageFileName,
    backgndImageFileName,
  } = content;

  log && console.log("Home1TopPanel.js Incoming winWidth=", w, " & winHeight=", winHeight);
  log2 && console.log("Home1TopPanel.js homepagePics=", homepagePics);
  log2 && console.log("Home1TopPanel.js content=", content);
  log2 && console.log("Home1TopPanel.js backgndImageFileName=", backgndImageFileName);

  let titleWidthFrac = w < 510 ? 0.85 : w < 720 ? 0.82 : 0.78;
  if (w > 1024) titleWidthFrac = w < 1200 ? 0.72 : w < 1366 ? 0.65 : 0.43;
  let titleWidth = w * titleWidthFrac;

  const newContentWidth = w - 2 * marginOuter;
  if (titleWidth > newContentWidth) titleWidth = newContentWidth;
  log2 && console.log("Home1TopPanel.js useEffect titleWidth=", titleWidth);

  // Set 2D transform parameters for wavy line
  const [xFm, setXFm] = useState({ xTr: 0, yTr: 0, xSx: 0, ySc: 0 });
  useEffect(() => {
    const xfm = wavyLineTransforms(w);
    log && console.log("Home1TopPanel.js Wavy Line transform object, xfm=", xfm);
    setXFm(xfm);
  }, [w, log]);

  // let gradientDir = "";
  // if (winWidth < 1024) gradientDir = `bg-gradient-to-${bgGradientToMobile}`;
  // else gradientDir = `bg-gradient-to-${bgGradientStartDesktop}`;

  const gradientDir = w < 1024 ? bgGradientDirMobl : bgGradientDirDesk;

  return (
    <div
      className={`w-screen h-full absolute ${gradientDir} ${bgColorFromCls} ${bgColorToCls}  ${mainTextColorCls}
                  flex flex-col justify-center  rounded-b-5xl`}
    >
      <div className="absolute w-full h-full  overflow-hidden  z-20">
        <DisplayGatsbyDynImage
          altText="Wavy Line background image"
          queryArray={homepagePics}
          fileName={backgndImageFileName}
          wrapStyle={{
            transform: `translate(${xFm.xTr}px, ${xFm.yTr}px) scale(${w < 1366 ? -xFm.xSc : xFm.xSc}, ${xFm.ySc})`,
          }} // -xScale mirrors the image
          quality={80}
        />
      </div>

      <div className="w-full stdMargins  flex flex-col lg:flex-row  z-20 relative" style={{ zIndex: 20 }}>
        <div className="flex flex-col justify-center">
          {exclaimText && (
            <div
              className={`font-serif font-semibold italic  titleSmall ${
                w < 1024 ? exclaimTextColorClsMobl : exclaimTextColorClsDesk
              }`}
            >
              {exclaimText}
            </div>
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
          wrapStyle={w < 1366 ? { transform: "scaleX(-1)" } : { transform: "scaleX(1)" }}
          altText="Main landing page graphic"
          quality={80}
        />

        <div name="bottom spacer" className="h-10 mxs:h-16 lg:h-6" />
      </div>
    </div>
  );
};

export default Home1TopPanel;
