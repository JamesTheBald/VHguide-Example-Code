import React, { useContext } from "react";
import Context from "../Context";
import LinkToAboutEAASE from "../../content/LinkToAboutEAASE";

const AdviceWhatsWorking = () => {
  const { log } = useContext(Context);
  let { scrollTarget } = useContext(Context);

  log && console.log("AdviceWhatsWorking.js runs. scrollTarget=", scrollTarget);

  return (
    <div>
      <div className="titleFont titleMedium">What’s Working for Other Clinicians</div>

      <div className="mt-6  text-16 sm:text-18 tracking-0.4 text-blue-black  relative">
        <span>Approach the conversation through the</span>

        <span className="hoverRevealTrigger">
          <LinkToAboutEAASE text={"‘EAASE’ steps"} />

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
            <div>
              Rather than focusing on getting your patient to say ‘yes’ to vaccination, the first aim of an EAASE
              conversation is to build an alliance and set a foundation for vaccine confidence.
            </div>
          </div>
        </span>

        <span>
          . Below you’ll find examples of dialogue from other clinicians who have address this type of hesitancy.
        </span>
      </div>
    </div>
  );
};

export default AdviceWhatsWorking;
