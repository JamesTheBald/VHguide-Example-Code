import React from "react";
// import React, { useEffect } from "react";
import { Link } from "gatsby";

import { useMyContext } from "../../context/Context";
import { contentPersonas } from "../../content/contentPersonas";

const DetailsOverview = props => {
  const { contentID } = props;
  // const { contentID, setContentID } = props;
  const { winWidth, queryData, locn, log, log2 } = useMyContext();

  0 && console.log(log, log2);
  let overview = contentPersonas[contentID]?.overview;
  const theySay = overview?.theySay;
  const thingsToConsider = overview?.thingsToConsider;
  const takeHome = overview?.takeHome;
  const pplIcons = queryData.current.pplIcons.edges;

  log && console.log("DetailsOverview.js runs. contentID=", contentID, " & overview=", overview);
  log2 && console.log("DetailsOverview.js theySay=", theySay);
  log2 && console.log("DetailsOverview.js thingsToConsider=", thingsToConsider);
  log2 && console.log("DetailsOverview.js takeHome=", takeHome);
  log2 && console.log("DetailsOverview.js pplIcons=", pplIcons);

  const blockClass = "flex flex-col w-full  baseFont text-blue-black";
  const imageClass = "w-12 mxs:w-15 sm:w-20";
  const titleClass = "mt-4 sm:mt-7  font-semibold text-blue-main  text-16 mxs:text-20 tracking-0.3 mxs:tracking-0.4";
  const listClass2 = "ml-6 sm:ml-10 mt-2  baseFont text-blue-black  list-disc";

  // useEffect(() => {
  //   setContentID(currID => {
  //     const newContentID = locn.branch === 3 ? "Pediatrics" : currID;
  //     log && console.log("DetailsOverview useEffect newContentID=", newContentID);
  //     return newContentID;
  //   });
  // }, [locn, setContentID, log]);

  const linkDestn = locn.branch === 3 ? "/details/advice/pediatrics" : "/details/advice/eaase";

  return (
    <div className="w-full h-full  flex flex-col  justify-start relative">
      <main className="grid grid-cols-1  lg:grid-cols-3 grid-flow-row gap-x-12 gap-y-6 mxs:gap-y-10  justify-items-center">
        <section className={blockClass}>
          {pplIcons.map((item, index) => {
            return (
              item.node.relativePath === theySay.image && (
                <img key={index} src={item.node.publicURL} alt="Group of People" className={imageClass} />
              )
            );
          })}
          {/* First Panel */}
          {contentID === "Undifferentiated" ? (
            <>
              <h3 className={`${titleClass} mb-2`}>Considerations for vaccine hesitant patients:</h3>
              {theySay.content.map((currItem, index) => (
                <div key={index} className="pb-4">
                  {currItem}
                </div>
              ))}
            </>
          ) : contentID === "Pediatrics" ? (
            <>
              <h3 className={titleClass}>Patients are saying they have concerns about...</h3>
              <ul className={listClass2}>
                {theySay.content.map((currItem, index) => (
                  <li key={index} className="pb-1">
                    {currItem}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h3 className={titleClass}>People with this hesitancy type say...</h3>
              <ul className={listClass2}>
                {theySay.content.map((currItem, index) => (
                  <li key={index} className="pb-4">
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

          <h3 className={titleClass}>Things to consider...</h3>

          {contentID === "Pediatrics" ? (
            <>{thingsToConsider.content}</>
          ) : (
            <ul className={listClass2}>
              {thingsToConsider.content.map((currItem, index) => (
                <li key={index} className="pb-4">
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

          <h3 className={titleClass}>Take Home:</h3>
          {takeHome.content.map((currItem, index) => (
            <div key={index} className="mt-2  baseFont text-blue-black">
              {currItem}
            </div>
          ))}
        </section>
      </main>
      <Link
        to={linkDestn}
        className={`mt-4 mxs:mt-6 ${
          contentID === "Pediatrics" ? "lg:-mt-8" : "lg:mt-4"
        }  mb-4 mr-auto  px-4 pt-1  smFont orangeLink linkPill`}
      >
        {winWidth < 450 ? <>How to start the conversation</> : <>Read advice on how to start the conversation</>}
      </Link>
    </div>
  );
};

export default DetailsOverview;
