import React from "react";

import EaaseHoverPopup from "./EaaseHoverPopup";
import { useMyContext } from "../../context/Context";

const AdviceWhatsWorking = () => {
  const { log, log2 } = useMyContext();
  0 && console.log(log, log2);

  log2 && console.log("AdviceWhatsWorking.js runs.");

  return (
    <div>
      <h3 className="titleFont titleMediumPlus">What’s Working for Other Clinicians</h3>

      <div className="mt-6  text-16 sm:text-18 tracking-0.4 text-blue-black  relative">
        <span>Approach the conversation through the</span>

        <EaaseHoverPopup
          eaaseTextClass="ml-1.5 orangeUnderline"
          eaaseBoxClass="absolute  sm:left-1/4 xl:left-100  top-12  w-full mxs:w-100 sm:w-110 md:w-120 lg:w-140  shadow-gray"
        />

        <span>
          . Below you'll find examples of dialogue from other clinicians who have addressed this type of hesitancy.
        </span>
      </div>
    </div>
  );
};

export default AdviceWhatsWorking;
