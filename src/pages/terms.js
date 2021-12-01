import React, { useEffect } from "react";

import { useMyContext } from "../context/Context";
import Layout from "../components/0nav&footer/NavFooterLayout";
import PearlsEtc from "../components/3aboutEtc/PearlsEtc";
import termsContent from "../content/termsContent";

const Terms = props => {
  const { location } = props;
  const { setWinWidth, setWinHeight, log, log2 } = useMyContext();

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    }
  }, [setWinWidth, setWinHeight]);

  const path = location.pathname;
  log && console.log("terms.js runs. path=", path);
  log2 && console.log("terms.js runs. termsContent=", termsContent);

  return <PearlsEtc pageTitle="Terms &amp; Notices" path={path} contentArray={termsContent} />;
};

Terms.Layout = Layout;

export default Terms;
