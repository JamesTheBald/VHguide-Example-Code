import React from "react";
import { navigate } from "gatsby";
import { useMatch } from "@reach/router";

// import { animateScroll } from "react-scroll";
import { useMyContext } from "../../context/Context";
import eaaseStepNamesBI from "../../content/eaaseStepNamesBI";

const AdviceTabNavBarSection = props => {
  const { currTab } = props;
  const { lang, log, log2 } = useMyContext();
  0 && console.log(log, log2);

  log2 && console.log("AdviceTabNavBarSection.js runs. currTab=", currTab);
  log && console.log("AdviceTabNavBarSection.js adviceTabNavBarText=", eaaseStepNamesBI);

  const changeTab = tabName => {
    navigate("/details/advice/" + tabName);
    if (typeof window !== `undefined`) {
      // animateScroll.scrollToTop({ duration: 300 }); // scroll animation time in ms
    }
  };

  // Get tab name from URL route, but guard against bad URLs
  const adviceTabs = ["engage", "affirm", "ask", "evoke"];
  const tabMatch = useMatch("/details/advice/:tabSelected");

  let tabSelected = "";
  if (tabMatch && adviceTabs.includes(tabMatch.tabSelected)) {
    tabSelected = tabMatch.tabSelected;
    log2 && console.log("AdviceTabNavBarSection.js tabSelected=", tabSelected);
  } else {
    tabSelected = "engage";
    log2 && console.log("AdviceTabNavBarSection.js No match to URL param so setting tabSelected=", tabSelected);
  }

  const tabName = eaaseStepNamesBI.name[currTab][lang];
  const subName = eaaseStepNamesBI.subname[currTab][lang];

  const flexBoxClass =
    lang === "EN"
      ? "pr-3 axs:pr-6 mxs:pr-12 sm:pr-14 md:pr-10  flex flex-col"
      : "pr-3 axs:pr-5 mxs:pr-9 sm:pr-14 md:pr-10  flex flex-col";
  const tabNameBaseClass =
    lang === "EN"
      ? "mt-5  text-15 axs:text-16 mxs:text-18 sm:text-20 md:text-25 tracking-0.1 mxs:tracking-0.4 sm:tracking-0.5  text-left"
      : "mt-5  text-15 axs:text-16 mxs:text-16 sm:text-20 md:text-25 tracking-0.1 mxs:tracking-0.4 sm:tracking-0.5  text-left";
  const subNameClass = "hidden sm:block  text-16 tracking-0.3  text-left";

  return (
    <button className="relative" onClick={() => changeTab(currTab)}>
      {tabSelected === currTab ? (
        <>
          {/* Selected Tab */}
          <div className={flexBoxClass} style={{ maxWidth: 240 }}>
            <div // Highlight Bar
              className="w-5/6 absolute bg-blue-main rounded-full"
              style={{ height: 6, top: -4 }}
            />

            <div className={`font-semibold ${tabNameBaseClass}`}>{tabName}</div>
            <div className={subNameClass}>{subName}</div>
          </div>
        </>
      ) : (
        <div name="Unselected Tab" className={flexBoxClass} style={{ maxWidth: 240 }}>
          <div className={tabNameBaseClass}>{tabName}</div>
          <div className={`invisible max-h-2 overflow-y-hidden ${subNameClass}`}>{subName}</div>
        </div>
      )}
    </button>
  );
};

export default AdviceTabNavBarSection;
