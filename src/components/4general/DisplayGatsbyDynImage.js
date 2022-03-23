import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const DisplayGatsbyDynImage = props => {
  const { queryArray, fileName, wrapClass, wrapStyle, imgClass, layout, altText, quality } = props;
  // further image settings available in page query (e.g. index.js, at bottom). e.g.
  //    childImageSharp {
  //      gatsbyImageData(formats: AUTO, placeholder: BLURRED, layout: CONSTRAINED)
  //    }

  const log = false;
  log && console.log("DisplayGatsbyDynImage.js queryArray=", queryArray);
  log && console.log("DisplayGatsbyDynImage.js filename=", fileName);

  return (
    <>
      {queryArray.map((item, index) => {
        log && console.log("For index ", index, ", item.node.relativePath=", item.node.relativePath);
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
                    layout={layout}
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
