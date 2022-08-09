import React from "react";
import { useMatch } from "@reach/router";
import reactElementToJSXString from "react-element-to-jsx-string";

import { useMyContext } from "../../context/Context";
import EaaseStepTitle from "./EaaseStepTitle";
import eaaseStepTitlesBI from "../../content/eaaseStepTitlesBI";
import QuoteGroups from "./QuoteGroups";

const AdviceQuoteGroupList = props => {
  const { advice } = props;
  const { winWidth, locn, lang, log, log2 } = useMyContext();

  const tabMatch = useMatch("/details/advice/:tabSelec");
  const tabSelected = String(tabMatch.tabSelec);
  const contentArray = advice[tabSelected]?.content;
  log && console.log("AdviceQuoteGroupList.js runs. tabSelected=", tabSelected);
  log2 && console.log("AdviceQuoteGroupList.js tabMatch=", tabMatch);
  log2 && console.log("AdviceQuoteGroupList.js So contentArray=", contentArray);

  const firstAskAdviceQuote = advice?.ask?.content[0]?.quotes[0]?.text[lang];
  const firstAskAdviceStringLength = firstAskAdviceQuote && reactElementToJSXString(firstAskAdviceQuote).length;
  // const askAdviceExists = firstAskAdviceStringLength > 14;
  log2 && console.log("AdviceQuoteGroupList.js runs. askAdvice=", firstAskAdviceQuote);
  log2 && console.log("AdviceQuoteGroupList.js runs. JSX string length of askAdvice=", firstAskAdviceStringLength);

  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const onReprodAdviceAsk =
    path.match(/\/details\/advice\/ask/i) && locn.branch === 0 && locn.topic === 0 && locn.subtopic === 3
      ? true
      : false;
  log && console.log("AdviceQuoteGroupList.js onReprodAdviceAsk=", onReprodAdviceAsk);

  const keyword = eaaseStepTitlesBI.keyword.share[lang];
  const otherWord1 = eaaseStepTitlesBI.otherWords.share1[lang];
  const otherWord2 = eaaseStepTitlesBI.otherWords.share2[lang];

  return (
    <>
      <div className="h-13 axs:h-16 mxs:h-18" />

      {
        // 'Ask for permission to share info' subheading - on narrower screens and for Ask & Share
        (winWidth < 720 || tabSelected === "ask") && (
          <>
            <EaaseStepTitle tabSelected={tabSelected} />
            <div className="h-3 mxs:h-4" />
          </>
        )
      }
      <QuoteGroups panelContent={contentArray} initOpen={true} />

      {/*  'then Share information' subheading & quote boxes */}
      {tabSelected === "ask" && (
        <div className="mt-7">
          <span className="plusFont">{otherWord1}</span>
          <span className="ml-1.5 emphFont">{keyword}</span>
          <span className="ml-1.5 plusFont">{otherWord2}</span>
          <div className="h-3 sm:h-4" />
          <QuoteGroups panelContent={advice.share.content} initOpen={!onReprodAdviceAsk} />
        </div>
      )}
    </>
  );
};

export default AdviceQuoteGroupList;
