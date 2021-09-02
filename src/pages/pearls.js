import React from "react";

import NavFooterLayout from "../components/0nav&footer/NavFooterLayout";
import AboutEtc from "../components/3aboutEtc/AboutEtc";
import { pearlsContent } from "../content/pearlsContent";

const Terms = () => {
  return (
    <div>
      <NavFooterLayout>
        <AboutEtc pageTitle="Clinical Pearls" contentArray={pearlsContent} />
      </NavFooterLayout>
    </div>
  );
};

export default Terms;
