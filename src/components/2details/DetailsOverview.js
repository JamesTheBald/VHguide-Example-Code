import React from "react";
import { Link } from "gatsby";

import { useMyContext } from "../../context/Context";
import { contentPersonas } from "../../content/contentPersonas";

const DetailsOverview = props => {
  const { contentID } = props;
  const { winWidth, queryData, log, log2 } = useMyContext();

  let overview = contentPersonas[contentID]?.overview;
  log && console.log("DetailsOverview.js runs. contentID=", contentID, " & overview=", overview);

  const pplIcons = queryData.current.pplIcons.edges;
  log2 && console.log("DetailsOverview.js pplIcons=", pplIcons);

  const theySay = overview?.theySay;
  const thingsToConsider = overview?.thingsToConsider;
  const takeHome = overview?.takeHome;

  const blockClass = "flex flex-col w-full  baseFont text-blue-black";
  const imageClass = "w-12 mxs:w-15 sm:w-20";
  const titleClass = "mt-4 sm:mt-7  font-semibold text-blue-main  text-16 mxs:text-20 tracking-0.3 mxs:tracking-0.4";
  const listClass2 = "ml-6 sm:ml-10 mt-2  baseFont text-blue-black  list-disc";

  // if (typeof window !== `undefined`) {
  //   scroll.scrollToTop({ duration: 0 }); // scroll animation time in ms
  // }

  log2 && console.log("DetailsOverview.js theySay=", theySay);
  log2 && console.log("DetailsOverview.js thingsToConsider=", thingsToConsider);
  log2 && console.log("DetailsOverview.js takeHome=", takeHome);

  return (
    <>
      <div name="Bounding Container for positioning the link to advice page" className="w-full h-full relative">
        <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-x-12 gap-y-6 mxs:gap-y-10  justify-items-center">
          <section className={blockClass}>
            {pplIcons.map((item, index) => {
              return (
                item.node.relativePath === theySay.image && (
                  <img key={index} src={item.node.publicURL} alt="Group of People" className={imageClass} />
                )
              );
            })}

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
                {theySay.content.map((currItem, index) => (
                  <div key={index} className="pb-4">
                    {currItem}
                  </div>
                ))}
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

          <section className={blockClass}>
            {pplIcons.map((item, index) => {
              return (
                item.node.relativePath === thingsToConsider.image && (
                  <img key={index} src={item.node.publicURL} alt="Doctor Icon" className={imageClass} />
                )
              );
            })}

            <h3 className={titleClass}>Things to consider...</h3>
            <ul className={listClass2}>
              {thingsToConsider.content.map((currItem, index) => (
                <li key={index} className="pb-4">
                  {currItem}
                </li>
              ))}
            </ul>
          </section>

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
            <Link to="/details/advice/eaase" className="px-3 pt-1 mr-auto my-6  smFont orangeLink linkPill">
              {winWidth < 400 ? <>How to start the conversation</> : <>Advice on how to start the conversation</>}
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default DetailsOverview;
