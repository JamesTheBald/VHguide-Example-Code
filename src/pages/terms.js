import React from "react";

import Layout from "../components/0nav&footer/NavFooterLayout";
import AboutEtc from "../components/3aboutEtc/AboutEtc";
import { noticesContent } from "../content/noticesContent";

const Terms = (props) => {
  const { location } = props;

  const path = location.pathname;
  console.log("terms.js runs. path=", path);

  return <AboutEtc pageTitle="Terms &amp; Notices" path={path} contentArray={noticesContent} />;
};

Terms.Layout = Layout;

export default Terms;
