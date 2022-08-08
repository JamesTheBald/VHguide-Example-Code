import React from "react";
import { navigate } from "gatsby";

import { pediatricsContentBI } from "../../content/pediatricsContentBI";
import { useMyContext } from "../../context/Context";
import QuoteGroupsPediatricsBI from "../2details/QuoteGroupsPediatricsBI";

const PediatricsPanelsBI = () => {
  const { locn, lang, log, log2 } = useMyContext();

  false && log && log2 && console.log();
  log2 && console.log("PediatricsPanels.js pediatricsContentBI=", pediatricsContentBI);

  if (locn.branch !== 3) navigate("/details/overview");

  return (
    <div className="flex flex-col">
      <div className="pt-2 sm:pt-1  mb-6 mxs:mb-8 sm:mb-10  text-blue-pale text-14 mxs:text-16 sm:text-18">
        {lang === "EN" ? (
          "Patients are saying they have concerns about…"
        ) : (
          <>«&nbsp;Les patients avouent s’inquiéter…&nbsp;»</>
        )}
      </div>

      {pediatricsContentBI.map((currPanel, panelNum) => {
        return (
          <div key={panelNum}>
            <QuoteGroupsPediatricsBI panelContent={currPanel.content} />
          </div>
        );
      })}
    </div>
  );
};

export default PediatricsPanelsBI;
