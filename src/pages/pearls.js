import React from "react";

import Layout from "../components/0nav&footer/NavFooterLayout";
import AboutEtc from "../components/3aboutEtc/AboutEtc";
import { pearlsContent } from "../content/pearlsContent";

const Pearls = () => {
  return <AboutEtc pageTitle="Clinical Pearls" contentArray={pearlsContent} />;
};

Pearls.Layout = Layout;

export default Pearls;
