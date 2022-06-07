import React from "react";
// import React, { useEffect } from "react";
import { Link } from "gatsby";

import { useMyContext } from "../../context/Context";
import { contentPersonasBI } from "../../content/contentPersonasBI";
import PediatricsOverviewTheySayBI from "../../content/PediatricsOverviewTheySayBI";
import ReproductiveOverviewTheySayBI from "../../content/ReproductiveOverviewTheySayBI";
import MedExemptOverviewTheySayBI from "./MedExemptOverviewTheySayBI";

const DetailsOverview = props => {
  const { contentID } = props;
  const { winWidth, queryData, locn, lang, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  let overview = contentPersonasBI[contentID]?.overview;
  const theySay = overview?.theySay;
  const thingsToConsider = overview?.thingsToConsider;
  const takeHome = overview?.takeHome;
  const pplIcons = queryData.current.pplIcons.edges;

  log && console.log("DetailsOverview.js runs. contentID=", contentID, " & overview=", overview);
  log && console.log("DetailsOverview.js locn.branch=", locn.branch);
  log && console.log("DetailsOverview.js theySay=", theySay);
  log && console.log("DetailsOverview.js thingsToConsider=", thingsToConsider);
  log && console.log("DetailsOverview.js takeHome=", takeHome);
  log && console.log("DetailsOverview.js pplIcons=", pplIcons);

  const blockClass = "flex flex-col w-full  baseFont text-blue-black";
  const imageClass = "w-12 mxs:w-15 sm:w-20";

  const linkDestn = locn.branch === 3 ? "/details/advice/pediatrics" : "/details/advice/eaase";

  return (
    <div
      className="pt-3 sm:pt-2 md:pt-0  w-full h-full  flex flex-col  justify-start relative"
      // Primary panel padding is set on DetailsLayout.js by const panelPadding
    >
      <main className="grid grid-cols-1  lg:grid-cols-3 grid-flow-row gap-x-12 gap-y-6 mxs:gap-y-10  justify-items-center">
        <section className={blockClass}>
          {/* First Panel */}
          {pplIcons.map((item, index) => {
            return (
              item.node.relativePath === theySay.image && (
                <img key={index} src={item.node.publicURL} alt="Group of People" className={imageClass} />
              )
            );
          })}
          {contentID === "Undifferentiated" ? (
            <>
              <h3 className="listTitleClass mb-2">
                {lang === "EN" ? "Considerations for Vaccine Hesitant Patients" : ""}
              </h3>
              {theySay.content[lang].map((currItem, index) => (
                <div key={index} className="pb-4">
                  {currItem}
                </div>
              ))}
            </>
          ) : contentID === "Pediatrics" ? (
            <PediatricsOverviewTheySayBI />
          ) : contentID === "ReproductiveEffects" ? (
            <ReproductiveOverviewTheySayBI />
          ) : contentID === "MedicalExemptions" ? (
            <MedExemptOverviewTheySayBI />
          ) : (
            <>
              <h3 className="listTitleClass mb-1">{lang === "EN" ? "People with this hesitancy type say" : ""}</h3>
              <ul className="pl-5 listClass2">
                {theySay.content[lang].map((currItem, index) => (
                  <li key={index} className="pb-4 pl-1">
                    {currItem}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>

        {/* Second Panel */}
        <section className={blockClass}>
          {pplIcons.map((item, index) => {
            return (
              item.node.relativePath === thingsToConsider.image && (
                <img key={index} src={item.node.publicURL} alt="Doctor Icon" className={imageClass} />
              )
            );
          })}

          <h3 className="listTitleClass mb-1">{lang === "EN" ? "Things to Consider" : ""}</h3>

          {contentID === "Pediatrics" ? (
            <>{thingsToConsider.content[lang]}</>
          ) : (
            <ul className="pl-5  listClass2">
              {thingsToConsider.content[lang].map((currItem, index) => (
                <li key={index} className="pb-4 pl-1">
                  {currItem}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Third Panel */}
        <section className={blockClass}>
          {pplIcons.map((item, index) => {
            return (
              item.node.relativePath === takeHome.image && (
                <img key={index} src={item.node.publicURL} alt="Notepad" className={imageClass} />
              )
            );
          })}

          <h3 className="listTitleClass mb-1">{lang === "EN" ? "Take Home" : ""}</h3>
          {takeHome.content[lang].map((currItem, index) => (
            <div key={index} className="mt-2  baseFont text-blue-black">
              {currItem}
            </div>
          ))}
        </section>
      </main>
      <Link
        to={linkDestn}
        className={`mt-6 mxs:mt-10  mb-5 mr-auto  pt-2.5 pb-2  px-4  ${
          contentID === "Pediatrics" ? "lg:-mt-8" : "lg:mt-4"
        }  smFont orangeLink linkInvPill`}
      >
        {lang === "EN"
          ? winWidth < 450
            ? "How to Start the Conversation"
            : "Advice on Starting the Conversation"
          : winWidth < 450
          ? ""
          : ""}
        {/* Add French translation for button */}
      </Link>
    </div>
  );
};

export default DetailsOverview;
