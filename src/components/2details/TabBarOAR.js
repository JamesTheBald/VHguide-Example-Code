import React from "react";
import { useMatch } from "@reach/router";

import { useMyContext } from "../../context/Context";
import changeOARTab from "../../functions/changeOARTab";

const TabBarOAR = () => {
  const { winWidth, marginOuter, locn, log, log2 } = useMyContext();

  false && console.log(log && log2);
  log2 && console.log("TabBarOAR.js runs. winWidth=", winWidth);

  // To convert to title case, per KevBot: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  const titleCase = str => {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  };

  // Get tab name from URL
  const tabMatchDetails = useMatch("/details/:selected");
  // const tabMatchAdvice = useMatch("/details/advice/:selected");
  const tabMatch = tabMatchDetails ? tabMatchDetails : { selected: "advice" };

  log && console.log("TabBarOAR.js tabMatch=", tabMatchDetails);
  log2 && console.log("TabBarOAR.js tabMatch.selected=", tabMatch.selected);

  let selecTabName = "Overview";
  const OARtabs = ["overview", "advice", "resources", "pearls"];
  if (tabMatch && OARtabs.includes(tabMatch.selected)) {
    // Above line is to guard against bad URLs
    selecTabName = tabMatch.selected;
    selecTabName = titleCase(selecTabName);
    if (selecTabName === "Pearls") selecTabName = "Clinical Pearls";
    log && console.log("TabBarOAR.js selecTabName=", selecTabName);
  } else {
    log && console.log("TabBarOAR.js selecTabName=", selecTabName);
    log && console.log("TabBarOAR.js No match to URL param so leaving selectedTab=", selecTabName);
  }

  const oarTabs = ["Overview", "Advice", "Resources", "Clinical Pearls"];
  const onPediatrics = locn.branch === 3 ? true : false;
  const numTabs = onPediatrics ? 4 : 3;

  const tabWidthAdjRatio = (winWidth - 2 * marginOuter) / (720 - 2 * marginOuter);
  const widA = onPediatrics ? 100 : 180;
  const widB = onPediatrics ? 100 : 180;
  const widC = onPediatrics ? 125 : 185;

  const tabWidth = winWidth < 510 ? widA * tabWidthAdjRatio : winWidth < 720 ? widB * tabWidthAdjRatio : widC;
  const tabGap = winWidth < 510 ? 14 * tabWidthAdjRatio : winWidth < 720 ? 16 * tabWidthAdjRatio : 19;
  const tabTall =
    winWidth < 510
      ? onPediatrics
        ? 50
        : 55
      : winWidth < 720
      ? onPediatrics
        ? 58
        : 63
      : winWidth < 1024
      ? onPediatrics
        ? 65
        : 72
      : 72;
  log2 && console.log("TabBarOAR.js tabWidthAdjRatio=", tabWidthAdjRatio);
  log2 && console.log("TabBarOAR.js tabWidth=", tabWidth);

  return (
    <div className="flex flex-row relative">
      {oarTabs.map((currTabName, index) => {
        const isSelected = oarTabs[index] === selecTabName ? true : false;
        log && console.log("TabBarOAR.js index=", index, "currTabName=", currTabName, ", selected=", isSelected);

        return (
          <div key={index}>
            {index < numTabs && (
              <div className="flex">
                <button // rounded corner frame
                  className={`pt-2 mxs:pt-2.5  px-2 mxs:px-3 sm:px-4 md:px-6  flex justify-center  text-left whitespace-nowrap
                              ${isSelected ? "text-blue-main bg-gray-light" : "text-blue-pale bg-white"}
                              ${onPediatrics ? "oarTabClassPedi border-2" : "oarTabClassBase border-3"}
                              mxs:border-3 sm:border-4  border-b-0 border-solid border-gray-light 
                              rounded-t-xl mxs:rounded-t-2xl sm:rounded-t-3xl  cursor-pointer 
                              `}
                  style={{ minWidth: tabWidth, height: tabTall }}
                  onClick={() => changeOARTab(currTabName, onPediatrics)}
                >
                  {currTabName === "Clinical Pearls" && winWidth < 720 ? "Pearls" : currTabName}
                </button>
                <div className="h-12" style={{ width: `${tabGap}px` }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabBarOAR;
