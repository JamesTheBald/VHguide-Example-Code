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
      {/* Not sure what's producing the space after this next line, and hence why the -mb-4 is necessary */}
      <div className="mb-4 sm:mb-5 md:mb-6  text-blue-pale text-14 mxs:text-16 sm:text-18">
        Patients are saying they have concerns about…
      </div>

      {pediatricsContent.map((currPanel, panelNum) => {
        log && console.log("PediatricsPanel.js panel#", panelNum, "is", currPanel);
        return (
          <div key={panelNum}>
            {/* <h2 className="mb-6 mxs:mb-9 sm:mb-12  titleFont titleMedium">{currPanel.title}</h2> */}
            <QuoteGroupsPediatrics panelContent={currPanel.content} />
          </div>
        );
      })}
    </div>
  );
};

export default PediatricsPanels;
