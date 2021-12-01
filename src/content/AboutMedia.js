import React from "react";

import CoverageGridList from "../components/3aboutEtc/CoverageGridList";
import CoverageWebinars from "../components/3aboutEtc/CoverageWebinars";

const AboutMedia = () => {
  return (
    <>
      <article className="relative z-10">
        <h1 id="credits" className="mt-9 mxs:mt-16 lg:mt-18 pb-8  titleFont titleBig  text-blue-main  z-30">
          Media Coverage
        </h1>

        <h3 className="panelTitleClass">Publications</h3>
        <CoverageGridList type="publications" className="pb-20" />

        <h3 className="panelTitleClass">News Media</h3>
        <CoverageGridList type="newsmedia" className="pb-20" />

        <h3 className="panelTitleClass">Webinars</h3>
        <CoverageWebinars className="" />

        <div className="h-20" />
      </article>
    </>
  );
};

export default AboutMedia;
