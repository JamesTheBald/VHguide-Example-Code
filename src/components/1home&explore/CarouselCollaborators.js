import React, { useEffect, useState, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Carousel from "react-elastic-carousel";

import collabContentBI from "../../content/collabContentBI";
import CarouselDotsNone from "./CarouselDotsNone";
import MyArrow from "./CarouselArrows";
import { useMyContext } from "../../context/Context";

const CarouselCollaborators = () => {
  const { winWidth, queryData, lang, log, log2 } = useMyContext();

  false && console.log(log, log2);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const collabLogos = queryData.current.collabLogos.edges;
  log2 && console.log("CarouselCollaborators.js collabContentBI=", collabContentBI);
  log2 && console.log("CarouselCollaborators.js collabLogosBI=", collabLogos);

  useEffect(() => {
    setItemsPerPage(
      winWidth < 600
        ? 1
        : winWidth < 720
        ? 2
        : winWidth < 1024
        ? 3
        : winWidth < 1366
        ? 4
        : winWidth < 1920
        ? 5
        : winWidth < 1920
        ? 6
        : 7
    );
    setNumPages(collabContentBI.length - itemsPerPage);
  }, [winWidth, itemsPerPage]);

  const timeOnEach = 1800;
  const timeTransition = 1000;
  const carouselRefCollab = useRef();
  let timer;

  return (
    <>
      <Carousel
        ref={carouselRefCollab}
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
          log2 && console.log("CarouselCollaborators.js onNextEnd() runs");
          clearTimeout(timer);
          if (index >= numPages) {
            timer = setTimeout(() => {
              carouselRefCollab?.current?.goTo && carouselRefCollab.current.goTo(0);
            }, timeOnEach);
          }
        }}
      >
        {collabContentBI.map((currCollab, indx) => {
          log2 && console.log("CarouselCollaborators.js .map currLogo.URL=", currCollab.URL);

          return (
            <button
              key={indx}
              className={`mx-3 flex items-center max-h-24  ${currCollab.URL === "" ? "" : "cursor-pointer"}`}
              // role="link"
              tabIndex={indx}
              onClick={() => currCollab.URL && window.open(currCollab.URL, "_blank")}
              onKeyPress={() => currCollab.URL && window.open(currCollab.URL, "_blank")}
            >
              {collabLogos.map((currLogo, index) => {
                if (currLogo.node.relativePath === currCollab.imageName) {
                  return (
                    <div key={index}>
                      {currLogo.node.childImageSharp !== null ? (
                        <GatsbyImage
                          image={currLogo.node.childImageSharp.gatsbyImageData}
                          alt={currCollab.alt[lang]}
                          style={{
                            width: currCollab.scalePercent + "%",
                            transform: `translate(${currCollab.offsetPercent}%, 0%)`,
                          }}
                        />
                      ) : (
                        <img
                          src={currLogo.node.publicURL}
                          alt={currCollab.alt[lang]}
                          style={{
                            width: currCollab.scalePercent + "%",
                            transform: `translate(${currCollab.offsetPercent}%, 0%)`,
                          }}
                        />
                      )}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </button>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselCollaborators;
