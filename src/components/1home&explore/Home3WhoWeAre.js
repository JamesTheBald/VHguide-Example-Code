import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import DisplayGatsbyDynImage from "../4general/DisplayGatsbyDynImage";
import { useMyContext } from "../../context/Context";
import biosContentBI from "../../content/biosContentBI";
import landingTextOtherBI from "../../content/landingTextOtherBI";

const Home3WhoWeAre = () => {
  const { queryData, lang, log, log2 } = useMyContext();

  const homepagePics = queryData.current.homepagePics.edges;
  0 && console.log(log, log2);
  log2 && console.log("Home3WhoWeAre.js homepagePics=", homepagePics);
  log2 && console.log("Home3WhoWeAre.js biosContentBI=", biosContentBI);

  return (
    <>
      <div className="halfSectionGapHomePage  mt-6 sm:mt-8 mxl:mt-9" />
      <section className={`w-full stdMargins  flex flex-col items-left  text-blue-black bg-gray-light`}>
        <div className="halfSectionGapHomePage" />
        <div className="titleFont titleBig">{landingTextOtherBI.whoWeAre.title[lang]}</div>
        <div className="mt-4  smThenBaseFont xl:text-20">{landingTextOtherBI.whoWeAre.caption[lang]}</div>
        <div className="w-full  h-5 mxs:h-6 sm:h-7  border-solid border-b-2 border-gray-dark" />

        <div
          className="mt-12 sm:mt-16 lg:mt-20  w-full  flex flex-col lg:flex-row justify-between
          lg:grid lg:grid-cols-3  grid-flow-row  gap-x-10 lg:gap-x-16
          "
        >
          {biosContentBI.map((currBio, indx) => {
            log2 && console.log("Home3WhoWeAre.js .map() currBio=", currBio);
            if (indx >= 3) return <div key={indx} />;

            return (
              <div key={indx} className="flex flex-col sm:flex-row lg:flex-col items-baseline">
                <DisplayGatsbyDynImage
                  queryArray={homepagePics}
                  fileName={currBio.image}
                  wrapClass="w-28 mxs:w-32 sm:w-36 lg:w-56 rounded-full overflow-hidden flex-shrink-0 relative z-0"
                  imgClass="w-28 mxs:w-32 sm:w-36 lg:w-56  rounded-full relative z-0"
                  altText={`${currBio.name} portrait`}
                  quality={80}
                />

                <div className="sm:ml-10 lg:ml-0  sm:mb-12">
                  <div className="mt-5 lg:mt-11  plusFont font-semibold">{currBio.name}</div>
                  <div className="mt-4 mb-12 sm:mb-0  smThenBaseFont">{currBio.info[lang]}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" baseFont text-15 mxs:text-16 sm:text-18">
          <AnchorLink
            to="/about/credits"
            title={landingTextOtherBI.whoWeAre.button[lang]}
            className="pt-1  sm:mt-10 lg:mt-8  w-max px-8 h-10 linkInvPill flex justify-center items-center"
          />
        </div>
        <div className="halfSectionGapHomePage  mt-4 mxl:mt-6" />
      </section>
    </>
  );
};

export default Home3WhoWeAre;
