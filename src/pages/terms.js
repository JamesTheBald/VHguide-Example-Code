import React, { useEffect } from "react";

import { useMyContext } from "../context/Context";
import Layout from "../components/0navAndFooter/NavFooterLayout";
import TermsPanels from "../components/3aboutEtc/TermsPanels";

const Terms = () => {
  const { setWinWidth, setWinHeight, log, log2 } = useMyContext();

  false && console.log(log, log2);
  log && console.log("");
  log && console.log("terms.js runs.");

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  return (
    <TermsPanels
      pageTitle={{
        EN: "Terms & Notices",
        FR: "Modalités et avis",
      }}
    />
  );
};

Terms.Layout = Layout;

export default Terms;
