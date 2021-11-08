import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import CarouselTestimonials from "./CarouselTestimonials";
import CarouselFeaturedOn from "./CarouselFeaturedOn";
import CollabLogos from "../3aboutEtc/CollabLogos";
// import { useMyContext } from "../../context/Context";

const Home4TestimonialsEtc = () => {
  // const { winWidth } = useMyContext();

  return (
    <>
      <div className={`w-full stdMargins  flex flex-col items-center  text-blue-black`}>
        <div className="sectionGapHomePage" />

        <h2 className="titleFont titleBig">Testimonials</h2>
        <div className="divider" />
        <CarouselTestimonials />

        <div className="sectionGapHomePage" />
        <h2 className="titleFont titleBig">Featured On</h2>
        <div className="divider" />
        <CarouselFeaturedOn />

        <div className="mt-1 baseFont text-15 mxs:text-16 sm:text-18">
          <AnchorLink
            to="/about/#mediaCoverage"
            title="Read, Listen, or Watch"
            className="sm:mt-4 lg:mt-8  w-70 pt-1 mxs:w-90 sm:w-120 linkInvPill flex justify-center items-center"
            style={{ height: "47px" }}
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
