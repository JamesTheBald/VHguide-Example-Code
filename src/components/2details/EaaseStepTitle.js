import React from "react";
import { useMyContext } from "../../context/Context";
import eaaseStepTitlesBI from "../../content/eaaseStepTitlesBI";

const EaaseStepTitle = props => {
  const { tabSelected } = props;
  const { lang, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  log && console.log("EaaseTopHeading.js runs. tabSelected=", tabSelected);

  const keyword = eaaseStepTitlesBI.keyword[tabSelected][lang];
  const otherWords = eaaseStepTitlesBI.otherWords[tabSelected][lang];

  return (
    <>
      <span className="emphFont">{keyword}</span>
      <span className="ml-1.5 plusFont">{otherWords}</span>
    </>
  );
};

export default EaaseStepTitle;
