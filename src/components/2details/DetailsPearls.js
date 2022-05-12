import React from "react";

import { pediatricsPearlsBI } from "../../content/pediatricsPearlsBI";
import { reproductivePearlsBI } from "../../content/reproductivePearlsBI";
import { medExemptPearlsBI } from "../../content/medExemptPearlsBI";
import { useMyContext } from "../../context/Context";
import QuoteGroups from "../2details/QuoteGroups";

const DetailsPearls = () => {
  const { locn, log, log2 } = useMyContext();
  false && log && log2 && console.log();
  log && console.log("DetailsPearls.js locn=", locn);

  const detailsPearlsContent =
    locn.branch === 3
      ? pediatricsPearlsBI
      : locn.branch === 0 && locn.subtopic === 3
      ? reproductivePearlsBI
      : medExemptPearlsBI;

  log && console.log("DetailsPearls.js detailsPearlsContent=", detailsPearlsContent);

  return (
    <div className="flex flex-col">
      <div className="pt-2 sm:pt-1  mb-6 mxs:mb-8 sm:mb-10  text-blue-pale text-14 mxs:text-16 sm:text-18">
        {locn.branch === 3 ? (
          <>
            Here you will find peer-to-peer advice on how to approach and conduct vaccine hesitancy conversations,
            particularly about vaccinating children and adolescents.
          </>
        ) : locn.branch === 0 && locn.subtopic === 3 ? (
          <>
            Here you will find peer-to-peer advice on how to approach conversations about pregnancy, fertility, or
            reproductive concerns.
          </>
        ) : (
          <>Here you will find peer-to-peer advice on how to approach conversations about medical exemptions.</>
        )}
      </div>

      {detailsPearlsContent.map((currPanel, panelNum) => {
        log && console.log("DetailsPearls.js panel#", panelNum, "is", currPanel);
        return (
          <div key={panelNum}>
            <QuoteGroups panelContent={currPanel.content} />
          </div>
        );
      })}
    </div>
  );
};

export default DetailsPearls;
