import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { useMyContext } from "../../context/Context";
import { biosContent } from "../../content/biosContent";

const Home3WhoWeAre = () => {
  const { queryData, log, log2 } = useMyContext();

  const homepagePics = queryData.current.homepagePics.edges;
  0 && console.log(log, log2);
  log2 && console.log("Home3WhoWeAre.js homepagePics=", homepagePics);

  // const bioWidth =
  //   winWidth < 510 ? "100%" : winWidth < 720 ? "80%" : winWidth < 1024 ? "29%" : winWidth < 1600 ? "28%" : "20%";

  return (
    <>
      <div className="halfSectionGapHomePage  mt-6 sm:mt-8 mxl:mt-9" />
      <section className={`w-full stdMargins  flex flex-col items-left  text-blue-black bg-gray-light`}>
        <div className="halfSectionGapHomePage" />
        <div className="titleFont titleBig">Who We Are</div>
        <div className="mt-4  smThenBaseFont xl:text-20">
          <span className="mr-1.5">
            The Vaccine Hesitancy Guide was developed by a team of researchers out of the University of Calgary’s School
            of Public Policy.
          </span>
          <br className="hidden lg:block" />
          <span>
            We assembled the Guide’s content out of interviews and conversations with primary care clinicians.
          </span>
        </div>
        <div className="w-full  h-5 mxs:h-6 sm:h-7  border-solid border-b-2 border-gray-dark" />

        <div className="mt-10 sm:mt-16 lg:mt-20  w-full  grid lg:grid-cols-3  grid-flow-row  gap-x-10 lg:gap-x-16">
          {/* <div className="mt-10 sm:mt-16 lg:mt-20  w-full flex flex-col sm:flex-row  items-center sm:items-start justify-between"> */}

          {biosContent.map((currBio, indx) => {
            log2 && console.log("Home3WhoWeAre.js .map() currBio=", currBio);
            if (indx >= 3) return <div key={indx} />;

            return (
              <div key={indx} className="flex flex-col sm:flex-row lg:flex-col">
                {/* <div key={indx} style={{ width: bioWidth }}> */}
                {homepagePics.map((item, index) => {
                  if (item.node.relativePath === currBio.image) {
                    return (
                      <div
                        key={index}
                        className="sm:mt-10  w-28 mxs:w-32 sm:w-36 lg:w-56 rounded-full overflow-hidden flex-shrink-0 relative z-0"
                        // "relative z-0" added as a workaround to border-radius bug, which shows up on mobile:
                        // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari
                      >
                        {/* -webkit-mask-image: -webkit-radial-gradient(white, black) */}
                        <GatsbyImage
                          image={item.node.childImageSharp.gatsbyImageData}
                          alt={`${currBio.name} portrait`}
                          className="w-28 mxs:w-32 sm:w-36 lg:w-56  rounded-full relative z-0"
                          quality={80}
                        />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}

                <div className="sm:ml-10 lg:ml-0  sm:mb-4">
                  <div className="mt-5 sm:mt-8 lg:mt-12  titleFont emphFont">{currBio.name}</div>
                  <div className="mt-4 mb-12 sm:mb-0  smThenBaseFont">{currBio.info}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="-mt-2 baseFont text-15 mxs:text-16 sm:text-18">
          <AnchorLink
            to="/about/credits"
            title="Learn more about our team"
            className="pt-1  sm:mt-10 lg:mt-8  w-max px-8 h-10 linkInvPill flex justify-center items-center"
          />
        </div>
        <div className="halfSectionGapHomePage  mt-6 sm:mt-8 mxl:mt-9" />
      </section>
    </>
  );
};

export default Home3WhoWeAre;
