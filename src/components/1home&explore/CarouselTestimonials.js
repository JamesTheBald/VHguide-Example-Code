import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";

import testimonialsBI from "../../content/testimonialsBI";
import CarouselDots from "./CarouselDotsTestimonials";
import { useMyContext } from "../../context/Context";

const CarouselTestimonials = () => {
  const { lang } = useMyContext();

  const timeOnEach = 10000;
  const carouselRefTestimonials = useRef(null);
  const numPages = Math.ceil(testimonialsBI.length);
  let timeout;

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
        {testimonialsBI.map((currTest, indx) => {
          return (
            <div key={indx}>
              <div className="max-w-220 w-5/6 mx-auto">{currTest.quote[lang]}</div>
              <div className="mt-6 italic">{currTest.name[lang]}</div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselTestimonials;
