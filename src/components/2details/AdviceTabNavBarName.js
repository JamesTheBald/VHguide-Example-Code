import React, { useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Context from "../Context";

const AdviceTabNavBarName = (props) => {
  const { currTab } = props;
  const { winWidth, setNavBarOpen, setWinWidth, setWinHeight, log2 } = useContext(Context);

  log2 && console.log("AdviceTabNavBarName.js runs. currTab=", currTab);

  const history = useHistory();
  const changeTab = (tabName) => {
    history.push("/details/advice/" + tabName);
    scroll.scrollToTop({ duration: 600 }); // scroll animation time in ms
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
    setNavBarOpen(false);
  };

  // Get tab name from URL route, but guard against bad URLs
  const adviceTabs = ["engage", "affirm", "ask", "evoke"];
  const tabMatch = useRouteMatch("/details/advice/:tabSelected");
  let tabSelected = "";
  if (tabMatch?.params && adviceTabs.includes(tabMatch.params.tabSelected)) {
    tabSelected = tabMatch.params.tabSelected;
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
  const tabNameBaseClass = "mt-5  text-16 mxs:text-18 sm:text-20 md:text-25 tracking-0.5";
  const subNameClass = "hidden sm:block  text-16 tracking-0.3";

  return (
    <div className="relative" onClick={() => changeTab(currTab)}>
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
    </div>
  );
};

export default AdviceTabNavBarName;
