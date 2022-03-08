import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const DisplayGatsbyDynImage = ({ queryArray, fileName, wrapClass, wrapStyle, imgClass, altText, quality }) => {
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
            <div key={index} className={wrapClass} style={wrapStyle}>
              {item.node.ext === ".svg" ? (
                <img src={item.node.publicURL} alt={altText} className={imgClass} />
              ) : (
                item.node.childImageSharp.gatsbyImageData && (
                  <GatsbyImage
                    image={item.node.childImageSharp.gatsbyImageData}
                    alt={altText}
                    className={imgClass}
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
