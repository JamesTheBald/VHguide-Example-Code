import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { useMyContext } from "../../context/Context";

const TabBarOAR = () => {
  const { winWidth, setNavBarOpen, setWinWidth, setWinHeight, log } = useMyContext();

  const tabWidthAdjRatio = winWidth / 720;
  const tabWidth = winWidth < 720 ? 185 * tabWidthAdjRatio : 185;
  const tabGap = winWidth < 720 ? 25 * tabWidthAdjRatio : 25;
  const tabTall = winWidth < 510 ? 92 : 100;
  const titleTopMargin = 12;

  const capitalizeFirstLetter = (str) => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }; // from https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

  const oarTabs = ["overview", "advice", "resources"];
  const history = useHistory();

  const changeTab = (currTabName) => {
    if (currTabName === "advice") {
      history.push("/details/advice/eaase");
    } else {
      history.push("/details/" + currTabName);
    }
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
    setNavBarOpen(false);
  };

  // Get tab name from URL route, but guard against bad URLs
  const tabMatch = useRouteMatch("/details/:tabName");
  let tabName = "";
  if (tabMatch?.params && oarTabs.includes(tabMatch.params.tabName)) {
    tabName = tabMatch.params.tabName;
    log && console.log("TabBarOAR.js OAR tabName=", tabName);
  } else {
    tabName = "overview";
    log && console.log("TabBarOAR.js No match to URL param so setting tabName=", tabName);
  }

  return (
    <div>
      <div className="flex flex-row relative">
        {oarTabs.map((currTabName, index) => {
          return (
            <div key={index}>
              <div className="flex">
                <div
                  name="rounded corner frame"
                  className={`flex justify-center  border-b-0 border-gray-light rounded-t-3xl  cursor-pointer
                           ${oarTabs[index] === tabName ? "bg-gray-light" : "bg-white"}`}
                  style={{
                    borderWidth: winWidth < 510 ? 3 : 4, // Need thinner at small screens
                    width: tabWidth,
                    height: tabTall,
                  }}
                  onClick={() => changeTab(currTabName)}
                >
                  <div
                    name="text locating box"
                    className={`absolute  text-18 mxs:text-22 sm:text-25 font-serif font-semibold tracking-0.5 
                              ${oarTabs[index] === tabName ? "text-blue-main" : "text-blue-pale"}`}
                    style={{ top: titleTopMargin }}
                  >
                    {capitalizeFirstLetter(currTabName)}
                  </div>
                </div>
                <div className="h-12" style={{ width: `${tabGap}px` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabBarOAR;
