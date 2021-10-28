import React from "react";
// import { GatsbyImage } from "gatsby-plugin-image";

import { useMyContext } from "../../context/Context";
import logoContent from "../../content/logoContent";

const CollabLogos = () => {
  // const { size } = props;
  let { queryData, log2 } = useMyContext();

  const collabLogos = queryData.current.collabLogos.edges;
  log2 && console.log("CollabLogos.js collabLogos=", collabLogos);

  return (
    <div
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mxl:grid-cols-5 xl:grid-cols-6  grid-flow-row
                   gap-x-8 md:gap-x-10   justify-center"
    >
      {logoContent.map((currLogo, indx) => {
        return (
          <div key={indx}>
            {collabLogos.map((item, index) => {
              if (item.node.relativePath === currLogo.fileName) {
                return (
                  <img
                    key={index}
                    src={item.node.publicURL}
                    alt={currLogo.alt}
                    className="w-60 mxs:w-64 sm:w-64 md:w-66 lg:w-70"
                    // className="h-22 mxs:h-25 sm:h-28 md:h-30 lg:h-32 mxl:h-35  bg-pink-100"
                  />
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
