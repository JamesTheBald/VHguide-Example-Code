import React from "react";

import CarouselTestimonials from "./CarouselTestimonials";
import CarouselFeaturedOn from "./CarouselFeaturedOn";
import CollabLogos from "../3aboutEtc/CollabLogos";
import LinkToPathAndSection from "../LinkToPathAndSection";
// import { useMyContext } from "../../context/Context";

const Home4TestimonialsEtc = () => {
  // const { marginOuter } = useMyContext();

  return (
    <>
      <div
        className={`w-full stdMargins  flex flex-col items-center  text-blue-black`}
      >
        <div className="sectionGapHomePage" />

        <h2 className="titleFont titleBig">Testimonials</h2>
        <div className="divider" />
        <CarouselTestimonials />

        <div className="sectionGapHomePage" />
        <h2 className="titleFont titleBig">Featured On</h2>
        <div className="divider" />
        <CarouselFeaturedOn />

        <div className="mt-1 baseFont text-15 mxs:text-16 sm:text-18">
          <LinkToPathAndSection
            className="sm:mt-4 lg:mt-8  w-70 pt-1 mxs:w-90 sm:w-120 linkInvPill flex justify-center items-center"
            style={{ height: "43px" }}
            targetPath="/about"
            targetPanel="coverage"
            text="Read, Listen, or Watch"
          />
        </div>

        <div className="sectionGapHomePage" />
        <h2 className="titleFont titleBig">Collaborators</h2>
        <div className="divider" />

        <CollabLogos size="large" />
      </div>
    </>
  );
};

export default Home4TestimonialsEtc;
