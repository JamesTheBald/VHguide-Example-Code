import React from "react";
import { FiExternalLink } from "react-icons/fi";

import { useMyContext } from "../../context/Context";
import DisplayGatsbyDynImage from "../4general/DisplayGatsbyDynImage";
import featuredOnContentBI from "../../content/featuredOnContentBI";

const CoverageWebinarsBI = ({ className }) => {
  const { queryData, lang, log2 } = useMyContext();

  const webinarShots = queryData.current.webinarShots.edges;
  log2 && console.log("CoverageWebinars.js webinarShots=", webinarShots);

  return (
    <div className={className}>
      {featuredOnContentBI.webinars.map((currCov, index) => {

        return (
          <div key={index}>
            <a
              className="mb-4 w-full grid justify-start items-center  cursor-pointer hoverRevealTrigger"
              style={{ gridTemplateAreas: "area1" }}
              href={currCov.URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <DisplayGatsbyDynImage
                queryArray={webinarShots}
                fileName={currCov.snapshot}
                altText="Video snapshot / Instantané vidéo"
                wrapClass=""
                wrapStyle={{ gridArea: "area1" }}
                // imgClass="object-contain"
                // layout="CONSTRAINED"
              />

              <div
                className="p-4 w-40  hiddenTillHover z-50 justify-self-center
                           baseFont bg-white rounded-2xl shadowGray opacity-80  text-center"
                style={{ gridArea: "area1" }}
              >
                {lang === "EN" ? (
                  <>Click to watch on external site</>
                ) : (
                  <>Cliquer ici pour regarder le webinaire sur un site externe</>
                )}
              </div>
            </a>

            <div className="pb-2 font-semibold">{currCov.source[lang]}</div>
            <div className="pb-2 font-semibold">{currCov.title[lang]}</div>
            <div className="pb-2 italic">{currCov.date[lang]}</div>
            <a
              className="w-11/12 sm:w-5/6 md:w-90 lg:w-100  flex flex-col justify-center"
              href={currCov.URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="italic orangeUnderline">
                {currCov.linkText[lang]}
                <FiExternalLink className="pl-1.5 inline text-yellow-darkish" size={24} />
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CoverageWebinarsBI;

// const WatchOnYoutubePopup = (props) => {
//   const { text } = props;
//   return (
//     // Note: need to put Tailwind class 'relative' on a suitably wide parent element for this to size & position properly
//     <span className="hoverRevealTrigger">
//       <div
//         className="hiddenTillHover absolute  sm:left-10 md:left-1/4  z-50
//                p-7  baseFont bg-white rounded-2xl shadowGray"
//         //  above class had "-translate-x-1/2" but this doesn't do anything with "transform" utility
//         style={{ bottom: "100%" }}
//       >
//         <div>{text}</div>
//       </div>
//     </span>
//   );
// };
