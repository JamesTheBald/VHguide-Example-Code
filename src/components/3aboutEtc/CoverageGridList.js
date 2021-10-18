import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { FiExternalLink } from "react-icons/fi";

import coverage from "../../content/featuredOnContent";

const CoverageGridList = ({ type, className }) => {
  return (
    <div
      className={`w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row  
                        sm:gap-x-16 lg:gap-x-20  gap-y-10 sm:gap-y-16 lg:gap-y-20  
                        baseFont text-blue-black  ${className}`}
    >
      {coverage[type].map((currCoverage, index) => {
        return (
          <div key={index} className="">
            {/* Media type icon */}

            <div className="mb-3  w-8 h-8 object-contain opacity-50">
              {currCoverage.iconType === "news" ? (
                <StaticImage src="../../images/featuredOn/icons/noun_news article_3817600.svg" alt="news" />
              ) : currCoverage.iconType === "tv" ? (
                <StaticImage src="../../images/featuredOn/icons/noun_TV_4212884.svg" alt="TV" />
              ) : currCoverage.iconType === "radio" ? (
                <StaticImage src="../../images/featuredOn/icons/noun_Radio_2527494.svg" alt="radio" />
              ) : (
                <></>
              )}
            </div>

            <div className="pb-2 font-semibold">{currCoverage.outlet}</div>
            <div className="pb-2 font-semibold">{currCoverage.title}</div>
            <div className="pb-2 italic">{currCoverage.date}</div>
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

export default CoverageGridList;
