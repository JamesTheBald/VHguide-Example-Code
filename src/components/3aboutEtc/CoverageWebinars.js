import React from "react";
import { FiExternalLink } from "react-icons/fi";

import coverage from "../../content/featuredOnContent";

const CoverageWebinars = ({ className }) => {
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

  return (
    <div
      className={`w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row  
                        sm:gap-x-16 lg:gap-x-20  gap-y-10 sm:gap-y-16 lg:gap-y-20  
                        baseFont text-blue-black  ${className}`}
    >
      {coverage.webinars.map((currCoverage, index) => {
        return (
          <div key={index} className="">
            <a
              className="mb-4  w-full grid justify-items-center items-center  cursor-pointer hoverRevealTrigger"
              style={{ gridTemplateAreas: "area1" }}
              href={currCoverage.URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={currCoverage.snapshot}
                alt="Video snapshot"
                className="object-contain"
                style={{ gridArea: "area1" }}
              />
              <div
                className="p-4 w-40  hiddenTillHover z-50
                           baseFont bg-white rounded-2xl shadowGray opacity-80  text-center"
                style={{ gridArea: "area1" }}
              >
                Click to watch on Youtube
              </div>
            </a>

            <div className="pb-2 font-semibold">{currCoverage.outlet}</div>
            <div className="pb-2 font-semibold">{currCoverage.title}</div>
            {/* <div className="pb-2 italic">{currCoverage.date}</div> */}
            <a
              className="w-11/12 sm:w-5/6 md:w-90 lg:w-100  flex flex-col justify-center"
              href={currCoverage.URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="italic orangeUnderline">
                {currCoverage.linkText}
                <FiExternalLink className="pl-1.5 inline text-yellow-darkish" size={24} />
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CoverageWebinars;
