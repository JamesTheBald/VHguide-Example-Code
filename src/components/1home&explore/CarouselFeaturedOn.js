import React, { useEffect, useRef } from "react";

import Carousel, { consts } from "react-elastic-carousel";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import featuredOnLogoPaths from "../../content/featuredOnLogoPaths";
import { useMyContext } from "../../context/Context";

const CarouselFeaturedOn = () => {
  const { winWidth, log2 } = useMyContext();

  const itemsPerPage = useRef();
  const numPages = useRef();

  useEffect(() => {
    itemsPerPage.current =
      winWidth < 600 ? 1 : winWidth < 800 ? 2 : winWidth < 1024 ? 3 : winWidth < 1400 ? 4 : winWidth < 1700 ? 5 : 6;
    numPages.current = featuredOnLogoPaths.length - itemsPerPage.current;
  }, [winWidth]);

  const timeOnEach = 2500;
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

  log2 && console.log("CarouselFeaturedOn.js featuredOnLogoPaths=", featuredOnLogoPaths);

  return (
    <>
      <Carousel
        ref={carouselRefFeaturedOn}
        className="w-full sm:mx-40  mt-4"
        itemsToShow={itemsPerPage.current}
        showArrows={true}
        enableAutoPlay={true}
        autoPlaySpeed={timeOnEach}
        transitionMs={1500}
        renderPagination={({ pages, activePage, onClick }) => CarouselDotsNone({ pages, activePage, onClick })}
        renderArrow={({ type, onClick, isEdge }) => MyArrow({ type, onClick, isEdge })}
        onNextEnd={({ index }) => {
          // from cristo-pr at https://github.com/sag1v/react-elastic-carousel/issues/9
          log2 && console.log("CarouselFeaturedOn.js onNextEnd() runs");
          clearTimeout(timer);
          if (index >= numPages.current) {
            timer = setTimeout(() => {
              carouselRefFeaturedOn.current.goTo(0);
            }, timeOnEach);
          }
        }}
      >
        {featuredOnLogoPaths.map((currLogo, indx) => {
          log2 && console.log("CarouselFeaturedOn.js .map currLogo=", currLogo);

          return (
            <button
              key={indx}
              className={`mx-6 flex items-center`}
              // ${currLogo.URL === '' ? "" : "cursor-pointer"}
              onClick={() => currLogo.URL && window.open(currLogo.URL, "_blank")}
              onKeyPress={() => currLogo.URL && window.open(currLogo.URL, "_blank")}
            >
              <img src={currLogo.imagePath} alt={currLogo.alt} />
            </button>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselFeaturedOn;
