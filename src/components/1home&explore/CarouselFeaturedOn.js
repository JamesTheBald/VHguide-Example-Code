import React, { useEffect, useState, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Carousel, { consts } from "react-elastic-carousel";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import featuredOnLogoPaths from "../../content/featuredOnLogoPaths";
import { useMyContext } from "../../context/Context";

const CarouselFeaturedOn = () => {
  const { winWidth, queryData, log, log2 } = useMyContext();

  false && console.log(log, log2);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const featuredOnLogos = queryData.current.featuredOnLogos.edges;

  useEffect(() => {
    setItemsPerPage(
      // winWidth < 600 ? 1 : winWidth < 800 ? 2 : winWidth < 1024 ? 3 : winWidth < 1400 ? 4 : winWidth < 1700 ? 5 : 6
      winWidth < 600 ? 1 : winWidth < 900 ? 2 : winWidth < 1366 ? 3 : winWidth < 1920 ? 4 : winWidth < 2500 ? 5 : 6
    );
    setNumPages(featuredOnLogoPaths.length - itemsPerPage);
  }, [winWidth, itemsPerPage]);

  const timeOnEach = 1800;
  const timeTransition = 1000;
  const carouselRefFeaturedOn = useRef();
  // const numPages = Math.ceil(featuredOnLogoPaths.length/itemsPerPage);
  let timer;

  const CarouselDotsNone = props => {
    const { pages } = props;
    return (
      <div className="hidden">
        {pages.map(page => {
          return <div key={page} />;
        })}
      </div>
    );
  };

  const arrowSize = winWidth < 720 ? 40 : 50;
  const MyArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <>
          <IoIosArrowDropleftCircle size={arrowSize} className="mr-4" />
        </>
      ) : (
        <>
          <IoIosArrowDroprightCircle size={arrowSize} className="ml-4" />
        </>
      );

    // '👈' : '👉'
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={isEdge ? `text-blue-black opacity-30` : "text-blue-black opacity-70"}
      >
        {pointer}
      </button>
    );
  };

  log2 && console.log("CarouselFeaturedOn.js featuredOnLogos=", featuredOnLogos);
  log2 && console.log("CarouselFeaturedOn.js featuredOnLogoPaths=", featuredOnLogoPaths);

  return (
    <>
      <Carousel
        ref={carouselRefFeaturedOn}
        className="w-full  mt-5 mb-6"
        // className="w-full sm:mx-40  mt-4"
        itemsToShow={itemsPerPage}
        showArrows={true}
        enableAutoPlay={true}
        autoPlaySpeed={timeOnEach}
        transitionMs={timeTransition}
        renderPagination={({ pages, activePage, onClick }) => CarouselDotsNone({ pages, activePage, onClick })}
        renderArrow={({ type, onClick, isEdge }) => MyArrow({ type, onClick, isEdge })}
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
        {featuredOnLogoPaths.map((currLogo, indx) => {
          log2 && console.log("CarouselFeaturedOn.js .map currLogo.URL=", currLogo.URL);

          return (
            <div
              key={indx}
              className={`mx-3 flex items-center h-30  ${currLogo.URL === "" ? "" : "cursor-pointer"}`}
              role="link"
              tabIndex={indx}
              onClick={() => currLogo.URL && window.open(currLogo.URL, "_blank")}
              onKeyPress={() => currLogo.URL && window.open(currLogo.URL, "_blank")}
            >
              {featuredOnLogos.map((item, index) => {
                if (item.node.relativePath === currLogo.imageName) {
                  return (
                    <div key={index}>
                      {item.node.childImageSharp !== null ? (
                        <GatsbyImage
                          image={item.node.childImageSharp.gatsbyImageData}
                          alt={currLogo.alt}
                          style={{
                            width: currLogo.scalePercent + "%",
                            transform: `translate(${currLogo.offsetPercent}%, 0%)`,
                          }}
                        />
                      ) : (
                        <img
                          src={item.node.publicURL}
                          alt={currLogo.alt}
                          style={{
                            width: currLogo.scalePercent + "%",
                            transform: `translate(${currLogo.offsetPercent}%, 0%)`,
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
