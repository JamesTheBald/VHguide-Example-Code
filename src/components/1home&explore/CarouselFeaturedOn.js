import React, { useEffect, useState, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Carousel from "react-elastic-carousel";

import CarouselDotsNone from "./CarouselDotsNone";
import MyArrow from "./CarouselArrows";
import featuredOnLogoInfoBI from "../../content/featuredOnLogoInfoBI";
import { useMyContext } from "../../context/Context";

const CarouselFeaturedOn = () => {
  const { winWidth, queryData, lang, log, log2 } = useMyContext();

  false && console.log(log, log2);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const featuredOnLogos = queryData.current.featuredOnLogos.edges;

  useEffect(() => {
    setItemsPerPage(
      winWidth < 600 ? 1 : winWidth < 900 ? 2 : winWidth < 1366 ? 3 : winWidth < 1920 ? 4 : winWidth < 2500 ? 5 : 6
    );
    setNumPages(featuredOnLogoInfoBI.length - itemsPerPage);
  }, [winWidth, itemsPerPage]);

  const timeOnEach = 1800;
  const timeTransition = 1000;
  const carouselRefFeaturedOn = useRef();
  let timer;

  log2 && console.log("CarouselFeaturedOn.js featuredOnLogos=", featuredOnLogos);
  log2 && console.log("CarouselFeaturedOn.js featuredOnLogoInfo=", featuredOnLogoInfoBI);

  return (
    <>
      <Carousel
        ref={carouselRefFeaturedOn}
        className="w-full my-6"
        itemsToShow={itemsPerPage}
        showArrows={true}
        enableAutoPlay={true}
        autoPlaySpeed={timeOnEach}
        transitionMs={timeTransition}
        renderPagination={({ pages, activePage, onClick }) => (
          <CarouselDotsNone pages={pages} activePage={activePage} onClick={onClick} />
        )}
        renderArrow={({ type, onClick, isEdge }) => <MyArrow type={type} onClick={onClick} isEdge={isEdge} />}
        onNextEnd={({ index }) => {
          // from cristo-pr at https://github.com/sag1v/react-elastic-carousel/issues/9
          log2 && console.log("CarouselFeaturedOn.js onNextEnd() runs");
          clearTimeout(timer);
          if (index >= numPages) {
            timer = setTimeout(() => {
              carouselRefFeaturedOn?.current?.goTo && carouselRefFeaturedOn.current.goTo(0);
            }, timeOnEach);
          }
        }}
      >
        {featuredOnLogoInfoBI.map((currOutlet, indx) => {
          log2 && console.log("CarouselFeaturedOn.js .map currLogo.URL=", currOutlet.URL);

          return (
            <div
              key={indx}
              className={`mx-3 flex items-center h-30  ${currOutlet.URL === "" ? "" : "cursor-pointer"}`}
              role="link"
              tabIndex={indx}
              onClick={() => currOutlet.URL && window.open(currOutlet.URL, "_blank")}
              onKeyPress={() => currOutlet.URL && window.open(currOutlet.URL, "_blank")}
            >
              {featuredOnLogos.map((currLogo, index) => {
                if (currLogo.node.relativePath === currOutlet.imageName) {
                  return (
                    <div key={index}>
                      {currLogo.node.childImageSharp !== null ? (
                        <GatsbyImage
                          image={currLogo.node.childImageSharp.gatsbyImageData}
                          alt={currOutlet.alt[lang]}
                          style={{
                            width: currOutlet.scalePercent + "%",
                            transform: `translate(${currOutlet.offsetPercent}%, 0%)`,
                          }}
                        />
                      ) : (
                        <img
                          src={currLogo.node.publicURL}
                          alt={currOutlet.alt[lang]}
                          style={{
                            width: currOutlet.scalePercent + "%",
                            transform: `translate(${currOutlet.offsetPercent}%, 0%)`,
                          }}
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
      </Carousel>
    </>
  );
};

export default CarouselFeaturedOn;
