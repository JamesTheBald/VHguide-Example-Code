import React from "react";
import { useMyContext } from "../../context/Context";
import eaaseStepTitlesBI from "../../content/eaaseStepTitlesBI";

const EaaseStepTitle = props => {
  const { tabSelected, askAdviceExists } = props;
  const { lang, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  log && console.log("EaaseTopHeading.js runs. tabSelected=", tabSelected);
  log && console.log("EaaseTopHeading.js askAdviceExists=", askAdviceExists);

  const keyword = eaaseStepTitlesBI.keyword[tabSelected][lang];
  const otherWords = eaaseStepTitlesBI.otherWords[tabSelected][lang];

  return (
    <>
      <span className="emphFont">{keyword}</span>
      <span className="ml-1.5 plusFont">{otherWords}</span>

      {
        // Trailing spacer, with height depending on situation
        tabSelected === "ask" ? (
          askAdviceExists ? (
            <div className="h-4 axs:h-4 mxs:h-5" />
          ) : (
            <div className="h-3 mxs:h-3" />
          )
        ) : (
          <div className="h-8 mxs:h-5" />
        )
      }
    </>
  );
};

export default EaaseStepTitle;
