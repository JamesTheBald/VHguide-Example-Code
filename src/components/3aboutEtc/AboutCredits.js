import React from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import CollabLogos from "./CollabLogos";
import { landingBioContent } from "../../content/landingBioContent";
import { useMyContext } from "../../context/Context";

const AboutCredits = () => {
  const { queryData, log, log2 } = useMyContext();
  false & log && console.log();

  const homepagePics = queryData.current.homepagePics.edges;

  return (
    <>
      <h1 className="aboutEtcTopGap pb-5 sm:pb-8  titleFont titleBig  text-blue-main  z-30">
        Credits and Collaborators
      </h1>

      <h2 id="credits" className="panelTitleClass mb-5 mxs:mb-8 sm:mb-11">
        Credits
      </h2>

      <div className="flex flex-row flex-wrap  w-full">
        {landingBioContent.map((currBio, indx) => {
          log2 && console.log("AboutCredits.js .map() currBio=", currBio);

          return (
            <div
              key={indx}
              className="flex flex-col text-blue-black w-full md:w-1/2 xl:w-1/3  md:pr-18  mb-10 mxs:mb-14 md:mb-16 lg:mb-18"
            >
              <div className="flex w-full">
                {homepagePics.map((item, index) => {
                  if (item.node.relativePath === currBio.image) {
                    return (
                      <div
                        key={index}
                        className="w-28 mxs:w-32 sm:w-36 lg:w-44 rounded-full overflow-hidden flex-shrink-0 relative z-0"
                        // "relative z-0" added as a workaround to border-radius bug, which shows up on mobile:
                        // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari
                      >
                        <GatsbyImage
                          image={item.node.childImageSharp.gatsbyImageData}
                          alt={`${currBio.name} portrait`}
                          className="w-28 mxs:w-32 sm:w-36 lg:w-44  rounded-full relative z-0"
                          quality={80}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
                <div className="w-full">
                  <div className="ml-5 sm:ml-6 lg:ml-7  relative top-1/2 transform -translate-y-1/2">
                    <div className="flex flex-wrap  subHeadingFont">
                      <div>{currBio.name},&nbsp;</div>
                      <div>{currBio.letters}</div>
                    </div>
                    <div className="absolute top-full  panelTextClass italic">{currBio.title}</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 mxs:mt-6 lg:mt-7 smThenBaseFont">{currBio.info}</div>
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

      <div className="mt-12 md:mt-10 panelTitleClass pb-4">Collaborators</div>
      <CollabLogos />
      <div className="h-10" />
    </>
  );
};

export default AboutCredits;
