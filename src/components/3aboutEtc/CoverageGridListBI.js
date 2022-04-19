import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FiExternalLink } from "react-icons/fi";

import { useMyContext } from "../../context/Context";
import coverage from "../../content/featuredOnContent";

const CoverageGridListBI = ({ type, className }) => {
  const { lang } = useMyContext();
  const imgParams = { quality: 90, layout: "constrained" };

  return (
    <div className={className}>
      {coverage[type].map((currCoverage, index) => {
        const currCov = {
          ...currCoverage,
          source: lang === "EN" || !currCoverage.source_FR ? currCoverage.source_EN : currCoverage.source_FR,
          title: lang === "EN" || !currCoverage.title_FR ? currCoverage.title_EN : currCoverage.title_FR,
          date: lang === "EN" || !currCoverage.date_FR ? currCoverage.date_EN : currCoverage.date_FR,
          linkText: lang === "EN" || !currCoverage.linkText_FR ? currCoverage.linkText_EN : currCoverage.linkText_FR,
        };

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

            <div className="pb-2 font-semibold">{currCov.source}</div>
            <div className="pb-2 font-semibold">{currCov.title}</div>
            <div className="pb-2 italic">{currCov.date}</div>
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

export default CoverageGridListBI;
