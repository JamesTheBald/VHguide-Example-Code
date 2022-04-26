import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FiExternalLink } from "react-icons/fi";

import { useMyContext } from "../../context/Context";
import featuredOnContentBI from "../../content/featuredOnContentBI";

const CoverageGridListBI = ({ type, className }) => {
  const { lang, log } = useMyContext();
  const imgParams = { quality: 90, layout: "constrained" };

  const content = featuredOnContentBI[type];
  log && console.log("CoverageGridListBI.js type=", type, ", content=", content);

  return (
    <div className={className}>
      {content.map((currCov, index) => {

        return (
          <div key={index}>
            {/* Media type icon */}
            <div className="mb-4  w-8 h-8 object-contain opacity-50">
              {currCov.iconType === "news" ? (
                <StaticImage
                  src="../../assets/featuredOn/icons/noun_news article_3817600.svg"
                  alt="news"
                  {...imgParams}
                />
              ) : currCov.iconType === "tv" ? (
                <StaticImage src="../../assets/featuredOn/icons/noun_TV_4212884.svg" alt="TV" {...imgParams} />
              ) : currCov.iconType === "radio" ? (
                <StaticImage src="../../assets/featuredOn/icons/noun_Radio_2527494.svg" alt="radio" {...imgParams} />
              ) : (
                <></>
              )}
            </div>

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

export default CoverageGridListBI;
