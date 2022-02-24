import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const DisplayGatsbyDynImage = ({ queryArray, fileName, wrapperClass, wrapperStyle, imageClass, altText, quality }) => {
  // further image settings in page query (e.g. index.js, at bottom). e.g.
  //    childImageSharp {
  //      gatsbyImageData(formats: AUTO, placeholder: BLURRED, layout: CONSTRAINED)
  //    }

  // console.log("DisplayGatsbyDynImage.js queryResultsArray=", queryResultsArray);

  return (
    <>
      {queryArray.map((item, index) => {
        if (item.node.relativePath === fileName) {
          // if filename in queryResultsArray matches filename in content file...

          return (
            <div key={index} className={wrapperClass} style={wrapperStyle}>
              {item.node.ext === ".svg" ? (
                <img src={item.node.publicURL} alt={altText} className={imageClass} />
              ) : (
                item.node.childImageSharp.gatsbyImageData && (
                  <GatsbyImage
                    image={item.node.childImageSharp.gatsbyImageData}
                    alt={altText}
                    className={imageClass}
                    quality={quality}
                  />
                )
              )}
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default DisplayGatsbyDynImage;
