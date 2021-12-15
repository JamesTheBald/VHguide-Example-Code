import React from "react";

import { pediatricsContent } from "../../content/pediatricsContent";
import { useMyContext } from "../../context/Context";
import QuoteGroupsPediatrics from "../2details/QuoteGroupsPediatrics";

const PediatricsPanels = () => {
  const { log, log2 } = useMyContext();

  false && log && log2 && console.log();
  log && console.log("PediatricsPanels.js pediatricsContent=", pediatricsContent);

  return (
    <div className="flex flex-col">
      <div className="pt-2 sm:pt-1  mb-6 mxs:mb-8 sm:mb-10  text-blue-pale text-14 mxs:text-16 sm:text-18">
        Patients are saying they have concerns about…
      </div>

      {pediatricsContent.map((currPanel, panelNum) => {
        log && console.log("PediatricsPanel.js panel#", panelNum, "is", currPanel);
        return (
          <div key={panelNum}>
            <QuoteGroupsPediatrics panelContent={currPanel.content} />
          </div>
        );
      })}
    </div>
  );
};

export default PediatricsPanels;
