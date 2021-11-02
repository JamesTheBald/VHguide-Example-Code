import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import testimonials from "../../content/testimonials";
// import { useMyContext } from "../../context/Context";

const CarouselTestimonials = () => {
  // const { winWidth, log2 } = useMyContext();

  const timeOnEach = 10000;
  const carouselRefTestimonials = useRef(null);
  const numPages = Math.ceil(testimonials.length);
  let timeout;

  const CarouselDots = (props) => {
    const { pages, activePage, onClick } = props;
    return (
      <div className="flex">
        {pages.map((page) => {
          const isActivePage = activePage === page;
          return (
            <button key={page} className="mt-3 mx-1 cursor-pointer" onClick={() => onClick(page)}>
              {isActivePage ? (
                <div className="m-2  bg-blue-black rounded-full" style={{ width: 12, height: 12 }} />
              ) : (
                <div className="m-2  border-2 border-solid border-blue-black rounded-full" style={{ width: 12, height: 12 }} />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <Carousel
        ref={carouselRefTestimonials}
        className="pt-8 smThenBaseFont text-center max-w-220"
        showArrows={false}
        enableAutoPlay={true}
        autoPlaySpeed={timeOnEach}
        transitionMs={1200}
        renderPagination={({ pages, activePage, onClick }) => CarouselDots({ pages, activePage, onClick })}
        onNextEnd={({ index }) => {
          // from cristo-pr at https://github.com/sag1v/react-elastic-carousel/issues/9
          clearTimeout(timeout);
          if (index + 1 === numPages) {
            timeout = setTimeout(() => {
              carouselRefTestimonials?.current?.goTo && carouselRefTestimonials.current.goTo(0);
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
    </>
  );
};

export default CarouselTestimonials;
