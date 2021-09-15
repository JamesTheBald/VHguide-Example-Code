import React from "react";
import { useMyContext } from "../../context/Context";
import AdviceTabNavBarName from "./AdviceTabNavBarName";

const AdviceTabNavBar = () => {
  const { log, log2 } = useMyContext();

  const adviceTabs = ["engage", "affirm", "ask", "evoke"];
  log && console.log("AdviceTabNavBar.js runs.")

  return (
    <div className="sm:-mb-6 md:mb-0">
      <div className="w-full h-6 md:h-8 lg:h-10" />
      <div className="w-full bg-blue-pale rounded-full" style={{height: 3}} />

      <div className="mb-10 mxs:mb-12  flex">
        {adviceTabs.map((currTab, tabNum) => {
          log2 && console.log("AdviceTabNavBar.js currTab=", currTab);
          return (
            <div key={tabNum} className="cursor-pointer">
              <AdviceTabNavBarName currTab={currTab} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdviceTabNavBar;
