import React, { useRef } from "react";

import CarouselTestimonials from "./CarouselTestimonials";
import CarouselFeaturedOn from "./CarouselFeaturedOn";
import testimonials from "../../content/testimonials";
import CollabLogos from "../3aboutEtc/CollabLogos";

import LinkToPathSection from "../LinkToPathSection";
// import { useMyContext } from "../../context/Context";

const Home4TestimonialsEtc = (props) => {
  const { outerGap, topGap } = props;
  // const { winWidth } = useMyContext();

  const timeOnEach = 10000;
  const carouselRef = useRef(null);
  const numPages = Math.ceil(testimonials.length);

  return (
    <>
      <div
        className={`w-full flex flex-col items-center  text-blue-black`}
        style={{ paddingLeft: outerGap, paddingRight: outerGap }}
      >
        <div style={{ height: topGap }} />
        <div className="titleFont titleBig">Testimonials</div>
        <div className="w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />
        <CarouselTestimonials />

        <div style={{ height: topGap }} />
        <div className="titleFont titleBig">Featured On</div>
        <div className="lg:mb-4 w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />
        <CarouselFeaturedOn />
        
        <div className="mt-1 baseFont text-15 mxs:text-16 sm:text-18">
          <LinkToPathSection
            className="sm:mt-4 lg:mt-8  w-70 mxs:w-90 sm:w-120 linkInvPill flex justify-center items-center"
            style={{ height: "43px" }}
            targetPath="/about"
            targetSection="Media Coverage"
            text="Read, Listen, or Watch"
          />
        </div>

        <div style={{ height: topGap }} />
        <div className="titleFont titleBig">Collaborators</div>
        <div className="mb-1 mxs:mb-4  w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />

        <CollabLogos size={"small"} />
      </div>
    </>
  );
};

export default Home4TestimonialsEtc;