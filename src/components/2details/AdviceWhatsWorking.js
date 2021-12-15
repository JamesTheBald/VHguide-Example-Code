import React from "react";
import { navigate } from "gatsby";

import EaaseHoverPopup from "./EaaseHoverPopup";
import { useMyContext } from "../../context/Context";

const AdviceWhatsWorking = () => {
  const { locn, log2 } = useMyContext();

  if (!(locn.branch === 0 || locn.branch === 1 || locn.branch === 2)) navigate("/details/overview");

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
          . Below you’ll find examples of dialogue from other clinicians who have address this type of hesitancy.
        </span>
      </div>
    </div>
  );
};

export default AdviceWhatsWorking;
