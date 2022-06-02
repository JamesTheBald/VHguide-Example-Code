import React from "react";
import { useMatch } from "@reach/router";

import { useMyContext } from "../../context/Context";
import changeOARTab from "../../functions/changeOARTab";

const TabBarOAR = () => {
  const { winWidth, marginOuter, locn, log, log2 } = useMyContext();

  false && console.log(log && log2);
  const w = winWidth;
  log2 && console.log("TabBarOAR.js runs. winWidth=", w);
  log2 && console.log("TabBarOAR.js runs. locn=", locn);

  // To convert to title case, per KevBot: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  const titleCase = str => {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  };

  // Get tab name from URL
  const tabMatchDetails = useMatch("/details/:selected");
  const tabMatch = tabMatchDetails ? tabMatchDetails : { selected: "advice" };
  log2 && console.log("TabBarOAR.js tabMatch=", tabMatch);

  let selecTabName = "Overview";
  const OARtabs = ["overview", "advice", "resources", "pearls"];

  if (tabMatch?.selected && OARtabs.includes(tabMatch.selected)) {
    // Above line is to guard against bad URLs
    selecTabName = tabMatch.selected;
    selecTabName = titleCase(selecTabName);
    if (selecTabName === "Pearls") selecTabName = "Clinical Pearls";
    log2 && console.log("TabBarOAR.js selecTabName=", selecTabName);
  } else {
    log2 && console.log("TabBarOAR.js selecTabName=", selecTabName);
    log2 && console.log("TabBarOAR.js No match to URL param so leaving selectedTab=", selecTabName);
  }

  const oarTabs = ["Overview", "Advice", "Resources", "Clinical Pearls"];
  const hasPearlsTab = locn.branch >= 3 || (locn.branch === 0 && locn.subtopic === 3) ? true : false;
  const numTabs = hasPearlsTab ? 4 : 3;

  const tabWidthAdjRatio = (w - 2 * marginOuter) / (720 - 2 * marginOuter);
  // const widA = hasPearlsTab ? 100 : 180;
  // const widB = hasPearlsTab ? 100 : 180;
  // const widC = hasPearlsTab ? 125 : 185;
  // const tabWidth = w < 510 ? widA * tabWidthAdjRatio : w < 720 ? widB * tabWidthAdjRatio : widC;
  // log && console.log("TabBarOAR.js tabWidth=", tabWidth);

  const tabGap = w < 510 ? 14 * tabWidthAdjRatio : w < 720 ? 16 * tabWidthAdjRatio : 19;
  const tabTall =
    w < 510 ? (hasPearlsTab ? 50 : 55) : w < 720 ? (hasPearlsTab ? 58 : 63) : w < 1024 ? (hasPearlsTab ? 65 : 72) : 72;
  // log && console.log("TabBarOAR.js tabWidthAdjRatio=", tabWidthAdjRatio);

  return (
    <div className="flex flex-row relative">
      {oarTabs.map((currTabName, index) => {
        const isSelected = oarTabs[index] === selecTabName ? true : false;
        log && console.log("TabBarOAR.js index=", index, "currTabName=", currTabName, ", selected=", isSelected);

        const onPediatrics = locn.branch === 3 ? true : false;

        return (
          <div key={index}>
            {index < numTabs && (
              <div className="flex">
                <button
                  // Tab formatting - all except height
                  className={`
                    ${hasPearlsTab ? "px-1  fsm:w-44 md:w-50  oarTabPedi border-2" : "px-2  oarTabBase border-3"}
                    mxs:pt-2.5  axs:px-2 mxs:px-2.5 qsm:px-3 sm:px-4 md:px-6  pt-2  flex justify-center  text-left whitespace-nowrap
                    ${isSelected ? "text-blue-main bg-gray-light" : "text-blue-pale bg-white"}
                    mxs:border-3 sm:border-4  border-b-0 border-solid border-gray-light 
                    rounded-t-xl mxs:rounded-t-2xl sm:rounded-t-3xl  cursor-pointer`}
                  style={{ height: tabTall }}
                  onClick={() => changeOARTab(currTabName, onPediatrics)}
                >
                  {currTabName}
                </button>
                <div className="h-12" style={{ width: tabGap }} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabBarOAR;
