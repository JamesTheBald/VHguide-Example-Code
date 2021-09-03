import React from "react";

import Layout from "../components/0nav&footer/NavFooterLayout";
import AboutEtc from "../components/3aboutEtc/AboutEtc";
import { noticesContent } from "../content/noticesContent";

const Terms = () => {
  return <AboutEtc pageTitle="Terms &amp; Notices" contentArray={noticesContent} />;
};

Terms.Layout = Layout;

export default Terms;
