import React from "react";

import EaaseHoverPopupEN from "../../content/EaaseHoverPopupEN";
import EaaseHoverPopupFR from "../../content/EaaseHoverPopupFR";
import { useMyContext } from "../../context/Context";

const AdviceWhatsWorkingBI = () => {
  const { lang, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  log2 && console.log("AdviceWhatsWorking.js runs.");

  if (lang === "EN")
    return (
      <>
        <h3 className="titleFont titleMediumPlus">What’s Working for Other Clinicians</h3>
        <div className="mt-6 baseFont text-blue-black  relative">
          <span>Approach the conversation through the</span>
          <EaaseHoverPopupEN
            eaaseTextClass="ml-1.5 orangeUnderline"
            eaaseBoxClass="absolute  sm:left-1/4 xl:left-100  top-12  w-full mxs:w-100 sm:w-110 md:w-120 lg:w-140  shadow-gray"
          />
          <span>
            . Below you'll find examples of dialogue from other clinicians who have addressed this type of hesitancy.
          </span>
        </div>
      </>
    );
  return (
    <>
      <h3 className="titleFont titleMediumPlus">Ce qui porte fruits pour d’autres cliniciens [FROM XD]</h3>
      <div className="mt-6 baseFont text-blue-black  relative">
        <span>Abordez la conversation en empruntant les étapese</span>
        <EaaseHoverPopupFR
          eaaseTextClass="ml-1.5 orangeUnderline"
          eaaseBoxClass="absolute  sm:left-1/4 xl:left-100  top-12  w-full mxs:w-100 sm:w-110 md:w-120 lg:w-140  shadow-gray"
        />
        <span>
          . Vous trouverez ci-dessous des exemples de dialogues d’autres cliniciens et cliniciennes qui ont eu à faire
          face à ce type d’hésitation. [FROM XD]
        </span>
      </div>
    </>
  );
};

export default AdviceWhatsWorkingBI;
