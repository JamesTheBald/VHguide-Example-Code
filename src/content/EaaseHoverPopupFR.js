import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const EaaseHoverPopupEN = props => {
  const { eaaseTextClass, eaaseBoxClass } = props;
  return (
    <span className="hoverRevealTrigger">
      <AnchorLink to="/about/#eaaseSteps" title="EAASE steps" className={eaaseTextClass} />

      <div className={`hiddenTillHover  p-6 mxs:p-8 baseFont bg-white rounded-2xl ${eaaseBoxClass} shadowGray  z-50`}>
        <div className="pb-3 font-bold">‘EAASE Steps’ (TEMP FRENCH)</div>
        <div className="pb-3">
          Using the principles of Motivational Interviewing, our team developed the ‘EAASE’ steps to help guide
          conversations with vaccine hesitant patients: Engage, Affirm, Ask then Share, and Evoke. We call them steps,
          but you don’t need to follow them as a sequence. You can begin and end on any step. The EAASE approach
          improves conversations by focusing on the trust relationship between you and your patient.
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
    </span>
  );
};

export default EaaseHoverPopupEN;
