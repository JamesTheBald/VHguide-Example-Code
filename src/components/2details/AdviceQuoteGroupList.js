import React from "react";
import { useMatch } from "@reach/router";
import reactElementToJSXString from "react-element-to-jsx-string";

import { useMyContext } from "../../context/Context";
import EaaseTopHeading from "./EaaseTopHeading";
import QuoteGroups from "./QuoteGroups";

const AdviceQuoteGroupList = props => {
  const { advice } = props;
  const { locn, lang, log, log2 } = useMyContext();

  const tabMatch = useMatch("/details/advice/:tabSelec");
  const tabSelected = String(tabMatch.tabSelec);
  const contentArray = advice[tabSelected]?.content;
  log && console.log("AdviceQuoteGroupList.js runs. tabSelected=", tabSelected);
  log2 && console.log("AdviceQuoteGroupList.js tabMatch=", tabMatch);
  log2 && console.log("AdviceQuoteGroupList.js So contentArray=", contentArray);

  const firstAskAdviceQuote = advice?.ask?.content[0]?.quotes[0]?.text[lang];
  const firstAskAdviceStringLength = firstAskAdviceQuote && reactElementToJSXString(firstAskAdviceQuote).length;
  const askAdviceExists = firstAskAdviceStringLength > 14;
  log2 && console.log("AdviceQuoteGroupList.js runs. askAdvice=", firstAskAdviceQuote);
  log2 && console.log("AdviceQuoteGroupList.js runs. JSX string length of askAdvice=", firstAskAdviceStringLength);
  log2 && console.log("AdviceQuoteGroupList.js runs. askAdviceExists=", askAdviceExists);

  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const onReprodAdviceAsk =
    path.match(/\/details\/advice\/ask/i) && locn.branch === 0 && locn.topic === 0 && locn.subtopic === 3
      ? true
      : false;
  log && console.log("AdviceQuoteGroupList.js onReprodAdviceAsk=", onReprodAdviceAsk);


  return (
    <>
      <div className="mt-10 axs:mt-14">
        <EaaseTopHeading tabSelected={tabSelected} askAdviceExists={askAdviceExists} />
      </div>

      <QuoteGroups panelContent={contentArray} initOpen={true} />
      
      {tabSelected === "ask" && (
        <>
          {askAdviceExists && <div style={{ height: 30 }} />}
          {askAdviceExists && <div className="mb-9  w-full  border-gray-medium border-solid border-b-3" />}
          <span className="plusFont">then</span>
          <span className="ml-1.5 emphFont">Share</span>
          <span className="ml-1.5 plusFont">information</span>
          <div className="h-5 axs:h-6 mxs:h-8" />
          <QuoteGroups panelContent={advice.share.content} initOpen={!onReprodAdviceAsk} />
        </>
      )}
    </>
  );
};

export default AdviceQuoteGroupList;
