import React from "react";
import { navigate } from "gatsby";
import { useMatch } from "@reach/router";

import { animateScroll as scroll } from "react-scroll";
import { useMyContext } from "../../context/Context";

const AdviceTabNavBarName = props => {
  const { currTab } = props;
  const { winWidth, log2 } = useMyContext();

  log2 && console.log("AdviceTabNavBarName.js runs. currTab=", currTab);

  const changeTab = tabName => {
    navigate("/details/advice/" + tabName);

    if (typeof window !== `undefined`) {
      scroll.scrollToTop({ duration: 600 }); // scroll animation time in ms
    }
  };

  // Get tab name from URL route, but guard against bad URLs
  const adviceTabs = ["engage", "affirm", "ask", "evoke"];
  const tabMatch = useMatch("/details/advice/:tabSelected");

  // typeof window !== "undefined" && window.location.pathname === "/pearls"

  let tabSelected = "";
  if (tabMatch && adviceTabs.includes(tabMatch.tabSelected)) {
    tabSelected = tabMatch.tabSelected;
    log2 && console.log("AdviceTabNavBarName.js tabSelected=", tabSelected);
  } else {
    tabSelected = "engage";
    log2 && console.log("AdviceTabNavBarName.js No match to URL param so setting tabSelected=", tabSelected);
  }

  const adviceTabNames = {
    engage: "Engage",
    affirm: "Affirm",
    ask: winWidth < 600 ? <>Ask/&#8203;Share</> : "Ask & Share",
    evoke: "Evoke",
  };
  const tabName = adviceTabNames[currTab];

  const adviceTabSubNames = {
    engage: "with open questions",
    affirm: "and reflectively listen",
    ask: "for permission then share information",
    evoke: "and evaluate options",
  };
  const subName = adviceTabSubNames[currTab];

  const flexBoxClass = "pr-6 mxs:pr-12 sm:pr-14 md:pr-10  flex flex-col";
  const tabNameBaseClass = "mt-5  text-16 mxs:text-18 sm:text-20 md:text-25 tracking-0.5  text-left";
  const subNameClass = "hidden sm:block  text-16 tracking-0.3  text-left";

  return (
    <button className="relative" onClick={() => changeTab(currTab)}>
      {tabSelected === currTab ? (
        <>
          <div name="Selected Tab" className={`${flexBoxClass}`} style={{ maxWidth: 240 }}>
            <div
              name="Highlight Bar"
              className="w-5/6 absolute bg-blue-main rounded-full"
              style={{ height: 6, top: -4 }}
            />

            <div className={`font-semibold ${tabNameBaseClass}`}>{tabName}</div>
            <div className={subNameClass}>{subName}</div>
          </div>
        </>
      ) : (
        <div name="Unselected" className={`${flexBoxClass}`} style={{ maxWidth: 240 }}>
          <div className={`${tabNameBaseClass}`}>{tabName}</div>
          <div className={`invisible ${subNameClass}`}>{subName}</div>
        </div>
      )}
    </button>
  );
};

export default AdviceTabNavBarName;
