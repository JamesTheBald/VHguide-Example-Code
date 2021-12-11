import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { useMyContext } from "../../context/Context";
import logoContent from "../../content/collabContent";
// import logoContent from "../../content/logoContent";

const CollabLogos = () => {
  const { queryData, log, log2 } = useMyContext();

  false && console.log(log, log2);
  const collabLogos = queryData.current.collabLogos.edges;
  log && console.log("CollabLogos.js collabLogos=", collabLogos);

  return (
    <div
      className={`ml-6 mxs:ml-0  justify-start mxs:justify-center grid mxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mxl:grid-cols-5   
            grid-flow-row  gap-x-10 sm:gap-x-14 md:gap-x-18 xl:gap-x-24  gap-y-2 mxs:gap-y-4`}
    >
      {logoContent.map((currLogo, indx) => {
        return (
          <div key={indx}>
            {collabLogos.map((item, index) => {
              if (item.node.relativePath === currLogo.imageName) {
                return (
                  <div key={index}>
                    {item.node.childImageSharp !== null ? (
                      <GatsbyImage
                        image={item.node.childImageSharp.gatsbyImageData}
                        alt={currLogo.alt}
                        className="w-56 mxs:w-48 sm:w-60 md:w-60 lg:w-64"
                      />
                    ) : (
                      <img
                        src={item.node.publicURL}
                        alt={currLogo.alt}
                        // className="w-60 mxs:w-64 sm:w-64 md:w-66 lg:w-70"
                        // className="h-22 mxs:h-25 sm:h-28 md:h-30 lg:h-32 mxl:h-35  bg-pink-100"
                      />
                    )}
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CollabLogos;
