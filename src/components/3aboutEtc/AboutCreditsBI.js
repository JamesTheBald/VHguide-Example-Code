import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import DisplayGatsbyDynImage from "../4general/DisplayGatsbyDynImage";
import CollabLogosBI from "./CollabLogosBI";
import biosContentBI from "../../content/biosContentBI";
import { useMyContext } from "../../context/Context";

const AboutCreditsBI = () => {
  const { queryData, lang, log, log2 } = useMyContext();
  false & log && console.log();

  0 && console.log(log, log2);
  const homepagePics = queryData.current.homepagePics.edges;

  return (
    <>
      <h1 className="aboutEtcTopGap pb-5 sm:pb-8  titleFont titleBig  text-blue-main  z-30">
        {/* {lang === "EN" ? <></> : <></>} */}
        {lang === "EN" ? <>Credits and Collaborators</> : <>Mentions et collaborateurs</>}
      </h1>

      <h2 id="credits" className="panelTitleClass mb-5 mxs:mb-8 sm:mb-11">
        {lang === "EN" ? <>Credits</> : <>Mentions</>}
      </h2>

      <div className="flex flex-row flex-wrap  w-full">
        {biosContentBI.map((currBio, indx) => {
          return (
            <div
              key={indx}
              className="flex flex-col text-blue-black w-full md:w-1/2 xl:w-1/3  md:pr-18  mb-10 mxs:mb-14 md:mb-16 lg:mb-18"
            >
              <div className="flex w-full">
                <DisplayGatsbyDynImage
                  queryArray={homepagePics}
                  fileName={currBio.image}
                  wrapClass="w-28 mxs:w-32 sm:w-36 lg:w-44 rounded-full overflow-hidden flex-shrink-0 relative z-0"
                  imgClass="w-28 mxs:w-32 sm:w-36 lg:w-44  rounded-full relative z-0"
                  // "relative z-0" added as a workaround to border-radius bug, which shows up on mobile:
                  // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari
                  altText={`${currBio.name} portrait`}
                  quality={80}
                />

                <div className="w-full">
                  <div className="ml-5 sm:ml-6 lg:ml-7  relative top-1/2 transform -translate-y-1/2">
                    <div className="flex flex-wrap  subHeadingFont">
                      <div>{currBio.name},&#8200;</div>
                      <div>{currBio.letters[lang]}</div>
                    </div>
                    <div className="absolute top-full  panelTextClass italic">{currBio.title[lang]}</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 mxs:mt-6 lg:mt-7 smThenBaseFont">{currBio.info[lang]}</div>
              {/* <div className="mt-5 mxs:mt-6 lg:mt-7 smThenBaseFont">{currBio.info[lang]}</div> */}
            </div>
          );
        })}

        <div className="w-full md:w-1/2 xl:w-1/3  relative">
          <StaticImage
            className="relative -top-4 w-full max-w-120 lg:max-w-140"
            src="../../assets/collabLogos/U of C SPP.jpg"
            alt="UofC School of Public Policy logo"
          />
        </div>
      </div>

      <div className="mt-12 md:mt-10 panelTitleClass pb-4">
        {lang === "EN" ? <>Collaborators</> : <>Collaborateurs</>}
      </div>
      <CollabLogosBI />
      <div className="h-10" />
    </>
  );
};

export default AboutCreditsBI;
