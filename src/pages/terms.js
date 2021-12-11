import React, { useEffect } from "react";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import TermsPanels from "../components/3aboutEtc/TermsPanels";

const Terms = props => {
  // const { location } = props;
  const { setWinWidth, setWinHeight, log, log2 } = useMyContext();

  false && console.log(log, log2);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  // const path = location.pathname;
  // log && console.log("terms.js runs. path=", path);

  return <TermsPanels pageTitle="Terms &amp; Notices" />;
};

Terms.Layout = Layout;

export default Terms;
