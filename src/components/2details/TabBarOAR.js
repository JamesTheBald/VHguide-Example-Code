import React from "react";
import { useMatch } from "@reach/router";

import { useMyContext } from "../../context/Context";
import changeOARTab from "../../functions/changeOARTab";

const TabBarOAR = () => {
  const { winWidth, marginOuter, locn, lang, log, log2 } = useMyContext();

  false && console.log(log && log2);
  const w = winWidth;

  // Get tab name from URL
  const tabMatchDetails = useMatch("/details/:selected");
  const tabMatchAdvice = useMatch("/details/advice/:selected");
  log2 && console.log("TabBarOAR.js tabMatchDetails=", tabMatchDetails);
  log2 && console.log("TabBarOAR.js tabMatchAdvice=", tabMatchAdvice);
  let tabFromURL = "overview";
  if (tabMatchDetails) {
    tabFromURL = tabMatchDetails.selected;
  } else if (tabMatchAdvice) {
    tabFromURL = "advice";
  }
  log && console.log("TabBarOAR.js Initially tabFromURL=", tabFromURL);

  // Check that tab name from URL is on the list of legit tab names, if not default to 'overview'
  const OARtabList = ["overview", "advice", "resources", "pearls"];
  if (!OARtabList.includes(tabFromURL)) {
    tabFromURL = "overview";
    log && console.log("TabBarOAR.js No match of tabFromURL to OARtabList so setting tabFromURL=", tabFromURL);
  }

  // Flags to display 'Clinical Pearls' tab on Pediatrics, Med Exemptions and Pregnancy/Fertility pages
  const hasPearlsTab = locn.branch >= 3 || (locn.branch === 0 && locn.subtopic === 3) ? true : false;
  const numTabs = hasPearlsTab ? 4 : 3;
  const onPediatrics = locn.branch === 3 ? true : false;

  // Formatting
  const tabWidthAdjRatio = (w - 2 * marginOuter) / (720 - 2 * marginOuter);
  const tabGap = w < 720 ? 14 * tabWidthAdjRatio : 19;
  const tabTall =
    w < 510 ? (hasPearlsTab ? 50 : 55) : w < 720 ? (hasPearlsTab ? 58 : 63) : w < 1024 ? (hasPearlsTab ? 65 : 72) : 72;

  const oarTabNames = [
    { key: "overview", EN: "Overview", FR: "Aperçu" },
    { key: "advice", EN: "Advice", FR: "Conseils" },
    { key: "resources", EN: "Resources", FR: "Ressources" },
    { key: "pearls", EN: "Clinical Pearls", FR: "Perles cliniques" },
  ];

  return (
    <div className="flex flex-row relative">
      {oarTabNames.map((currTabNames, index) => {
        const isSelected = currTabNames.key === tabFromURL;
        log2 && console.log("TabBarOAR.js index=", index, "currTabName=", currTabNames[lang], ", selected=", isSelected);

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
                  onClick={() => changeOARTab(currTabNames, onPediatrics)} // check this
                >
                  {currTabNames[lang]}
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
