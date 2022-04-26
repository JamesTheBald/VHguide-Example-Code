import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import { AnchorLink } from "gatsby-plugin-anchor-links";  
// Use AnchoLink instead of Link when there are links that link to other pages AND links 
// that scroll to another position on the current page.

import CarouselTestimonials from "./CarouselTestimonials";
import CarouselCollaborators from "./CarouselCollaborators";
import { useMyContext } from "../../context/Context";
import landingTextOtherBI from "../../content/landingTextOtherBI";

const Home4TestimonialsEtc = () => {
  const imageProps = {
    className: "rounded-xl",
    placeholder: "blurred",
    loading: "eager",
    layout: "constrained",
    quality: 90,
  };
  const { lang } = useMyContext();

  return (
    <>
      <div className="w-full">
        <div className="halfSectionGapHomePage mt-4" />

        <section name="Media Coverage panel" className="stdMargins text-gray-light">
          <div
            className="w-full  flex flex-col lg:flex-row  spacing-between 
             p-5 mxs:px-8 sm:px-10 md:px-14 lg:px-18  mxs:py-7 sm:py-9 md:py-12 lg:py-16 xl:py-20  bg-blue-black
             rounded-2xl mxs:rounded-3xl sm:rounded-4xl  smThenBaseFont"
          >
            <div className="lg:mr-12 w-full lg:w-100 mxl:w-110 xl:w-120 flex-shrink-0">
              <h2 className="titleFont titleBig">{landingTextOtherBI.mediaCoverage.title[lang]}</h2>
              <div className="pt-3">{landingTextOtherBI.mediaCoverage.caption[lang]}</div>
              <br />
              <Link
                to="/about/media"
                className="pt-1  w-max px-4 mxs:px-7  h-9 mxs:h-12  text-blue-main hover:text-gray-light
                rounded-full cursor-pointer  flex justify-center items-center  smThenBaseFont mxs:text-18  
                border-2 border-solid bg-gray-light hover:bg-opacity-0"
              >
                {landingTextOtherBI.mediaCoverage.button[lang]}
              </Link>
            </div>

            <div
              className="mt-6 mxs:mt-8 sm:mt-12 mb-4 mxs:mb-5 md:mb-6 lg:my-auto  w-full
                    grid grid-cols-2 mxs:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8"
            >
              <div className="object-contain">
                <StaticImage
                  src="../../assets/mediaScreenshots/Global News.jpg"
                  alt="Global News article"
                  {...imageProps}
                />
              </div>
              <div className="object-contain">
                <StaticImage
                  src="../../assets/mediaScreenshots/Calgary Herald.jpg"
                  alt="Calgary Herald article"
                  {...imageProps}
                />
              </div>
              <div className="object-contain hidden mxs:block">
                <StaticImage src="../../assets/mediaScreenshots/CBC.jpg" alt="CBC article" {...imageProps} />
              </div>
            </div>

            {/* <div className="h-8" /> */}
          </div>
        </section>

        <div className="halfSectionGapHomePage mt-4" />

        <div className="w-full  stdMargins  flex flex-col items-center  bg-gray-light">
          <div className="halfSectionGapHomePage -mt-4" />
          <h2 className="titleFont titleBig">{landingTextOtherBI.testimonials.title[lang]}</h2>
          <div className="divider" />
          <CarouselTestimonials />
          <div className="halfSectionGapHomePage -mt-4" />
        </div>

        <div className="w-full  stdMargins  flex flex-col items-center">
          <div className="halfSectionGapHomePage mt-2" />
          <h2 className="titleFont titleBig">{landingTextOtherBI.collaborators.title[lang]}</h2>
          <div className="divider" />
          <CarouselCollaborators size="large" />
        </div>
      </div>
    </>
  );
};

export default Home4TestimonialsEtc;
