import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FiExternalLink } from "react-icons/fi";

import { useMyContext } from "../../context/Context";
import DisplayGatsbyDynImage from "../4general/DisplayGatsbyDynImage";
import coverage from "../../content/featuredOnContent";

const CoverageWebinars_BI = ({ className }) => {
  const { queryData, lang, log2 } = useMyContext();

  const webinarShots = queryData.current.webinarShots.edges;
  log2 && console.log("CoverageWebinars.js webinarShots=", webinarShots);

  return (
    <div className={className}>
      {coverage.webinars.map(currCoverage => {
        const currCov = {
          ...currCoverage,
          source: lang === "EN" || !currCoverage.source_FR ? currCoverage.source_EN : currCoverage.source_FR,
          title: lang === "EN" || !currCoverage.title_FR ? currCoverage.title_EN : currCoverage.title_FR,
          date: lang === "EN" || !currCoverage.date_FR ? currCoverage.date_EN : currCoverage.date_FR,
          linkText: lang === "EN" || !currCoverage.linkText_FR ? currCoverage.linkText_EN : currCoverage.linkText_FR,
        };

        return (
          <div key={currCov.title}>
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

            <div className="pb-2 font-semibold">{currCov.source}</div>
            <div className="pb-2 font-semibold">{currCov.title}</div>
            {/* <div className="pb-2 italic">{currCov.date}</div> */}
            <a
              className="w-11/12 sm:w-5/6 md:w-90 lg:w-100  flex flex-col justify-center"
              href={currCov.URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="italic orangeUnderline">
                {currCov.linkText}
                <FiExternalLink className="pl-1.5 inline text-yellow-darkish" size={24} />
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CoverageWebinars_BI;

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
