import React, { useRef } from "react";
// import React, { useContext, useRef } from "react";
// import { useMyContext } from "../../context/Context";
import Carousel from "react-elastic-carousel";
import testimonials from "../../content/testimonials";
import CollabLogos from "../3aboutEtc/CollabLogos";

const Home4TestimonialsEtc = (props) => {
  const { outerGap, topGap } = props;
  // const { winWidth } = useMyContext();

  const timeOnEach = 10000;
  const carouselRef = useRef(null);
  const numPages = Math.ceil(testimonials.length);
  let resetTimeout;

  const CarouselDots = (props) => {
    const { pages, activePage, onClick } = props;
    return (
      <div className="flex">
        {pages.map((page) => {
          const isActivePage = activePage === page;
          return (
            <button key={page} className="mt-3 cursor-pointer" onClick={() => onClick(page)}>
              {isActivePage ? (
                <div className="m-1.5  bg-blue-black rounded-full" style={{ width: 10, height: 10 }} />
              ) : (
                <div className="m-1.5  border-2 border-blue-black rounded-full" style={{ width: 10, height: 10 }} />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div
        className={`w-full flex flex-col items-center  text-blue-black`}
        style={{ paddingLeft: outerGap, paddingRight: outerGap }}
      >
        <div style={{ height: topGap }} />
        <div className="titleFont titleBig">Testimonials</div>
        <div className="w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />

        <Carousel
          ref={carouselRef}
          className="pt-10 smThenBaseFont text-center max-w-220"
          showArrows={false}
          enableAutoPlay={true}
          autoPlaySpeed={timeOnEach}
          transitionMs={1200}
          renderPagination={({ pages, activePage, onClick }) => CarouselDots({ pages, activePage, onClick })}
          onNextEnd={({ index }) => {
            // from cristo-pr at https://github.com/sag1v/react-elastic-carousel/issues/9
            clearTimeout(resetTimeout);
            if (index + 1 === numPages) {
              resetTimeout = setTimeout(() => {
                carouselRef?.current?.goTo(0);
              }, timeOnEach);
            }
          }}
        >
          {testimonials.map((currTest, indx) => {
            return (
              <div key={indx}>
                <div className="max-w-220 w-5/6 mx-auto">{currTest.quote}</div>
                <div className="mt-6 italic">{currTest.name}</div>
              </div>
            );
          })}
        </Carousel>

        <div style={{ height: topGap }} />
        <div className="titleFont titleBig">Collaborators</div>
        <div className="mb-1 mxs:mb-4  w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />

        <CollabLogos size={"small"} />
      </div>
    </>
  );
};

export default Home4TestimonialsEtc;
