import React, { useContext } from "react";
import Context from "../Context";

const EaaseTopHeading = (props) => {
  const { tabSelected, askAdviceExists } = props;
  const { winWidth, log } = useContext(Context);

  log && console.log("EaaseHeading runs. tab=", tabSelected);
  log && console.log("EaaseHeading askAdviceExists=", askAdviceExists);

  const QuotesTitle = (props) => {
    const { bigText, smText } = props;

    if (winWidth < 720 || tabSelected === "ask") {
      return (
        <>
          {/* <div className="mb-8 mxs:mb-10 sm:hidden"> */}
          {/* <div className="mb-12 mxs:mb-24 sm:hidden"> */}
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
          {askAdviceExists ? <div className="h-10 mxs:h-12" /> : <div className="h-3 mxs:h-3" />}
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
