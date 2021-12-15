import React from "react";

import { pediatricsPearls } from "../../content/pediatricsPearls";
import { useMyContext } from "../../context/Context";
import QuoteGroups from "../2details/QuoteGroups";

const DetailsPearls = () => {
  const { log, log2 } = useMyContext();

  false && log && log2 && console.log();
  log && console.log("DetailsPearls.js pediatricsPearls=", pediatricsPearls);

  return (
    <div className="flex flex-col">
      <div className="pt-2 sm:pt-1  mb-6 mxs:mb-8 sm:mb-10  text-blue-pale text-14 mxs:text-16 sm:text-18">
        Here you will find peer-to-peer advice on how to approach and conduct vaccine hesitancy conversations,
        particularly about vaccinating children and adolescents.
      </div>

      {pediatricsPearls.map((currPanel, panelNum) => {
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
