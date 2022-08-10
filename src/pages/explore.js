import React, { useEffect } from "react";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import PillsAndTrees from "../components/1home&explore/PillsAndTrees";

const Explore = () => {
  const { setWinWidth, setWinHeight, lang, log } = useMyContext();

  log && console.log("");
  log && console.log("Explore.js runs.");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  return (
    <main className="stdMargins w-full">
      <div name="spacer to prevent top margin collapse" className="h-18" />
      <h1
        className="mb-5 sm:mb-8 md:mb-12 xl:mb-14  titleFont text-28 mxs:text-40 sm:text-50
                       tracking-0.6 mxs:tracking-0.8 sm:tracking-1 text-blue-main"
      >
        {lang === "EN" ? <div>Hesitancy Types</div> : <div>Types d’hésitation</div>}
      </h1>

      <PillsAndTrees />

      <div className="h-10" />
    </main>
  );
};

Explore.Layout = Layout;

export default Explore;
