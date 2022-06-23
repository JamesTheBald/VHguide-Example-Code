import React from "react";
import { useMyContext } from "../../context/Context";
import AdviceTabNavBarSection from "./AdviceTabNavBarSection";

const AdviceTabNavBar = () => {
  const { log, log2 } = useMyContext();

  0 && console.log(log, log2);
  const adviceTabs = ["engage", "affirm", "ask", "evoke"];
  log2 && console.log("AdviceTabNavBar.js runs.")

  return (
    <>
      <div className="mt-6 md:mt-8 lg:mt-10  w-full bg-blue-pale rounded-full" style={{height: 3}} />

      <div className="flex -mb-2">
        {adviceTabs.map((currTab, tabNum) => {
          log && console.log("AdviceTabNavBar.js currTab=", currTab);
          return (
            <div key={tabNum} className="cursor-pointer">
              <AdviceTabNavBarSection currTab={currTab} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdviceTabNavBar;
