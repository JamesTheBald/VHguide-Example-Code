import React from "react";

import CarouselTestimonials from "./CarouselTestimonials";
import CarouselFeaturedOn from "./CarouselFeaturedOn";
import CollabLogos from "../3aboutEtc/CollabLogos";
import LinkToPathSection from "../LinkToPathSection";
import { useMyContext } from "../../context/Context";

const Home4TestimonialsEtc = props => {
  const { topGap } = props;
  const { marginOuter } = useMyContext();

  return (
    <>
      <div
        className={`w-full flex flex-col items-center  text-blue-black`}
        style={{ paddingLeft: marginOuter, paddingRight: marginOuter }}
      >
        <div style={{ height: topGap }} />
        <h2 className="titleFont titleBig">Testimonials</h2>
        <div className="w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />
        <CarouselTestimonials />

        <div style={{ height: topGap }} />
        <h2 className="titleFont titleBig">Featured On</h2>
        <div className="lg:mb-4 w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />
        <CarouselFeaturedOn />

        <div className="mt-1 baseFont text-15 mxs:text-16 sm:text-18">
          <LinkToPathSection
            className="sm:mt-4 lg:mt-8  w-70 pt-1 mxs:w-90 sm:w-120 linkInvPill flex justify-center items-center"
            style={{ height: "43px" }}
            targetPath="/about"
            targetSection="Media Coverage"
            text="Read, Listen, or Watch"
          />
        </div>

        <div style={{ height: topGap }} />
        <h2 className="titleFont titleBig">Collaborators</h2>
        <div className="mb-1 mxs:mb-4  w-25 mxs:w-32 sm:w-40  h-5 mxs:h-6  border-blue-black border-0 border-b-3" />

        <CollabLogos size={"small"} />
      </div>
    </>
  );
};

export default Home4TestimonialsEtc;
