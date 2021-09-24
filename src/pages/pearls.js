import React from "react";

import Layout from "../components/0nav&footer/NavFooterLayout";
import AboutEtc from "../components/3aboutEtc/AboutEtc";
import { pearlsContent } from "../content/pearlsContent";

const Pearls = (props) => {
  const { location } = props;

  const path = location.pathname;
  console.log("pearls.js runs. path=", path);

  return <AboutEtc pageTitle="Clinical Pearls" path={path} contentArray={pearlsContent} />;
};

Pearls.Layout = Layout;

export default Pearls;
