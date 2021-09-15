import React from "react";
import { useMatch } from "@reach/router";
import { navigate } from "gatsby";
import { useMyContext } from "../../context/Context";

const TabBarOAR = () => {
  // const { location } = props;
  const { winWidth, setNavBarOpen, log, log2 } = useMyContext();

  const tabWidthAdjRatio = winWidth / 720;
  const tabWidth = winWidth < 720 ? 185 * tabWidthAdjRatio : 185;
  const tabGap = winWidth < 720 ? 25 * tabWidthAdjRatio : 25;
  const tabTall = winWidth < 510 ? 92 : 100;
  const titleTopMargin = 12;

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
    setNavBarOpen(false);
  };

  const url = typeof window !== "undefined" ? new URL(window.location.href) : "";
  let urlAsArray = url.pathname.split("/");
  const lastSegment = urlAsArray.pop();
  const secondLastSegment = urlAsArray.pop();

  log2 && console.log("TabBarOAR.js url=", url);
  log2 && console.log("TabBarOAR.js lastSegment=", lastSegment);
  log2 && console.log("TabBarOAR.js secondLastSegment=", secondLastSegment);

  const oarTabs = ["overview", "advice", "resources"];

  let tabName;
  if (lastSegment === "overview" || lastSegment === "resources") {
    tabName = lastSegment;
  } else if (secondLastSegment === "advice") {
    tabName = "advice";
  } else {
    tabName = "overview";
    log && console.log("TabBarOAR.js No match to URL param so setting tabName=", tabName);
  }

  log && console.log("TabBarOAR.js OAR tabName=", tabName);

  return (
    <div>
      <div className="flex flex-row relative">
        {oarTabs.map((currTabName, index) => {
          return (
            <div key={index}>
              <div className="flex">
                <button
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
