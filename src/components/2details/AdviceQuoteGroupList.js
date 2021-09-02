import React, { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import reactElementToJSXString from "react-element-to-jsx-string";
import Context from "../Context";

import EaaseTopHeading from "./EaaseTopHeading";
import QuoteGroup from "./QuoteGroup";

const AdviceQuoteGroupList = (props) => {
  const { advice, setFullStoryID } = props;
  const { log, log2 } = useContext(Context);

  const tabMatch = useRouteMatch("/details/advice/:tabSelected");
  const tabSelected = String(tabMatch.params.tabSelected);
  log && console.log("AdviceQuoteGroupList.js tabMatch=", tabMatch);
  log && console.log("AdviceQuoteGroupList.js tabSelected=", tabSelected);

  const contentArray = advice[tabSelected].content;
  log2 && console.log("AdviceQuoteGroupList.js So contentArray=", contentArray);

  const firstAskAdviceQuote = advice?.ask?.content[0]?.quotes[0]?.text;
  const firstAskAdviceStringLength = reactElementToJSXString(firstAskAdviceQuote).length;
  const askAdviceExists = firstAskAdviceStringLength > 14;
  log2 && console.log("AdviceQuoteGroupList.js runs. askAdvice=", firstAskAdviceQuote);
  log2 && console.log("AdviceQuoteGroupList.js runs. JSX string length of askAdvice=", firstAskAdviceStringLength);
  log && console.log("AdviceQuoteGroupList.js runs. askAdviceExists=", askAdviceExists);

  return (
    <>
      <div className="mxs:mt-6">
        <EaaseTopHeading tabSelected={tabSelected} askAdviceExists={askAdviceExists} />
      </div>

      <QuoteGroup contentArray={contentArray} setFullStoryID={setFullStoryID} />
      {tabSelected === "ask" && (
        <>
          {askAdviceExists && <div style={{height: 30}} />}
          {askAdviceExists && <div className="mb-9  w-full  border-gray-medium border-b-3" />}
          <span className="plusFont">then</span>
          <span className="ml-1.5 emphFont">Share</span>
          <span className="ml-1.5 plusFont">information</span>
          <div className="h-10 mxs:h-12" />
          <QuoteGroup contentArray={advice.share.content} setFullStoryID={setFullStoryID} />
        </>
      )}
    </>
  );
};

export default AdviceQuoteGroupList;
