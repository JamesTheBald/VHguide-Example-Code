import React from "react";

import Layout from "../components/0nav&footer/NavFooterLayout";
import AboutEtc from "../components/3aboutEtc/AboutEtc";
import termsContent from "../content/termsContent";
import { useMyContext } from "../context/Context";

const Terms = props => {
  const { location } = props;
  const { log, log2 } = useMyContext();

  const path = location.pathname;
  log && console.log("terms.js runs. path=", path);
  log2 && console.log("terms.js runs. termsContent=", termsContent);

  return <AboutEtc pageTitle="Terms &amp; Notices" path={path} contentArray={termsContent} />;
};

Terms.Layout = Layout;

export default Terms;
