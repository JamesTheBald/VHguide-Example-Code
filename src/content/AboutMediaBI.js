import React from "react";

import { useMyContext } from "../context/Context";
import CoverageGridListBI from "../components/3aboutEtc/CoverageGridListBI";
import CoverageWebinarsBI from "../components/3aboutEtc/CoverageWebinarsBI";

const AboutMediaBI = () => {
  const { lang } = useMyContext();

  const gridClass =
    "w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row " +
    // Need above line's trailing space or Tailwind class names merge (grid-flow-rowsm:gap-x-16)
    "sm:gap-x-16 lg:gap-x-20  gap-y-10 sm:gap-y-16 lg:gap-y-20  baseFont text-blue-black";

  return (
    <>
      <article className="relative z-10">
        <h1 id="credits" className="mt-9 mxs:mt-16 lg:mt-18 pb-5 sm:pb-8  titleFont titleBig  text-blue-main  z-30">
          {lang === "EN" ? <>Media Coverage</> : <>Couverture médiatique</>}
          {/* {lang === "EN" ? <></> : <></>} */}
        </h1>

        <h3 className="panelTitleClass pb-6">Publications</h3>
        <CoverageGridListBI type="publications" className={`pb-20 ${gridClass}`} />

        <h3 className="panelTitleClass pb-6">{lang === "EN" ? <>News Media</> : <>Médias d’information</>}</h3>
        <CoverageGridListBI type="newsmedia" className={`pb-20 ${gridClass}`} />

        <h3 className="panelTitleClass pb-6">{lang === "EN" ? <>Webinars</> : <>Webinaires</>}</h3>
        <CoverageWebinarsBI className={gridClass} />

        <div className="h-20" />
      </article>
    </>
  );
};

export default AboutMediaBI;
