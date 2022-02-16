import React from "react";
import { useMyContext } from "../../context/Context";

const EaaseTopHeading = (props) => {
  const { tabSelected, askAdviceExists } = props;
  const { winWidth, log2 } = useMyContext();;

  log2 && console.log("EaaseHeading.js runs. tab=", tabSelected);
  log2 && console.log("EaaseHeading.js askAdviceExists=", askAdviceExists);

  const QuotesTitle = (props) => {
    const { bigText, smText } = props;

    if (winWidth < 720 || tabSelected === "ask") {
      return (
        <>
          <span className="emphFont">{bigText}</span>
          <span className="ml-1.5 plusFont">{smText}</span>
          {tabSelected !== "ask" && <div className="h-8 mxs:h-10" />}
        </>
      );
    } else return null;
  };

  return (
    <>
      {tabSelected === "engage" ? (
        <QuotesTitle bigText={"Engage"} smText={"with open questions"} />
      ) : tabSelected === "affirm" ? (
        <QuotesTitle bigText={"Affirm"} smText={"and reflectively listen"} />
      ) : tabSelected === "ask" ? (
        <>
          <QuotesTitle bigText={"Ask"} smText={"for permission to share information"} />
          {askAdviceExists ? <div className="h-5 axs:h-6 mxs:h-8" /> : <div className="h-3 mxs:h-3" />}
        </>
      ) : tabSelected === "evoke" ? (
        <QuotesTitle bigText={"Evoke"} smText={"and evaluate options"} />
      ) : (
        <>No Tab</>
      )}
    </>
  );
};

export default EaaseTopHeading;
