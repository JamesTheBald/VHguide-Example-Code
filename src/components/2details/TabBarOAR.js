import React from "react";
// import { useMatch } from "@reach/router";
import { navigate } from "gatsby";
import { useMyContext } from "../../context/Context";

const TabBarOAR = () => {
  const { winWidth, marginOuter, log, log2 } = useMyContext();

  log2 && console.log("");
  log && console.log("TabBarOAR.js runs. winWidth=", winWidth);

  const tabWidthAdjRatio = (winWidth - 2 * marginOuter) / (720 - 2 * marginOuter);
  const tabWidth = winWidth < 510 ? 200 * tabWidthAdjRatio : winWidth < 720 ? 180 * tabWidthAdjRatio : 185;
  const tabGap = winWidth < 720 ? 18 * tabWidthAdjRatio : 22;
  const tabTall = winWidth < 510 ? 92 : 100;
  const titleTopMargin = 12;

  log && console.log("TabBarOAR.js tabWidthAdjRatio=", tabWidthAdjRatio);
  log && console.log("TabBarOAR.js tabWidth=", tabWidth);

  const capitalizeFirstLetter = str => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }; // from https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

  const changeTab = selectedTabName => {
    if (selectedTabName === "advice") {
      navigate("/details/advice/eaase");
    } else {
      navigate("/details/" + selectedTabName);
    }
  };

  const url = typeof window !== "undefined" ? new URL(window.location.href) : "";
  let urlAsArray = url.pathname.split("/");
  const lastSegment = urlAsArray.pop();
  const secondLastSegment = urlAsArray.pop();

  log2 && console.log("TabBarOAR.js url=", url);
  log2 && console.log("TabBarOAR.js lastSegment=", lastSegment);
  log2 && console.log("TabBarOAR.js secondLastSegment=", secondLastSegment);

  let tabName;
  if (lastSegment === "overview" || lastSegment === "resources") {
    tabName = lastSegment;
  } else if (secondLastSegment === "advice") {
    tabName = "advice";
  } else {
    tabName = "overview";
    log && console.log("TabBarOAR.js No match to URL param so setting tabName=", tabName);
  }
  log2 && console.log("TabBarOAR.js OAR tabName=", tabName);

  const oarTabs = ["overview", "advice", "resources"];

  return (
    <div>
      <div className="flex flex-row relative">
        {oarTabs.map((currTabName, index) => {
          return (
            <div key={index}>
              <div className="flex">
                <button
                  name="rounded corner frame"
                  className={`flex justify-center  border-b-0 border-solid border-gray-light rounded-t-3xl  cursor-pointer 
                              ${oarTabs[index] === tabName ? "bg-gray-light" : "bg-white"}`}
                  style={{
                    borderWidth: winWidth < 510 ? 3 : 4, // Need thinner at small screens
                    width: tabWidth,
                    height: tabTall,
                  }}
                  onClick={() => changeTab(currTabName)}
                >
                  <h2
                    name="text locating box"
                    className={`absolute  text-18 mxs:text-22 sm:text-25 font-serif font-semibold tracking-0.5 
                                ${oarTabs[index] === tabName ? "text-blue-main" : "text-blue-pale"}`}
                    style={{ top: titleTopMargin }}
                  >
                    {capitalizeFirstLetter(currTabName)}
                  </h2>
                </button>
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
