import React, { useState } from "react";

import { useMyContext } from "../../context/Context";
import changeOARTab from "../../functions/changeOARTab";

const TabBarOAR = () => {
  const { winWidth, marginOuter, locn, log, log2 } = useMyContext();

  false && console.log(log && log2);
  log2 && console.log("TabBarOAR.js runs. winWidth=", winWidth);

  const [selectedTab, setSelectedTab] = useState("Overview");
  const oarTabs = ["Overview", "Advice", "Resources", "Clinical Pearls"];
  const onPediatrics = locn.branch === 3 ? true : false;
  const numTabs = onPediatrics ? 4 : 3;

  const tabWidthAdjRatio = (winWidth - 2 * marginOuter) / (720 - 2 * marginOuter);
  const widA = onPediatrics ? 100 : 180;
  const widB = onPediatrics ? 100 : 180;
  const widC = onPediatrics ? 125 : 185;

  const tabWidth = winWidth < 510 ? widA * tabWidthAdjRatio : winWidth < 720 ? widB * tabWidthAdjRatio : widC;
  const tabGap =
    winWidth < 510 ? 14 * tabWidthAdjRatio : winWidth < 720 ? 16 * tabWidthAdjRatio : 19;
  const tabTall =
    winWidth < 510 ? (onPediatrics ? 84 : 90) : winWidth < 720 ? (onPediatrics ? 92 : 100) : onPediatrics ? 100 : 100;
  log2 && console.log("TabBarOAR.js tabWidthAdjRatio=", tabWidthAdjRatio);
  log2 && console.log("TabBarOAR.js tabWidth=", tabWidth);

  return (
    <div className="flex flex-row relative">
      {oarTabs.map((currTabName, index) => {
        const selected = oarTabs[index] === selectedTab ? true : false;
        log2 && console.log("TabBarOAR.js index=", index, "currTabName=", currTabName, ", selected=", selected);

        return (
          <div key={index}>
            {index < numTabs && (
              <div className="flex">
                <button // rounded corner frame
                  className={`pt-2 mxs:pt-2.5  px-2 mxs:px-3 sm:px-4 md:px-6  flex justify-center  text-center whitespace-nowrap
                              ${selected ? "text-blue-main bg-gray-light" : "text-blue-pale bg-white"}
                              ${onPediatrics ? "oarTabClassPedi border-2" : "oarTabClassBase border-3"}
                              mxs:border-3 sm:border-4  border-b-0 border-solid border-gray-light 
                              rounded-t-xl mxs:rounded-t-2xl sm:rounded-t-3xl  cursor-pointer 
                              `}
                  style={{ minWidth: tabWidth, height: tabTall }}
                  onClick={() => changeOARTab(currTabName, onPediatrics, setSelectedTab)}
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
