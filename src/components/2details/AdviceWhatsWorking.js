import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
// import { AnchorLink } from "gatsby-plugin-anchor-links";

import EaaseHoverPopup from "./EaaseHoverPopup";
import { useMyContext } from "../../context/Context";

const AdviceWhatsWorking = () => {
  const { log2 } = useMyContext();

  log2 && console.log("AdviceWhatsWorking.js runs.");

  return (
    <div>
      <h3 className="titleFont titleMedium">What’s Working for Other Clinicians</h3>

      <div className="mt-6  text-16 sm:text-18 tracking-0.4 text-blue-black  relative">
        <span>Approach the conversation through the</span>

        <EaaseHoverPopup
          eaaseTextClass="ml-1.5 orangeLink"
          eaaseBoxClass="absolute  sm:left-1/4 xl:left-100  top-10  w-full mxs:w-100 sm:w-110 md:w-120 lg:w-140  shadow-gray"
        />
        {/* <EaaseHoverPopup eaaseTextClass="ml-1.5 orangeLink" eaaseBoxClass="shadow-gray  sm:left-1/4  top-12" /> */}

        {/* <span className="hoverRevealTrigger">
          <AnchorLink to="/about/#eaaseSteps" title="‘EAASE’ steps" className="ml-1.5 orangeLink" />

          <div
            className="hiddenTillHover absolute sm:left-1/4  top-12 z-50  w-full sm:w-3/4 md:w-1/2 lg:w-140
                         p-8  baseFont bg-white rounded-2xl shadowGray"
            //  above class had "sm:-translate-x-1/2" but this doesn't do anything with "transform" utility
          >
            <div className="pb-3  text-yellow-darkish font-bold">‘EAASE’ Steps</div>
            <div className="pb-3">
              Using the principles of Motivational Interviewing, our team developed the ‘EAASE’ steps to help guide
              conversations with vaccine hesitant patients: Engage, Affirm, Ask then Share, and Evoke. We call them
              steps, but you don’t need to follow them as a sequence. You can begin and end on any step. The EAASE
              approach improves conversations by focusing on the trust relationship between you and your patient.
            </div>
            <div className="w-full  flex flex-col mxs:flex-row  items-center">
              <div>
                Rather than focusing on getting your patient to say ‘yes’ to vaccination, the first aim of an EAASE
                conversation is to build an alliance and set a foundation for vaccine confidence.
              </div>
              <StaticImage
                src="../../assets/other/EAASE Icon.svg"
                alt="EAASE cycle"
                className="order-1 mxs:order-2  pt-0.5 mt-4 mxs:mt-0 mxs:ml-2 sm:ml-4  w-40 mxs:w-36 sm:w-40  flex-shrink-0"
              />
            </div>
          </div>
        </span> */}

        <span>
          . Below you’ll find examples of dialogue from other clinicians who have address this type of hesitancy.
        </span>
      </div>
    </div>
  );
};

export default AdviceWhatsWorking;
