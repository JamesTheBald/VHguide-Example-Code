import React, { useEffect } from "react";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import PillsAndTrees from "../components/1home&explore/PillsAndTrees";

const Explore = () => {
  const { setWinWidth, setWinHeight, showContactForm, log } = useMyContext();

  log && console.log("Explore.js runs.");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  const maxStackedWidth = 720;

  return (
    <div className={showContactForm ? "fixed" : ""}>
      <main className="stdMargins">
        <div name="spacer to prevent top margin collapse" className="h-16" />
        <h1
          className="mb-5 sm:mb-8 md:mb-9 xl:mb-12  titleFont text-28 mxs:text-40 sm:text-50
                       tracking-0.6 mxs:tracking-0.8 sm:tracking-1 text-blue-main"
        >
          Hesitancy Types
        </h1>
        {/* <h3 className="mb-5 sm:mb-8 md:mb-9 xl:mb-12  text-14 mxs:text-20 sm:text-25 italic">My patient has...</h3> */}

        <PillsAndTrees maxStackedWidth={maxStackedWidth} />

        <div className="h-10" />
      </main>
    </div>
  );
};

Explore.Layout = Layout;

export default Explore;
