import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { useMyContext } from "../../context/Context";
import { landingBioContent } from "../../content/landingBioContent";

const Home3WhoWeAre = () => {
  const { winWidth, queryData, log, log2 } = useMyContext();

  const homepagePics = queryData.current.homepagePics.edges;
  false & log && console.log();
  log2 && console.log("Home3WhoWeAre.js homepagePics=", homepagePics);

  const bioWidth =
    winWidth < 510 ? "100%" : winWidth < 720 ? "80%" : winWidth < 1024 ? "29%" : winWidth < 1600 ? "28%" : "20%";

  return (
    <>
      <section className={`w-full stdMargins  flex flex-col items-center  text-blue-black`}>
        <div className="sectionGapHomePage -my-5" />
        <div className="titleFont titleBig">Who We Are</div>
        <div className="divider" />
        <div className="mt-9 max-w-220  smThenBaseFont xl:text-20 text-center">
          The Vaccine Hesitancy Guide was developed by a team of researchers out of the University of Calgary’s School
          of Public Policy. We assembled the Guide’s content out of interviews and conversations with primary care
          clinicians.
        </div>

        <div
          className="mt-10 lg:mt-14 w-full flex flex-col sm:flex-row  
                        items-center sm:items-start justify-between md:justify-around  text-center"
        >
          {landingBioContent.map((currBio, indx) => {
            log2 && console.log("Home3WhoWeAre.js .map() currBio=", currBio);

            return (
              <div key={indx} style={{ width: bioWidth }}>
                {homepagePics.map((item, index) => {
                  if (item.node.relativePath === currBio.image) {
                    return (
                      <div key={index}>
                        <GatsbyImage
                          image={item.node.childImageSharp.gatsbyImageData}
                          alt={`${currBio.name} portrait`}
                          className="mx-auto w-2/3 mxs:w-1/2 sm:w-5/6 lg:w-3/4 xl:w-3/4 rounded-full"
                          quality={80}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}

                <div className="mt-5 mxs:mt-6 lg:mt-8 titleFont emphFont text-center">{currBio.name}</div>
                <div className="mt-4 mb-12 sm:mb-0  smThenBaseFont">{currBio.info}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-1 baseFont text-15 mxs:text-16 sm:text-18">
          <AnchorLink
            to="/about/#credits"
            title="Learn more about our team"
            className="pt-1  sm:mt-10 lg:mt-8  w-70 mxs:w-90 sm:w-110  h-10 linkInvPill flex justify-center items-center"
          />
        </div>
      </section>
    </>
  );
};

export default Home3WhoWeAre;
