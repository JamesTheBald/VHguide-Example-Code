import React from "react";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import PillsAndTrees from "../components/1home&explore/PillsAndTrees";

const Explore = () => {
  const { winWidth, showContactForm, noneSelected, setNoneSelected, log } = useMyContext();

  log && console.log("Explore.js runs.");

  const maxColWidth = 720;
  const marginOuter = winWidth < 510 ? 22 : winWidth < 720 ? 60 : winWidth < maxColWidth ? 75 : 100;

  return (
    <div className={showContactForm ? "fixed" : ""}>
      <div className="spacerFooter" style={{ marginLeft: marginOuter, marginRight: marginOuter, marginBottom: 1 }}>
        {/* marginBottom=1 in above style is to force scrollbar on, to be consistent with other pages */}

        <div name="spacer to prevent top margin collapse" className="h-16" />
        <h1 className="titleFont text-28 mxs:text-40 sm:text-50  tracking-0.6 mxs:tracking-0.8 sm:tracking-1 text-blue-main">
          Hesitancy Types
        </h1>
        <div className="mb-5 sm:mb-8 md:mb-9 xl:mb-12  text-14 mxs:text-20 sm:text-25 italic">My patient has...</div>

        <PillsAndTrees
          maxColWidth={maxColWidth}
          marginOuter={marginOuter}
          noneSelected={noneSelected}
          setNoneSelected={setNoneSelected}
        />

        <div className="h-10" />
      </div>
    </div>
  );
};

Explore.Layout = Layout;

export default Explore;
