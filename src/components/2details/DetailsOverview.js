import React from "react";
import { Link } from "gatsby";

import { useMyContext } from "../../context/Context";
import { contentPersonas } from "../../content/contentPersonas";

const DetailsOverview = (props) => {
  const { contentID } = props;
  const { winWidth, locn, setNavBarOpen, log } = useMyContext();;

  log && console.log("DetailsOverview.js runs. locn=", locn);


  // Validation
  const overview = contentPersonas[contentID]?.overview;
  const template = { image: "", content: ["", "", ""] };
  let theySay = overview?.theySay;
  let thingsToConsider = overview?.thingsToConsider;
  let takeHome = overview?.takeHome;
  theySay = theySay?.content[0] ? theySay : template;
  thingsToConsider = thingsToConsider?.content[0] ? thingsToConsider : template;
  takeHome = takeHome?.content[0] ? takeHome : template;

  // const changeTabToAdvice = () => {
  //   history.push("/details/advice/eaase");
  //   setNavBarOpen(false);
  // };

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
            <img src={theySay.image} alt="Icon image" className={imageClass} />
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
            <img src={thingsToConsider.image} alt="Icon image" className={imageClass} />
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
            <img src={takeHome.image} alt="Icon image" className={imageClass} />
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
