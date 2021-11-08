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

  const blockClass = "flex flex-col w-full";
  const imageClass = "w-12 mxs:w-15 sm:w-20";
  const titleClass = "mt-4 sm:mt-7  font-semibold text-16 mxs:text-20 tracking-0.3 mxs:tracking-0.4";
  const listClass = "ml-6 sm:ml-10 mt-2  baseFont text-blue-black  list-disc";

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
              <div>
                <h3 className={titleClass}>Considerations for vaccine hesitant patients:</h3>
                <div className="mt-2  baseFont text-blue-black">
                  {theySay.content.map((currItem, index) => (
                    <div key={index} className="pb-4 baseFont">
                      {currItem}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className={titleClass}>People with this hesitancy type say...</h3>
                <ul className={listClass}>
                  {theySay.content.map((currItem, index) => (
                    <li key={index} className="pb-4">
                      {currItem}
                    </li>
                  ))}
                </ul>
              </div>
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
            <ul className={listClass}>
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

// const theySay = useRef();
// const thingsToConsider = useRef();
// const takeHome = useRef();

// const establishContent = () => {
//   log && console.log("DetailsOverview.js establishContent() Check overview=", overview);

// without useRefs
// theySay = overview?.theySay
// thingsToConsider = overview?.thingsToConsider
// takeHome =  overview?.takeHome
// theySay = overview?.theySay?.content[0] ? overview.theySay : template;
// thingsToConsider = overview?.thingsToConsider?.content[0] ? overview.thingsToConsider : template;
// takeHome =  overview?.takeHome?.content[0] ? overview.takeHome : template;
// log && console.log("DetailsOverview.js establishContent theySay=", theySay);
// log && console.log("DetailsOverview.js establishContent thingsToConsider=", thingsToConsider);
// log && console.log("DetailsOverview.js establishContent takeHome=", takeHome);

// with useRefs
// theySay = overview.theySay;
// thingsToConsider = overview.thingsToConsider;
// takeHome = overview.takeHome;
// theySay.current = overview.theySay;
// thingsToConsider.current = overview.thingsToConsider;
// takeHome.current = overview.takeHome;

// theySay.current = overview?.theySay?.content[0] ? overview.theySay : template;
// thingsToConsider.current = overview?.thingsToConsider?.content[0] ? overview.thingsToConsider : template;
// takeHome.current = overview?.takeHome?.content[0] ? overview.takeHome : template;
// log && console.log("DetailsOverview.js establishContent theySay.current=", theySay.current);
// log && console.log("DetailsOverview.js establishContent thingsToConsider.current=", thingsToConsider.current);
// log && console.log("DetailsOverview.js establishContent takeHome.current=", takeHome.current);
// };

// if (overview) {
//   establishContent();
// }

// useEffect(() => {
//   const timer = setTimeout(() => {
//     console.log('DetailsOverview.js useEffect runs')
//     establishContent()
//   }, 200);
//   return () => clearTimeout(timer);
// }, []);
