import React from "react";
import { Link } from "gatsby";

import { useMyContext } from "../../context/Context";
import { contentPersonas } from "../../content/contentPersonas";

const DetailsOverview = props => {
  const { contentID } = props;
  const { winWidth, setNavBarOpen, log, log2 } = useMyContext();

  let overview = contentPersonas[contentID]?.overview;
  log && console.log("DetailsOverview.js runs. contentID=", contentID, " & overview=", overview);

  const theySay = overview?.theySay;
  const thingsToConsider = overview?.thingsToConsider;
  const takeHome = overview?.takeHome;
  log2 && console.log("DetailsOverview.js theySay=", theySay);
  log2 && console.log("DetailsOverview.js thingsToConsider=", thingsToConsider);
  log2 && console.log("DetailsOverview.js takeHome=", takeHome);

  const blockClass = "flex flex-col w-full";
  const imageClass = "w-12 mxs:w-15 sm:w-20";
  const titleClass = "mt-4 sm:mt-7  font-semibold text-16 mxs:text-20 tracking-0.3 mxs:tracking-0.4";
  const listClass = "ml-6 sm:ml-10 mt-2  baseFont text-blue-black  list-disc";

  // scroll.scrollToTop({ duration: 0 }); // scroll animation time in ms

  return (
    <>
      <div name="Bounding Container for positioning the link to advice page" className="w-full h-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-x-12 gap-y-6 mxs:gap-y-10  justify-items-center">
          <div className={blockClass}>
            <img src={theySay.image} alt="Icon" className={imageClass} />
            {contentID === "Undifferentiated" ? (
              <>
                <div className={titleClass}>Considerations for vaccine hesitant patients:</div>
                <div className="mt-2  baseFont text-blue-black">
                  {theySay.content.map((currItem, index) => (
                    <div key={index} className="pb-4 baseFont">
                      {currItem}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className={titleClass}>People with this hesitancy type say...</div>
                <ul className={listClass}>
                  {theySay.content.map((currItem, index) => (
                    <li key={index} className="pb-4">
                      {currItem}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className={blockClass}>
            <img src={thingsToConsider.image} alt="Icon" className={imageClass} />
            <div className={titleClass}>Things to consider...</div>
            <ul className={listClass}>
              {thingsToConsider.content.map((currItem, index) => (
                <li key={index} className="pb-4">
                  {currItem}
                </li>
              ))}
            </ul>
          </div>

          <div className={blockClass}>
            <img src={takeHome.image} alt="Icon" className={imageClass} />
            <div className={titleClass}>Take Home:</div>
            {takeHome.content.map((currItem, index) => (
              <div key={index} className="mt-2  baseFont text-blue-black">
                {currItem}
              </div>
            ))}
            <Link
              to="/details/advice/eaase"
              className="px-3 pt-1 mr-auto my-6  smFont orangeLink linkPill"
              onClick={() => setNavBarOpen(false)}
            >
              {winWidth < 400 ? <>How to start the conversation</> : <>Advice on how to start the conversation</>}
            </Link>
          </div>
        </div>
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